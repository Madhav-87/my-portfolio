import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='header-div'>
          <div className='header-box-20'>
            <div className='profile-icon magic-btn'>
              M
            </div>
            <div><h3>Madhav</h3></div>
          </div>
          <div className='header-box-50'>
            <div className='nav-items active-item'>Home</div>
            <div className='nav-items'>Projects</div>
            <div className='nav-items'>Experience</div>
            <div className='nav-items'>Contact</div>
          </div>
          <div className='header-box-20'>
            <div className='download-resume-btn magic-btn'>
              <span className="material-symbols-outlined">
                download
              </span>
              <span className=''>
                Resume
              </span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="intro-panel">
          <div className="intro-info-section">
            <div className="label-tag">
              <span class="material-symbols-outlined bg-green">
                task_alt
              </span>
              <span>Available for opportunities</span>
            </div>
            <div className="intro-info-content">
              <p>
                <span className="heading-3">
                  Hi, I'm Madhav Full-Stack Developer.
                </span>
                <span style={{ lineHeight: "30px" }}>
                  Final-year Computer Science student passionate about building products that solve real-world problems. I have hands-on experience with React, JavaScript, and Node.js.
                </span>
              </p>
            </div>
            <div className="btn-section">
              <div><button className="magic-btn">View my work</button></div>
              <div><button>Download CV</button></div>
            </div>
            <div className="socio-media-label-sec">
              <div class="fa-brands fa-github cursor-pointer"></div>
              <div class="fa-brands fa-linkedin cursor-pointer"></div>
              <div class="fa-regular fa-envelope cursor-pointer"></div>
              <div className="d-flex gap-5"><span class="material-symbols-outlined">explore_nearby</span> <span className="subtxt">Nanded, India</span></div>
            </div>
          </div>
          <div className="image-container"></div>
        </div>
        <div className="about-me-section">
          <div className="gap-10-column text-center">
            <div className="color-blue fw-5">ABOUT</div>
            <div className="heading-4">A quick intro</div>
            <div className="color-grey">Here's what makes me trick.</div>
          </div>
          <div className="d-flex gap-25">
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="icon-badge magic-btn">
                <span class="material-symbols-outlined">
                  school
                </span>
              </div>
              <div className="box-title">Education</div>
              <div className="subtxt">B.C.A CS at MGM - CGPA 9.42</div>
            </div>
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="icon-badge magic-btn">
                <span class="material-symbols-outlined">
                  code_xml
                </span>
              </div>
              <div className="box-title">What i do</div>
              <div className="subtxt">Build full-stack web apps with JavaScript, Bootstrap, React & Node.</div>
            </div>
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="icon-badge magic-btn">
                <span class="material-symbols-outlined">
                  school
                </span>
              </div>
              <div className="box-title">Education</div>
              <div className="subtxt">B.C.A CS at MGM - CGPA 9.42</div>
            </div>
          </div>
        </div>
        <div className="about-me-section">
          <div className="gap-10-column text-center">
            <div className="color-blue fw-5">SKILLS</div>
            <div className="heading-4">Tools I use daily</div>
            <div className="color-grey">From design to deployment.</div>
          </div>
          <div className="d-flex gap-25">
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="box-title color-blue">FrontEnd</div>
              <div className='list-item'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React.Js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="box-title color-blue">BackEnd</div>
              <div className='list-item'>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>REST API</li>
                  <li>JWT Tokens</li>
                </ul>
              </div>
            </div>
            <div className="about-Container gap-20-column cursor-pointer">
              <div className="box-title color-blue">Database</div>
              <div className='list-item'>
                <ul>
                  <li>SQL</li>
                  <li>MYSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         <div className="about-me-section">
          <div className="gap-10-column text-center">
            <div className="color-blue fw-5">FEATURED WORK</div>
            <div className="heading-4">Most recent project</div>
            <div className="color-grey">A glimpse of what i build.</div>
          </div>
          <div className="d-flex gap-25">
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
