import SectionContainer from '../section-container/SectionContainer';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './Contact.css';
import ClickSpark from '../../../components/effects/ClickSpark.jsx';
export default function ContactSection() {
   const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
  
    const sendEmail = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );
        setMessageSent(true);
        form.current?.reset();
      } catch {
        toast.error('Failed to send message.');
      } finally {
        setLoading(false);
      }
    }
  return (
    <SectionContainer id="contact" height="auto">
      <ToastContainer/>
      <div className="gap-10-column text-center">
          <div className="color-blue fw-5">Get in touch</div>
          <h2 className="heading-4">Let's make something useful</h2>
          <p className="color-grey">Have a role, project, or question? Send me a message and I'll get back to you.</p>
        </div>
        <div className="home-contact-grid">
          <div className="home-contact-links">
            <ClickSpark
                          sparkColor="#fff"
                          shape="line"
                          sparkCount={8}
                          sparkSize={14}
                          sparkRadius={30}
                          duration={500}
                        >
            <a href="#contact-message" className="home-contact-link cursor-target">
              <span className="home-contact-icon fa-regular fa-envelope" aria-hidden="true" />
              <span><small>Email</small><strong>Send me a message</strong></span>
              <span aria-hidden="true">↗</span>
            </a></ClickSpark>
            {import.meta.env.VITE_LINKEDIN_URL && (
              <ClickSpark
                            sparkColor="#fff"
                            shape="line"
                            sparkCount={8}
                            sparkSize={14}
                            sparkRadius={30}
                            duration={500}
                          >
              <a href={import.meta.env.VITE_LINKEDIN_URL} className="home-contact-link cursor-target" target="_blank" rel="noreferrer">
                <span className="home-contact-icon fa-brands fa-linkedin" aria-hidden="true" />
                <span><small>LinkedIn</small><strong>Connect with me</strong></span>
                <span aria-hidden="true">↗</span>
              </a>
              </ClickSpark>
            )}
            <ClickSpark
                          sparkColor="#fff"
                          shape="line"
                          sparkCount={8}
                          sparkSize={14}
                          sparkRadius={30}
                          duration={500}
                        >
            <a href={import.meta.env.VITE_GITHUB_URL || 'https://github.com/Madhav-87'} className="home-contact-link cursor-target" target="_blank" rel="noreferrer">
              <span className="home-contact-icon fa-brands fa-github" aria-hidden="true" />
              <span><small>GitHub</small><strong>github.com/Madhav-87</strong></span>
              <span aria-hidden="true">↗</span>
            </a>
            </ClickSpark>
          </div>
          <form className="home-contact-form" ref={form} onSubmit={sendEmail}>
            <label className="home-form-group">
              <span>Your name</span>
              <input name="name" type="text" placeholder="Name" autoComplete="name" required />
            </label>
            <label className="home-form-group">
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label className="home-form-group">
              <span>Subject</span>
              <input name="title" type="text" placeholder="What's this about?" required />
            </label>
            <label className="home-form-group">
              <span>Message</span>
              <textarea id="contact-message" name="message" placeholder="Tell me a little about it" rows="4" required />
            </label>
            <ClickSpark
                          sparkColor="#fff"
                          shape="line"
                          sparkCount={8}
                          sparkSize={14}
                          sparkRadius={30}
                          duration={500}
                        >
            <button className="home-form-submit magic-btn cursor-target" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send message'} <span aria-hidden="true">↗</span>
            </button></ClickSpark>
            {messageSent && <p className="home-form-status" role="status" aria-live="polite">Your message has been sent. Thanks for reaching out.</p>}
          </form>
        </div>
    </SectionContainer>
  );
}
