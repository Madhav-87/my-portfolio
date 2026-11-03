import SectionContainer from '../section-container/SectionContainer';
import '../../Version2/portfolio.css'
import './about.css'
import CountUp from '../../../components/effects/CountUp.jsx';


const countUpProps = {
  from: 0,
  mode: 'roll',
  easing: 'spring',
  format: 'standard',
  separator: ',',
  prefix: '',
  direction: 'up',
  duration: 2.4,
  delay: 0,
  trigger: 'view',
  replayOnHover: true,
  className: 'count-up-text',
};

export default function About() {
  return (
    <>
      <SectionContainer id="about" height="420px" className="animation-fade-in-up about-section">
        <div className="gap-10-column text-center">
          <div className="color-blue fw-5">A little about me</div>
          <div className="heading-4">From idea to useful product</div>
          <div className="color-grey">I enjoy building across the stack and paying attention to the details that make an app feel clear and dependable.</div>
        </div>
        <div className="d-flex gap-25 about-cards">
          <div className="hover-lift about-Container gap-20-column cursor-pointer">
            <div className="icon-badge magic-btn"><span className="material-symbols-outlined">school</span></div>
            <div className="box-title">Education</div>
            <div className="subtxt">B.C.A at MGM's College of Computer Science and IT, Nanded - CGPA 9.28</div>
          </div>
          <div className="hover-lift about-Container gap-20-column cursor-pointer">
            <div className="icon-badge magic-btn"><span className="material-symbols-outlined">code_xml</span></div>
            <div className="box-title">What I do</div>
            <div className="subtxt">Build full-stack web apps with JavaScript, Bootstrap, React &amp; Node.</div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer id="about2" height="420px" className="animation-fade-in-up about-section">
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m Madhav Bondhare, a BCA graduate who enjoys building useful web applications. I work across the stack with React, Node.js, JavaScript, and MySQL.
            </p>
            <p>
              I like turning practical ideas into <span className="highlight">polished product experiences</span>, from the interface through the API and database.
            </p>
            <div className="about-location">
              <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
              <span>Nanded, India</span>
            </div>
          </div>

          <div className="about-stats" aria-label="Portfolio highlights">
            <div className="stat-item">
              {/* spreading the properties of the object */}
              <CountUp {...countUpProps} to={3} suffix="+" />
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <CountUp {...countUpProps} to={9.28} suffix="" />
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-item">
              <CountUp {...countUpProps} to={4} suffix="" />
              <span className="stat-label">Certificates</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}