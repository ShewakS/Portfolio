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

const projects = [

  {
    index: '01',
    title: 'Student Leave Management System',
    desc: 'A web portal for students to apply for leaves, track approval status, and for faculty to manage and approve leave requests efficiently.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Shankar-v27/MERN.git',
    demo: 'https://mern-brown-psi.vercel.app/',
  },
  {
    index: '02',
    title: 'E-commerce Clothing Website',
    desc: 'A full-featured online clothing store with product listings, cart management, user authentication, and order tracking built on the MERN stack.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/ShewakS/Thread-Co-Backend',
    demo: 'https://shewak-threadco.netlify.app/',
  },
  {
    index: '03',
    title: 'AI-Powered Question Generator & Evaluator',
    desc: 'Automatically generates medical MCQs by topic and difficulty, and evaluates responses with instant feedback to support effective exam preparation.',
    stack: ['Python', 'Flask', 'NLP', 'Machine Learning'],
    github: 'https://github.com/ShewakS/MedQGen',
    demo: null,
  },
  {
    index: '04',
    title: 'HireMind AI',
    desc: 'HireMind AI is an end-to-end AI-powered recruitment platform that automates resume screening, candidate evaluation, interview management, and hiring decisions through an intelligent multi-stage assessment process.',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Claude API'],
    github: 'https://github.com/ShewakS/HireMind',
    demo: ' https://hire-mind-ai.vercel.app/',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <FadeUp>
          <p className="section-slash">/Projects</p>
          <h2 className="section-title">Things I've <span>Built</span></h2>
        </FadeUp>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <FadeUp key={p.index} delay={i * 0.08}>
              <div className={`project-card${p.featured ? ' featured' : ''}`}>
                <div className="project-header">
                  <span className="project-index">{p.index}</span>
                  <div className="project-links-row">
                    {p.github && (
                      <a href={p.github} className="project-icon-btn" target="_blank" rel="noreferrer" title="GitHub">
                        GH
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} className="project-icon-btn" target="_blank" rel="noreferrer" title="Live Demo">
                        ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-title">{p.title}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
