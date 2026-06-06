import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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

const socials = [
  { icon: '✉️', label: 'Email',    value: 'shewaks08@gmail.com',                          href: 'mailto:shewaks08@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/shewak-s',                     href: 'https://www.linkedin.com/in/shewak-s-a9287b33b/' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/ShewakS',                           href: 'https://github.com/ShewakS' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = `mailto:shewaks08@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <FadeUp>
            <p className="section-slash">/Contact</p>
            <h2 className="section-title">Let's <span>Collaborate</span></h2>
          </FadeUp>

          <div className="contact-layout">
            {/* Left — CTA + socials */}
            <FadeUp delay={0.1}>
              <div className="contact-left">
                <h3>Ready to collaborate?</h3>
                <p>
                  I'm open to internships, projects, and collaborations. Whether you have an idea or just want to connect — my inbox is always open.
                </p>
                <div className="contact-socials">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="contact-social-link"
                      target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noreferrer"
                    >
                      <span className="contact-social-icon">{s.icon}</span>
                      <div>
                        <span className="contact-social-label">{s.label}</span>
                        <span className="contact-social-val">{s.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.18}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message ↗
                </button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span className="footer-logo">S<span>.</span></span>
          <p>© 2025 Shewak S. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
