import { useEffect, useState, type FormEvent, type ChangeEvent } from 'react';
import { supabase, BUCKET, fetchGallery, type GalleryImage } from '../lib/supabase';

/**
 * Hidden image CMS at /admin — same login as the DJ site CMS.
 * Upload photos to the Events gallery; delete ones you no longer want.
 */
export default function Admin() {
  const [session, setSession] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(!!data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(!!s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchGallery('events').then(setImages);
  }, [session]);

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
  };

  const upload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setBusy(true);
    setNotice('');
    let ok = 0;
    for (const file of Array.from(files)) {
      const path = `events/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, file);
      if (upErr) {
        setNotice(`Upload failed: ${upErr.message}`);
        continue;
      }
      const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
      const { error: insErr } = await supabase
        .from('cor_gallery')
        .insert({ section: 'events', image_url: data.publicUrl });
      if (!insErr) ok++;
    }
    setNotice(`${ok} photo${ok === 1 ? '' : 's'} uploaded.`);
    setImages(await fetchGallery('events'));
    setBusy(false);
    e.target.value = '';
  };

  const remove = async (img: GalleryImage) => {
    if (!confirm('Delete this photo from the site?')) return;
    setBusy(true);
    const marker = `/object/public/${BUCKET}/`;
    const idx = img.image_url.indexOf(marker);
    if (idx !== -1) {
      const path = decodeURIComponent(img.image_url.slice(idx + marker.length));
      await supabase.storage.from(BUCKET).remove([path]);
    }
    await supabase.from('cor_gallery').delete().eq('id', img.id);
    setImages(await fetchGallery('events'));
    setBusy(false);
  };

  if (session === null) return null;

  if (!session) {
    return (
      <main className="section" style={{ minHeight: '80svh', paddingTop: '10rem' }}>
        <div className="container" style={{ maxWidth: '420px' }}>
          <span className="kicker">Admin</span>
          <h2>Sign in</h2>
          <p className="lede" style={{ margin: '0.8rem 0 1.6rem', fontSize: '0.95rem' }}>
            Use the same email and password as your DJ site CMS.
          </p>
          <form onSubmit={login} className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className="btn btn--primary" type="submit">Sign In</button>
            {error && <p className="form-status form-status--err">{error}</p>}
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="section" style={{ paddingTop: '9rem', minHeight: '80svh' }}>
      <div className="container">
        <span className="kicker">Admin · Events Gallery</span>
        <h2>Manage photos</h2>
        <p className="lede" style={{ margin: '0.8rem 0 2rem' }}>
          Photos you upload here appear in the "Scenes from the revelry" gallery on the
          Events page. You can select multiple photos at once.
        </p>

        <label className="btn btn--primary" style={{ cursor: 'pointer' }}>
          {busy ? 'Working…' : '+ Upload Photos'}
          <input type="file" accept="image/*" multiple onChange={upload} style={{ display: 'none' }} disabled={busy} />
        </label>
        <button
          className="btn btn--ghost"
          style={{ marginLeft: '1rem' }}
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
        {notice && <p className="form-status form-status--ok">{notice}</p>}

        <div className="gallery-grid" style={{ marginTop: '2.5rem' }}>
          {images.map((img) => (
            <div className="gallery-item" key={img.id} style={{ position: 'relative' }}>
              <img src={img.image_url} alt="" loading="lazy" />
              <button
                onClick={() => remove(img)}
                disabled={busy}
                style={{
                  position: 'absolute',
                  top: '0.6rem',
                  right: '0.6rem',
                  background: 'rgba(0,0,0,0.75)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  padding: '0.35rem 0.7rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                Delete
              </button>
            </div>
          ))}
          {images.length === 0 && (
            <p style={{ color: 'var(--text-faint)' }}>
              No CMS photos yet — the Events page is showing its built-in starter photos.
              Upload some to replace them.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
