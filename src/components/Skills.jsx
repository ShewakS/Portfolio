import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
    icon: '⌨️',
    title: 'Languages',
    pills: ['C','C++','Java', 'SQL', 'HTML','CSS'],
  },
  {
    icon: '🧠',
    title: 'Frameworks & Libraries',
    pills: ['React', 'Express.js', 'Node.js'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    pills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    pills: ['Git', 'GitHub', 'VS Code', 'Figma', ''],
  },
  {
    icon: '📐',
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
          {skills.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.07}>
              <div className="skill-card">
                <div className="skill-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <div className="skill-pills">
                  {card.pills.map(p => (
                    <span key={p} className="skill-pill">{p}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
