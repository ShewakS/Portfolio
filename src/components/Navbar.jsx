import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'home',         label: '/Home' },
  { id: 'about',        label: '/About' },
  { id: 'education',    label: '/Education' },
  { id: 'skills',       label: '/Skills' },
  { id: 'projects',     label: '/Projects' },
  { id: 'achievements', label: '/Achievements' },
  { id: 'contact',      label: '/Contact' },
];

export default function Navbar() {
  const [active, setActive]     = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 280) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-inner">

          <div className="sidebar-brand">
            <span className="sidebar-logo">S<span>.</span></span>
            <span className="sidebar-sub">CS Student · Developer</span>
          </div>

          <nav className="sidebar-nav">
            <ul>
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={active === id ? 'active' : ''}
                    onClick={e => scrollTo(e, id)}
                  >
                    <span className="nav-indicator" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-footer">
            <a href="/Shewaks_resume.pdf" className="sidebar-resume" target="_blank" rel="noreferrer">
              Resume ↗
            </a>
            <div className="sidebar-socials">
              <a href="https://github.com/ShewakS" target="_blank" rel="noreferrer" title="GitHub">GH</a>
              <a href="https://www.linkedin.com/in/shewak-s-a9287b33b/" target="_blank" rel="noreferrer" title="LinkedIn">LI</a>
              <a href="mailto:shewaks08@gmail.com" title="Email">✉</a>
            </div>
          </div>

        </div>
      </aside>

      {/* ── Mobile Topbar ── */}
      <div className="mobile-topbar">
        <span className="mobile-logo">S<span>.</span></span>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer open"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={e => scrollTo(e, id)}
              >
                {label}
              </a>
            ))}
            <a href="/Shewaks_resume.pdf" className="sidebar-resume" target="_blank" rel="noreferrer"
              style={{ textAlign: 'center', marginTop: '0.4rem' }}>
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
