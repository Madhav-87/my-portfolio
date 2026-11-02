import { useRef } from 'react';
import SwarmCursor from '../../../components/effects/SwarmCursor.jsx';
import VariableProximity from '../../../components/effects/VariableProximity.jsx';

function handleInteractiveKeyDown(event, action) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  }
}

export default function Introduction() {
  const headlineRef = useRef(null);

  return (
    <SwarmCursor count={800} size={2.6} spread={90} swirl={0.6} clickEffect="burst">
      <div className="intro-panel">
        <div className="animation-fade-in-up intro-info-section">
          <div className="label-tag">
            <span className="ripple-point" />
            <span>Available for opportunities</span>
          </div>
          <div ref={headlineRef} className="intro-info-content">
            <p>
              <span className="heading-3 intro-headline">
                <VariableProximity containerRef={headlineRef} label="Hi, I'm" fontSize={80} />{' '}
                <span className="intro-name">
                  <VariableProximity containerRef={headlineRef} label="Madhav" fontSize={80} />{' '}
                </span>
                <span className="blue-gradient">
                  <VariableProximity containerRef={headlineRef} label="Full-stack developer." fontSize={80} />
                </span>
              </span>
              <span className="animation-fade-in-up delay-100" style={{ lineHeight: '30px' }}>
                Hey, I'm Madhav, a BCA grad who loves crafting useful, innovative web apps from the ground up.
                Comfortable across the stack: React, Node.js, JavaScript, MySQL
              </span>
            </p>
          </div>
          <div className="btn-section animation-fade-in-up delay-200">
            <div>
              <button className="magic-btn cursor-target" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View my work
              </button>
            </div>
            <div><a href="/cv.pdf" download="madhav_bondhare_cv"><button className="cursor-target">Download CV</button></a></div>
          </div>
          <div className="socio-media-label-sec animation-fade-in-up delay-200">
            <div tabIndex={0} role="button" aria-label="Visit GitHub profile" className="cursor-target fa-brands fa-github cursor-pointer color-blue-hover" onClick={() => window.open(import.meta.env.VITE_GITHUB_URL, '_blank')} onKeyDown={(event) => handleInteractiveKeyDown(event, () => window.open(import.meta.env.VITE_GITHUB_URL, '_blank'))} />
            <div tabIndex={0} role="button" aria-label="Visit LinkedIn profile" className="cursor-target fa-brands fa-linkedin cursor-pointer color-blue-hover" onClick={() => window.open(import.meta.env.VITE_LINKEDIN_URL, '_blank')} onKeyDown={(event) => handleInteractiveKeyDown(event, () => window.open(import.meta.env.VITE_LINKEDIN_URL, '_blank'))} />
            <a href="#contact" aria-label="Go to contact section" className="cursor-target fa-regular fa-envelope cursor-pointer color-blue-hover" />
            <div className="d-flex gap-5">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="subtxt">Nanded, India</span>
            </div>
          </div>
        </div>
        <div className="image-container delay-200">
          <img src="/portfolio-icon.png" alt="site icon" height="100%" />
        </div>
      </div>
    </SwarmCursor>
  );
}
