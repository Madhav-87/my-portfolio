import SectionContainer from '../section-container/SectionContainer';
import TiltedCard from '../../../components/effects/TiltedCard.jsx';
import growthTrackerImg from '../../../assets/growth-tracker-img.png';
import ClickSpark from '../../../components/effects/ClickSpark.jsx';
import '../Home.css'
export default function Projects() {
  return (
    <SectionContainer id="projects" className="padding-top-bottom-35" height="auto">
      <div className="gap-10-column text-center d-flex">
        <div className="color-blue fw-5">Selected work</div>
        <div className="heading-4">Featured projects</div>
        <div className="color-grey">A glimpse of what I build.</div>
      </div>
      <div className="project-show-panel">
        <div className="project-img-section">
          <div className="featured-project-frame">
            <div className="featured-project-layer featured-project-layer-rear" aria-hidden="true" />
            <div className="featured-project-layer featured-project-layer-front" aria-hidden="true" />
            <TiltedCard
              className="featured-project-tilt"
              imageSrc={growthTrackerImg}
              altText="Growth Tracker dashboard preview"
              containerWidth="100%"
              containerHeight="100%"
              imageWidth="100%"
              imageHeight="100%"
              rotateAmplitude={6}
              scaleOnHover={1.025}
              parallax={3}
              glare={0.12}
              shadow={0}
              showTooltip={false}
              intro
              floating={false}
              gyroscope={false}
              radius={11}
            />
          </div>
        </div>
        <div className="project-desc">
          <div className="label-tag"><i className="fa-solid fa-star" /><span>Featured</span></div>
          <h3 className="heading-4">Growth Tracker</h3>
          <p className="subtxt">Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</p>
          <ul><li>React</li><li>Express</li><li>MySQL</li></ul>
          <div className="flex gap-20">
            <ClickSpark
              sparkColor="#fff"
              shape="line"
              sparkCount={8}
              sparkSize={14}
              sparkRadius={30}
              duration={500}
              className="clickspark"
            >
              <a className="cursor-target magic-btn gen-btn flex flex-center gap-10" href={import.meta.env.VITE_GITHUB_GROWTH_TRACKER_URL} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /><span>Code</span>
              </a></ClickSpark>
            <ClickSpark
              sparkColor="#fff"
              shape="line"
              sparkCount={8}
              sparkSize={14}
              sparkRadius={30}
              duration={500}
            >
              <a className="cursor-target magic-btn gen-btn flex flex-center gap-10" href={import.meta.env.VITE_GROWTH_TRACKER_LINK} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" /><span>Live Demo</span></a></ClickSpark>
          </div>
        </div>
      </div>
      <div className="secondary-projects">
        <article className="project-show-panel project-show-panel-secondary">
          <div className="project-img-section"><div className="image-container"><img src="/study-ai.png" alt="AI Study Planner preview" loading="lazy" /></div></div>
          <div className="project-desc">
            <div className="label-tag"><span>Learning and focus</span></div>
            <h3 className="heading-4">AI Study Planner</h3>
            <p className="subtxt">An AI study planner that turns a syllabus into a structured schedule, with a Pomodoro timer to support focused study.</p>
            <ul><li>React</li><li>Express</li><li>Gemini API</li></ul>
            <div className="project-actions">
              <ClickSpark
                sparkColor="#fff"
                shape="line"
                sparkCount={8}
                sparkSize={14}
                sparkRadius={30}
                duration={500}
                className="clickspark"><a className="text-link cursor-target" href={import.meta.env.VITE_GITHUB_STUDY_PLANNER_URL} target="_blank" rel="noreferrer">View code <span aria-hidden="true">↗</span></a></ClickSpark>
              <ClickSpark
                sparkColor="#fff"
                shape="line"
                sparkCount={8}
                sparkSize={14}
                sparkRadius={30}
                duration={500}
                className="clickspark"
                ><a className="text-link cursor-target" href={import.meta.env.VITE_INTELLISTUDY_LINK} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a></ClickSpark>
            </div>
          </div>
        </article>
        <article className="project-show-panel project-show-panel-secondary">
          <div className="project-img-section"><div className="image-container"><img src="/portfolio-icon.png" alt="Portfolio site mark" loading="lazy" /></div></div>
          <div className="project-desc">
            <div className="label-tag"><span>Portfolio and case studies</span></div>
            <h3 className="heading-4">Personal Portfolio</h3>
            <p className="subtxt">A portfolio presenting my projects, skills, experience, education, and certifications in one place.</p>
            <ul><li>React</li><li>JavaScript</li><li>CSS</li></ul>
            <div className="project-actions">
              <ClickSpark
                sparkColor="#fff"
                shape="line"
                sparkCount={8}
                sparkSize={14}
                sparkRadius={30}
                duration={500}
                className="clickspark"
                >
                <a className="text-link cursor-target" href={import.meta.env.VITE_GITHUB_PORTFOLIO_URL} target="_blank" rel="noreferrer">View code <span aria-hidden="true">↗</span></a></ClickSpark></div>
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
