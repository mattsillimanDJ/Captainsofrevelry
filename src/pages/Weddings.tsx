import { Link } from 'react-router-dom';
import { ParallaxBg } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { SplitText } from '../motion/SplitText';
import { Magnetic } from '../motion/Magnetic';

const tiers = [
  {
    name: 'DJ Essentials',
    featured: false,
    items: ['Professional DJ for ceremony & reception', 'Premium sound for every moment', 'Wireless mics for vows & toasts', 'Curated playlists shaped with you'],
  },
  {
    name: 'Airstream Experience',
    featured: true,
    items: ['Everything in DJ Essentials', 'The Rock the Disco Airstream stage', 'Marquee lighting & dance floor energy', 'A reception your guests will never forget'],
  },
  {
    name: 'Full Wedding Production',
    featured: false,
    items: ['Everything in Airstream Experience', 'Lighting design & room transformation', 'Vendor coordination', 'On-site production management all night'],
  },
];

export default function Weddings() {
  return (
    <main>
      <section className="hero hero--inner">
        <ParallaxBg imageUrl="/images/pro-3.webp" strength={0.2} />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="kicker">Weddings &amp; Private Events</span>
          <SplitText as="h1" text="The Best Night of Your Life, Produced." />
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <span className="kicker">The Experience</span>
            <h2>You say "I do." We do the rest.</h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              Your wedding should feel effortless — to you and to everyone in the room. We
              handle ceremony sound, the dinner soundtrack, and the moment the lights drop and
              the dance floor takes over. One team, one plan, zero stress.
            </p>
            <ul className="feature-list" style={{ gridTemplateColumns: '1fr' }}>
              <li>Lighting that transforms the room as the night unfolds</li>
              <li>DJs who read the crowd — never a stale playlist</li>
              <li>Every microphone, cable and cue handled before you notice</li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="media-panel">
              <ParallaxBg imageUrl="/images/pro-5.webp" strength={0.12} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <span className="kicker">The Transformation</span>
            <h2>Dinner party to dance floor.</h2>
          </Reveal>
          <Reveal delay={0.1} style={{ marginTop: '2.5rem' }}>
            <div className="media-panel media-panel--wide">
              <ParallaxBg imageUrl="/images/pro-6.webp" strength={0.14} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">Packages</span>
            <h2>Built around your day.</h2>
          </Reveal>
          <Reveal stagger={0.12} className="grid-3" style={{ marginTop: '2.5rem' }}>
            {tiers.map((t) => (
              <div className={`tier hover-lift ${t.featured ? 'tier--featured' : ''}`} key={t.name}>
                <h3>{t.name}</h3>
                <ul>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link to="/#inquire" className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <ParallaxBg imageUrl="/images/pro-3.webp" strength={0.18} />
        <div className="hero__scrim" />
        <div className="container cta-band__content">
          <h2>Let's design your wedding.</h2>
          <Magnetic>
            <Link to="/#inquire" className="btn btn--primary">Start the Conversation</Link>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
