import { Link } from 'react-router-dom';
import { ParallaxBg } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { SplitText } from '../motion/SplitText';
import { Magnetic } from '../motion/Magnetic';
import { Marquee } from '../motion/Marquee';
import { InquiryForm } from '../components/InquiryForm';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <ParallaxBg imageUrl="/images/hero-night.webp" strength={0.22} />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="kicker">Experiential Event Production · Southeast US</span>
          <SplitText as="h1" text="We Turn Spaces Into Experiences." />
          <p className="hero__sub">
            Mobile stage. Full production. Seamless execution. Corporate events, brand
            activations, weddings and private celebrations — featuring the Rock the Disco
            Airstream.
          </p>
          <div className="hero__ctas">
            <Magnetic>
              <a href="#inquire" className="btn btn--primary">Start Planning</a>
            </Magnetic>
            <Magnetic>
              <Link to="/corporate" className="btn btn--ghost">Explore Services</Link>
            </Magnetic>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          'Corporate Events',
          'Brand Activations',
          'Mobile Stage',
          'Weddings',
          'Lighting Design',
          'Full Production',
        ]}
      />

      {/* WHAT WE DO — 3 PILLARS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">What We Do</span>
            <h2>Three ways we bring the experience.</h2>
          </Reveal>
          <Reveal stagger={0.12} className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="card hover-lift">
              <div className="card__img hover-spring">
                <img src="/images/pro-2.webp" alt="Corporate brand activation production" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>Corporate &amp; Brand Activations</h3>
                <p>
                  Turnkey experiential production for companies that want more than a DJ —
                  staging, lighting, logistics and on-site management.
                </p>
                <Link className="card__link" to="/corporate">Explore Corporate →</Link>
              </div>
            </div>
            <div className="card hover-lift">
              <div className="card__img hover-spring">
                <img src="/images/pro-3.webp" alt="Wedding dance floor energy" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>Weddings &amp; Private Events</h3>
                <p>
                  From ceremony sound to full reception transformation — experiences that feel
                  effortless and unforgettable.
                </p>
                <Link className="card__link" to="/weddings">Explore Weddings →</Link>
              </div>
            </div>
            <div className="card hover-lift">
              <div className="card__img hover-spring">
                <img src="/images/airstream-1.webp" alt="Rock the Disco Airstream mobile stage" loading="lazy" />
              </div>
              <div className="card__body">
                <h3>Rock the Disco Airstream</h3>
                <p>
                  A polished-aluminum mobile stage with a built-in soundsystem and marquee
                  lights — the centerpiece your event won't stop talking about.
                </p>
                <Link className="card__link" to="/airstream">Explore the Airstream →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORPORATE FOCUS */}
      <section className="section section--soft">
        <div className="container grid-2">
          <Reveal>
            <span className="kicker">Corporate</span>
            <h2>Experiential production for corporate events.</h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              We produce turnkey experiences for companies that want more than a DJ. From mobile
              stages and branded activations to lighting design, vendor coordination, and
              on-site management — we handle every detail.
            </p>
            <ul className="feature-list">
              <li>Mobile Airstream stage</li>
              <li>Professional DJ talent</li>
              <li>Lighting design</li>
              <li>Audio systems</li>
              <li>Vendor coordination</li>
              <li>On-site production management</li>
            </ul>
            <div style={{ marginTop: '2.2rem' }}>
              <Magnetic>
                <Link to="/corporate" className="btn btn--primary">Plan Your Corporate Event</Link>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="media-panel">
              <ParallaxBg imageUrl="/images/pro-1.webp" strength={0.12} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WEDDINGS */}
      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <div className="media-panel">
              <ParallaxBg imageUrl="/images/pro-5.webp" strength={0.12} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="kicker">Weddings</span>
            <h2>Elevated wedding production.</h2>
            <p className="lede" style={{ marginTop: '1.4rem' }}>
              From ceremony sound to full reception transformation, we create experiences that
              feel effortless and unforgettable.
            </p>
            <div style={{ marginTop: '2.2rem' }}>
              <Magnetic>
                <Link to="/weddings" className="btn btn--ghost">Design Your Wedding</Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section section--soft section--tight">
        <div className="container">
          <Reveal>
            <span className="kicker">Trusted Energy</span>
            <h2>What people say.</h2>
          </Reveal>
          <Reveal stagger={0.12} className="grid-3" style={{ marginTop: '2.5rem' }}>
            <blockquote className="quote hover-lift">
              "The Airstream stopped everyone in their tracks. Our launch event felt like a
              festival — but ran like a board meeting."
              <cite>Corporate Client · Atlanta</cite>
            </blockquote>
            <blockquote className="quote hover-lift">
              "They handled sound, lighting and the entire flow of the night. We didn't think
              about a single technical detail."
              <cite>Wedding Couple · Georgia</cite>
            </blockquote>
            <blockquote className="quote hover-lift">
              "Professional, on time, and the dance floor never emptied. Our team is still
              talking about it."
              <cite>Event Producer · Southeast</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* INQUIRY */}
      <section className="section" id="inquire">
        <div className="container">
          <Reveal>
            <span className="kicker">Get Started</span>
            <h2>Tell us about your event.</h2>
            <p className="lede" style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
              Share a few details and we'll come back with ideas, availability and a quote.
            </p>
          </Reveal>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
