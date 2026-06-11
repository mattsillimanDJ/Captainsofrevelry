import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <img src="/images/logo.webp" alt="Captains of Revelry" />
          <p>
            Atlanta-based experiential event production,
            <br />
            serving the Southeast and beyond.
          </p>
        </div>
        <ul className="footer__links">
          <li><Link to="/corporate">Corporate &amp; Brand Activations</Link></li>
          <li><Link to="/weddings">Weddings &amp; Private Events</Link></li>
          <li><Link to="/airstream">Rock the Disco Airstream</Link></li>
          <li><Link to="/events">Our Events</Link></li>
        </ul>
        <ul className="footer__links">
          <li><a href="mailto:info@captainsofrevelry.com">info@captainsofrevelry.com</a></li>
          <li><a href="https://www.instagram.com/captainsofrevelry/" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/CaptainsOfRevelry" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} Captains of Revelry. The Captains are Keiran Neely, Mike LaSage, David Lopez
        and Matt Silliman.
      </div>
    </footer>
  );
}
