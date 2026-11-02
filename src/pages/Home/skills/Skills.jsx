import SectionContainer from '../section-container/SectionContainer';

const skillGroups = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'REST API', 'JWT tokens'] },
  { title: 'Data and tools', skills: ['MySQL', 'MongoDB', 'Git', 'GitHub'] },
];

export default function Skills() {
  return (
    <SectionContainer id="skills" height="410px">
      <div className="gap-10-column text-center">
        <div className="color-blue fw-5">Tools I work with</div>
        <div className="heading-4">Tech stack</div>
        <div className="color-grey">From design to deployment.</div>
      </div>
      <div className="d-flex gap-25">
        {skillGroups.map(({ title, skills }) => (
          <div className="hover-lift about-Container gap-20-column cursor-pointer" key={title}>
            <div className="box-title color-blue">{title}</div>
            <div className="skills-list"><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
