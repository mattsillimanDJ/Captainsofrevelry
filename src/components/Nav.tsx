import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { to: '/corporate', label: 'Corporate' },
  { to: '/weddings', label: 'Weddings' },
  { to: '/airstream', label: 'The Airstream' },
  { to: '/events', label: 'Our Events' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToInquiry = () => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' }), 350);
    } else {
      document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav nav-anim">
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.webp" alt="Captains of Revelry" />
        </Link>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="btn btn--primary nav__cta" onClick={goToInquiry}>
              Plan Your Event
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
