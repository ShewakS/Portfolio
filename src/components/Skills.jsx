import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const skills = [
  {
    icon: KeyboardRoundedIcon,
    title: 'Languages',
    pills: ['C', 'C++', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: HubRoundedIcon,
    title: 'Frameworks & Libraries',
    pills: ['React', 'Express.js', 'Node.js'],
  },
  {
    icon: StorageRoundedIcon,
    title: 'Databases',
    pills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: ConstructionRoundedIcon,
    title: 'Tools & Platforms',
    pills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    icon: AccountTreeRoundedIcon,
    title: 'CS Fundamentals',
    pills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <FadeUp>
          <p className="section-slash">/Skills</p>
          <h2 className="section-title">What I <span>Work With</span></h2>
        </FadeUp>

        <div className="skills-grid">
          {skills.map((card, i) => {
            const Icon = card.icon;

            return (
              <FadeUp key={card.title} delay={i * 0.07}>
                <div className="skill-card">
                  <div className="skill-card-icon">
                    <Icon fontSize="inherit" />
                  </div>
                  <h3>{card.title}</h3>
                  <div className="skill-pills">
                    {card.pills.map(p => (
                      <span key={p} className="skill-pill">{p}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
