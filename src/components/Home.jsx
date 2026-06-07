import { motion } from 'framer-motion';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import profileImg from '../assets/profile.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.innerWidth <= 768 ? 56 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.div className="avail-badge" {...fadeUp(0.1)}>
              <span className="avail-dot" />
              Looking for Opportunities
            </motion.div>

            <motion.h1 className="hero-name" {...fadeUp(0.18)}>
              Shewak S
            </motion.h1>

            <motion.p className="hero-tagline" {...fadeUp(0.25)}>
              <strong>Computer Science Student</strong> - Full Stack Developer - Java Programmer
            </motion.p>

            <motion.p className="hero-desc" {...fadeUp(0.32)}>
              Building intelligent web applications and exploring the intersection of software engineering and machine learning. Passionate about clean code and real-world impact.
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.38)}>
              <a href="#projects" className="btn btn-primary" onClick={e => scrollTo(e, 'projects')}>
                <VisibilityRoundedIcon fontSize="small" />
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost" onClick={e => scrollTo(e, 'contact')}>
                <MailRoundedIcon fontSize="small" />
                Contact Me
              </a>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.44)}>
              {[['5+', 'Projects'], ['2+', 'Languages'], ['5+', 'Achievements']].map(([num, label]) => (
                <div key={label}>
                  <span className="stat-num">{num}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-img-wrap"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={profileImg} alt="Shewak S" className="hero-img" />
            <div className="hero-badge">
              <SchoolRoundedIcon fontSize="small" />
              CSE Student
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
