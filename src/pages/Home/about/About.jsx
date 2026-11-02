import SectionContainer from '../section-container/SectionContainer';

export default function About() {
  return (
    <SectionContainer id="about" height="420px" className="animation-fade-in-up">
      <div className="gap-10-column text-center">
        <div className="color-blue fw-5">A little about me</div>
        <div className="heading-4">From idea to useful product</div>
        <div className="color-grey">I enjoy building across the stack and paying attention to the details that make an app feel clear and dependable.</div>
      </div>
      <div className="d-flex gap-25">
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
  );
}
