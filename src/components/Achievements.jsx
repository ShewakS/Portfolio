import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

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

const achievements = [
  {
    icon: WorkspacePremiumRoundedIcon,
    type: 'Certificate',
    title: 'Linguaskill B2 Certificate',
    desc: 'Cambridge English proficiency certification at B2 level, demonstrating strong communication and language skills.',
    issuer: 'Cambridge Assessment English',
  },
  {
    icon: ArticleRoundedIcon,
    type: 'Research',
    title: 'Research Paper Co-author',
    desc: 'Published research paper on "Geospatial Analysis of Urban Sprawl, Land Use, Traffic Patterns and Water Resource Management in Coimbatore, India" in the Lecture Notes in Artificial Intelligence (LNAI) Series by Springer.',
    issuer: 'Springer Conference Publication',
  },
  {
    icon: EmojiEventsRoundedIcon,
    type: 'Hackathon',
    title: 'Freshathon Hackathon Winner',
    desc: 'Won the Freshathon Hackathon at SECE for delivering an innovative and impactful problem-solving solution.',
    issuer: 'Sri Eshwar College of Engineering',
  },
  {
    icon: EmojiEventsRoundedIcon,
    type: 'Hackathon',
    title: 'Neoverse Hackathon Runner-up',
    desc: 'Secured 3rd Prize in the National-Level Hackathon - Neoverse 26 for developing impactful solutions.',
    issuer: 'Coimbatore Institute of Technology',
  },
  {
    icon: CodeRoundedIcon,
    type: 'Coding',
    title: 'Two-time Code Lee Winner',
    desc: 'Secured first place twice in Code Lee, a competitive coding challenge at the college level.',
    issuer: 'Sri Eshwar College of Engineering',
  },
  {
    icon: CodeRoundedIcon,
    type: 'Coding',
    title: 'LeetCode 100 Days Badge',
    desc: 'Consistently solved coding problems for 100 days straight on LeetCode, strengthening DSA fundamentals.',
    issuer: 'LeetCode',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <FadeUp>
          <p className="section-slash">/Achievements</p>
          <h2 className="section-title">Recognition & <span>Milestones</span></h2>
        </FadeUp>

        <div className="achievements-grid">
          {achievements.map((item, i) => {
            const Icon = item.icon;

            return (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="achievement-card">
                  <div className="ach-card-top">
                    <span className="ach-type">{item.type}</span>
                    <span className="ach-icon">
                      <Icon fontSize="small" />
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="ach-issuer">{item.issuer}</span>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
