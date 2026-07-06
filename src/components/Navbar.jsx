import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const links = [
  { id: 'home', label: '/Home', icon: HomeRoundedIcon },
  { id: 'about', label: '/About', icon: PersonRoundedIcon },
  { id: 'education', label: '/Education', icon: SchoolRoundedIcon },
  { id: 'skills', label: '/Skills', icon: CodeRoundedIcon },
  { id: 'projects', label: '/Projects', icon: WorkRoundedIcon },
  { id: 'achievements', label: '/Achievements', icon: EmojiEventsRoundedIcon },
  { id: 'contact', label: '/Contact', icon: MailRoundedIcon },
];

const resumePath = 'https://drive.google.com/drive/folders/1rPY43OajVHK_p7H4cxiVykauNV3bPbdI?usp=drive_link';

function ResumeLink({ className = 'sidebar-resume', style }) {
  return (
    <a href={resumePath} className={className} target="_blank" rel="noreferrer" style={style}>
      <DescriptionRoundedIcon fontSize="small" />
      <span>Resume</span>
      <OpenInNewRoundedIcon fontSize="inherit" />
    </a>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPoint = window.scrollY + (window.innerWidth <= 768 ? 80 : 120);
      let current = 'home';

      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && scrollPoint >= el.offsetTop) current = id;
      });

      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.innerWidth <= 768 ? 56 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    setActive(id);
    setMenuOpen(false);
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-brand">
            <span className="sidebar-logo"><span>$ ss.dev</span></span>
            <span className="sidebar-sub">CS Student - Developer</span>
          </div>

          <nav className="sidebar-nav">
            <ul>
              {links.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={active === id ? 'active' : ''}
                    onClick={e => scrollTo(e, id)}
                  >
                    <Icon className="nav-icon" fontSize="small" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-footer">
            <ResumeLink />
            <div className="sidebar-socials">
              <a href="https://github.com/ShewakS" target="_blank" rel="noreferrer" title="GitHub">
                <GitHubIcon fontSize="small" />
              </a>
              <a href="https://www.linkedin.com/in/shewak-s-a9287b33b/" target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedInIcon fontSize="small" />
              </a>
              <a href="#contact" onClick={e => scrollTo(e, 'contact')} title="Email">
                <MailRoundedIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      <div className="mobile-topbar">
        <span className="mobile-logo">S<span>.</span></span>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-drawer open"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={e => scrollTo(e, id)}
              >
                <Icon className="nav-icon" fontSize="small" />
                {label}
              </a>
            ))}
            <ResumeLink style={{ justifyContent: 'center', marginTop: '0.4rem' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
