import { useEffect, useState } from 'react';
import { fetchGallery, type GalleryImage } from '../lib/supabase';
import { Reveal } from '../motion/Reveal';

interface GalleryProps {
  section: string;
  /** Static fallback images shown until CMS images exist */
  fallback?: string[];
}

export function Gallery({ section, fallback = [] }: GalleryProps) {
  const [images, setImages] = useState<GalleryImage[] | null>(null);

  useEffect(() => {
    fetchGallery(section).then(setImages);
  }, [section]);

  const urls =
    images && images.length > 0 ? images.map((i) => i.image_url) : fallback;

  if (urls.length === 0) return null;

  return (
    <Reveal stagger={0.06} className="gallery-grid">
      {urls.map((src) => (
        <div className="gallery-item hover-spring" key={src}>
          <img src={src} alt="Captains of Revelry event" loading="lazy" />
        </div>
      ))}
    </Reveal>
  );
}
