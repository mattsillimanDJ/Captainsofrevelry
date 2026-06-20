import { ParallaxBg } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { SplitText } from '../motion/SplitText';
import { Magnetic } from '../motion/Magnetic';
import { Marquee } from '../motion/Marquee';
import { Gallery } from '../components/Gallery';

const brands = [
  {
    name: 'Feelgood Sessions',
    kicker: 'The Original',
    image: '/images/pro-1.webp',
    copy: `Where it all started. Launched in the winter of 2022, Feelgood Sessions is our
    signature house music event — warm, high-energy sets from the best house DJs in
    Atlanta, hosted and curated by Matt Silliman. Equal parts dance party and community,
    every session is built to do exactly what the name promises.`,
  },
  {
    name: 'Feelgood in the Park',
    kicker: 'Open Air',
    image: '/images/feelgood-in-the-park.jpg',
    copy: `Feelgood Sessions steps outside. A daytime, open-air celebration of house music,
    movement and sunshine — yoga in the grass, the Rock the Disco Soundsystem under the
    trees, and a dance floor that grows all afternoon. Family-friendly revelry at its
    finest.`,
  },
  {
    name: 'Beats on the Lake',
    kicker: 'Co-Production · Led by Matt Silliman',
    image: '/images/beats-on-the-lake.jpg',
    copy: `House music on the water. Beats on the Lake brings the Airstream, premium PK
    sound and a stacked DJ lineup to the lakefront for golden-hour sets you have to see
    to believe. Co-produced with our partners, with Matt Silliman leading the charge.`,
  },
  {
    name: 'Alive at Five — House Party',
    kicker: 'Roswell, ATL',
    image: '/images/crowd-1.webp',
    copy: `Roswell's biggest house music party. Alive at Five turns the heart of historic
    Roswell into one giant dance floor — big sound, big lights and a crowd that shows up
    ready. Proof that the suburbs know how to throw down.`,
  },
];

export default function Events() {
  return (
    <main>
      {/* HERO */}
      <section className="hero hero--inner">
        <ParallaxBg imageUrl="/images/events-hero-festival.jpg" strength={0.2} />
        <div className="hero__scrim" />
        <div className="container hero__content">
          <span className="kicker">Our Events</span>
          <SplitText as="h1" text="Bringing the Best DJs to Atlanta & Beyond" />
          <p className="hero__sub">
            We don't just produce events for others — we throw our own. Four homegrown
            party brands, one mission: make Atlanta dance.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          'Feelgood Sessions',
          'Feelgood in the Park',
          'Beats on the Lake',
          'Alive at Five',
          'House Music All Life Long',
        ]}
      />

      {/* SHOWCASE — offset parallax triptych */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">In the Booth</span>
            <h2>Where the night peaks.</h2>
          </Reveal>
          <div className="showcase-grid">
            <Reveal className="showcase-a">
              <div className="media-panel media-panel--portrait">
                <ParallaxBg imageUrl="/images/event-dj-lasers.jpg" strength={0.18} />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="showcase-b">
              <div className="media-panel media-panel--portrait">
                <ParallaxBg imageUrl="/images/event-terminal-west.jpg" strength={0.18} />
              </div>
            </Reveal>
            <Reveal delay={0.18} className="showcase-wide">
              <div className="media-panel media-panel--showcase">
                <ParallaxBg imageUrl="/images/feelgood-festival.jpg" strength={0.12} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      {brands.map((b, i) => (
        <section
          className={`section ${i % 2 === 1 ? 'section--soft' : ''}`}
          key={b.name}
        >
          <div className="container grid-2">
            {i % 2 === 0 ? (
              <>
                <Reveal>
                  <span className="kicker">{b.kicker}</span>
                  <h2>{b.name}</h2>
                  <p className="lede" style={{ marginTop: '1.4rem' }}>{b.copy}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="media-panel">
                    <ParallaxBg imageUrl={b.image} strength={0.12} />
                  </div>
                </Reveal>
              </>
            ) : (
              <>
                <Reveal>
                  <div className="media-panel">
                    <ParallaxBg imageUrl={b.image} strength={0.12} />
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <span className="kicker">{b.kicker}</span>
                  <h2>{b.name}</h2>
                  <p className="lede" style={{ marginTop: '1.4rem' }}>{b.copy}</p>
                </Reveal>
              </>
            )}
          </div>
        </section>
      ))}

      {/* GALLERY (CMS-fed) */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="kicker">The Energy</span>
            <h2>Scenes from the revelry.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem' }}>
            <Gallery
              section="events"
              fallback={[
                '/images/rtd-party-2.webp',
                '/images/festival-2.webp',
                '/images/crowd-2.webp',
                '/images/festival-stage.webp',
                '/images/pro-3.webp',
                '/images/hero-night.webp',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <ParallaxBg imageUrl="/images/festival-stage.webp" strength={0.18} />
        <div className="hero__scrim" />
        <div className="container cta-band__content">
          <h2>Follow the feelgood.</h2>
          <p className="lede">New dates drop on Instagram first.</p>
          <Magnetic>
            <a
              href="https://www.instagram.com/captainsofrevelry/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              @captainsofrevelry
            </a>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
