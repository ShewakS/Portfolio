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

const education = [
  {
    degree: 'B.E / B.Tech — Computer Science & Engineering',
    college: 'Sri Eshwar College of Engineering',
    year: '2024 – 2028',
    highlights: [
      '🏆 Winner — Freshathon Hackathon',
      '🥇 Two-time Code Lee Winner',
      '📝 Presented at Amrita University Conference',
    ],
  },
  {
    degree: 'HSC',
    college: 'Srinivasa Vidhyalaya Matriculation Higher Secondary School (Class XII)',
    year: '2022 – 2024',
    highlights: [
      '📘 Science Stream — Computer Science',
      '🎯 Strong foundation in Mathematics & Logic',
    ],
  },
  {
    degree: 'SSLC',
    college: 'Srinivasa Vidhyalaya Matriculation Higher Secondary School (Class X)',
    year: '2021 – 2022',
    highlights: [
      '📚 Strong academic performance in core subjects',
      '🎯 Strong academic foundation in Mathematics and Science',
    ],
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <FadeUp>
          <p className="section-slash">/Education</p>
          <h2 className="section-title">Academic <span>Background</span></h2>
        </FadeUp>

        <div className="edu-timeline">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="edu-card">
                <div className="edu-row">
                  <div>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-college">{edu.college}</p>
                  </div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <div className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <div key={j} className="edu-highlight">{h}</div>
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
