import { Link } from 'react-router-dom';
import { ParallaxBg } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { SplitText } from '../motion/SplitText';
import { Magnetic } from '../motion/Magnetic';

const services = [
  { title: 'Mobile Stage', desc: 'The Rock the Disco Airstream — a turnkey, self-contained stage that transforms any space.' },
  { title: 'Sound Systems', desc: 'Concert-grade audio scaled to your venue, from boardroom reveals to outdoor festivals.' },
  { title: 'Lighting Design', desc: 'Architectural and stage lighting that shifts a space from daytime program to evening energy.' },
  { title: 'Staffing', desc: 'DJs, MCs, engineers and stagehands — professional, insured, brand-appropriate.' },
  { title: 'Vendor Management', desc: 'One point of contact coordinating catering, rentals, power and permits.' },
  { title: 'Brand Integration', desc: 'Custom signage, branded moments and content-ready setups designed around your identity.' },
];

export default function Corporate() {
  return (
    <main>
      <section className="hero hero--inner">
        <ParallaxBg imageUrl="/images/pro-1.webp" strength={0.2} />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="kicker">Corporate &amp; Brand Activations</span>
          <SplitText as="h1" text="Experiential Event Production Across the Southeast" />
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <span className="kicker">Our Approach</span>
            <h2>Festival energy. Corporate polish.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede">
              We plan like producers and execute like a stage crew. Every event gets a detailed
              run-of-show, a single accountable point of contact, and a team that has done this
              hundreds of times. You get the energy of a music festival with the reliability
              your brand requires.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <span className="kicker">Services</span>
            <h2>Everything handled. One partner.</h2>
          </Reveal>
          <Reveal stagger={0.08} className="spec-grid" style={{ marginTop: '2.5rem' }}>
            {services.map((s) => (
              <div className="spec hover-lift" key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <div className="media-panel">
              <ParallaxBg imageUrl="/images/festival-stage.webp" strength={0.12} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="kicker">Case Study</span>
            <h2>From empty lot to main stage.</h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              For a multi-day outdoor activation, our team delivered the Airstream stage, full
              concert audio, lighting and a rotating DJ lineup — load-in to load-out in under
              24 hours, with zero downtime across the event.
            </p>
            <ul className="feature-list" style={{ gridTemplateColumns: '1fr' }}>
              <li>Self-contained staging — minimal venue requirements</li>
              <li>Full technical production and on-site management</li>
              <li>Content-ready visuals your social team will love</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <ParallaxBg imageUrl="/images/pro-4.webp" strength={0.18} />
        <div className="hero__scrim" />
        <div className="container cta-band__content">
          <h2>Let's build your next activation.</h2>
          <Magnetic>
            <Link to="/#inquire" className="btn btn--primary">Plan Your Corporate Event</Link>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
