import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionProvider } from './motion/MotionProvider';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Airstream from './pages/Airstream';
import Weddings from './pages/Weddings';
import Events from './pages/Events';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Let the page mount before scrolling to the anchor.
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <MotionProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/airstream" element={<Airstream />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </MotionProvider>
  );
}
