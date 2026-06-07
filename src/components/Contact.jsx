import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

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
  { icon: EmailRoundedIcon, label: 'Email', value: 'Use the contact form', href: '#contact-form' },
  { icon: BusinessCenterRoundedIcon, label: 'LinkedIn', value: 'linkedin.com/in/shewak-s', href: 'https://www.linkedin.com/in/shewak-s-a9287b33b/' },
  { icon: GitHubIcon, label: 'GitHub', value: 'github.com/ShewakS', href: 'https://github.com/ShewakS' },
];

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ type: 'sending', message: 'Sending your message...' });

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error('Contact form is not configured yet.');
      }

      const name = form.name.trim();
      const email = form.email.trim();
      const message = form.message.trim();

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Portfolio Contact from ${name}`,
          from_name: 'Portfolio Contact',
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Message could not be sent.');
      }

      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Contact service is unavailable right now.',
      });
    }
  };

  const isSending = status.type === 'sending';

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <FadeUp>
            <p className="section-slash">/Contact</p>
            <h2 className="section-title">Let's <span>Collaborate</span></h2>
          </FadeUp>

          <div className="contact-layout">
            <FadeUp delay={0.1}>
              <div className="contact-left">
                <h3>Ready to collaborate?</h3>
                <p>
                  I'm open to internships, projects, and collaborations. Whether you have an idea or just want to connect, my inbox is always open.
                </p>
                <div className="contact-socials">
                  {socials.map(s => {
                    const Icon = s.icon;

                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        className="contact-social-link"
                        target={s.href.startsWith('#') ? '_self' : '_blank'}
                        rel="noreferrer"
                      >
                        <span className="contact-social-icon">
                          <Icon fontSize="small" />
                        </span>
                        <div>
                          <span className="contact-social-label">{s.label}</span>
                          <span className="contact-social-val">{s.value}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.18}>
              <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary form-submit" disabled={isSending}>
                  <SendRoundedIcon fontSize="small" />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {status.message && (
                  <p className={`form-status ${status.type}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner" style={{ textAlign: 'center'}}>
          <p>Copyright 2026 Shewak S. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
