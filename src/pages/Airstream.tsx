import { Link } from 'react-router-dom';
import { ParallaxBg } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { SplitText } from '../motion/SplitText';
import { Magnetic } from '../motion/Magnetic';

const specs = [
  { title: 'Self-Contained Stage', desc: 'Polished-aluminum Airstream with built-in DJ booth, soundsystem and marquee lighting.' },
  { title: 'Footprint', desc: 'Fits where trucks can park — lawns, lots, plazas, fields and event campuses.' },
  { title: 'Power', desc: 'Runs on standard event power or generator. We coordinate requirements with your venue.' },
  { title: 'Setup Time', desc: 'Show-ready quickly after arrival, with load-in and load-out handled entirely by our crew.' },
];

const tiers = [
  {
    name: 'Airstream Rental',
    featured: false,
    items: ['The Rock the Disco Airstream stage', 'Marquee lighting package', 'Delivery, setup & teardown', 'On-site technician'],
  },
  {
    name: 'Airstream + DJ',
    featured: true,
    items: ['Everything in Airstream Rental', 'Professional DJ talent', 'Full soundsystem tuned to your space', 'MC support for run-of-show'],
  },
  {
    name: 'Airstream + Full Production',
    featured: false,
    items: ['Everything in Airstream + DJ', 'Lighting design for the full venue', 'Vendor coordination', 'On-site production management'],
  },
];

export default function Airstream() {
  return (
    <main>
      <section className="hero hero--inner">
        <ParallaxBg imageUrl="/images/airstream-2.webp" strength={0.2} />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="kicker">The Mobile Stage</span>
          <SplitText as="h1" text="The Rock the Disco Airstream" />
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <span className="kicker">What It Is</span>
            <h2>A stage that shows up ready to perform.</h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              The Rock the Disco Airstream is a fully self-contained mobile stage: a
              mirror-polished vintage Airstream rebuilt with a professional DJ booth,
              concert-grade soundsystem and the signature marquee sign. It rolls in, lights up,
              and instantly becomes the centerpiece of your event.
            </p>
            <ul className="feature-list" style={{ gridTemplateColumns: '1fr' }}>
              <li>Ideal for corporate campuses, brand activations and festivals</li>
              <li>A showstopper backdrop for weddings and private celebrations</li>
              <li>Endlessly photographable — built for content</li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="media-panel">
              <ParallaxBg imageUrl="/images/airstream-1.webp" strength={0.12} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECS */}
      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <span className="kicker">Specs &amp; Setup</span>
            <h2>Operational details, up front.</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>
              Clear requirements make planning easy — here's what your venue team needs to know.
            </p>
          </Reveal>
          <Reveal stagger={0.08} className="spec-grid">
            {specs.map((s) => (
              <div className="spec hover-lift" key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">Packages</span>
            <h2>Three ways to book it.</h2>
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
        <ParallaxBg imageUrl="/images/airstream-day.webp" strength={0.18} />
        <div className="hero__scrim" />
        <div className="container cta-band__content">
          <h2>Put the Airstream at the center of your event.</h2>
          <Magnetic>
            <Link to="/#inquire" className="btn btn--primary">Check Availability</Link>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
