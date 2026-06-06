import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
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

const cards = [
  {
    emoji: '💡',
    title: 'Problem Solver',
    text: 'I enjoy breaking down complex problems into clean, efficient solutions using Java, Python, and modern web stacks.',
  },
  {
    emoji: '🚀',
    title: 'Fast Learner',
    text: 'From React frontends to ML pipelines, I pick up new technologies quickly and apply them to real-world projects.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <FadeUp>
          <p className="section-slash">/About</p>
          <h2 className="section-title">Who I Am</h2>
        </FadeUp>

        <div className="about-grid">
          {/* Main bio card */}
          <FadeUp delay={0.1}>
            <div className="about-card about-card-wide">
              <p>
                I'm a <strong>Computer Science & Engineering student</strong> at Sri Eshwar College of Engineering,
                passionate about full stack development and software engineering. I actively work with
                <strong> MERN stack, Java</strong>, and explore web technologies daily.
              </p>
              <p>
                I'm a co-author of a <strong>research paper</strong> and hold a <strong>Linguaskill B2 Certificate</strong>,
                reflecting both my technical and communicative strengths. I enjoy building products that solve practical problems.
              </p>
              <div className="about-tags">
                {['Full Stack Developer', 'Java', 'MERN Stack', 'Research Paper Co-author', 'Linguaskill B2'].map(t => (
                  <span key={t} className="about-tag">{t}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Side cards */}
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={0.15 + i * 0.08}>
              <div className="about-card">
                <div className="about-emoji">{c.emoji}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
