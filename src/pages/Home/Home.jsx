import { useEffect, useState } from 'react'
import './Home.css'
import '../../utility.css';
import './responsive.css';
import Header from '../../Components/Header.jsx';
import Footer from '../../Components/Footer.jsx';
import AIEssentials from '/Google AI Essentials.pdf'
import { Link, useNavigate } from 'react-router-dom';
import growthTrackerImg from '../../assets/growth-tracker-img.png';
import javascriptcert from '/JavaScript-Cert.pdf';
import gitHubCert from '/Google Git and GitHub Certificate.pdf';


function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  let [viewCert, setViewCert] = useState(false);
  let [pdfConatiner,setpdfContainer]=useState(null);
  useEffect(()=>
    {
  },[])
  return (

    <>
      <Header activeEle={"Home"} />
      <main className='mainHome'>
        <div className="intro-panel">
          <div className="animation-fade-in-up intro-info-section">
            <div className="label-tag">
              <i className="fa-solid fa-circle bg-green" style={{ color: "limegreen" }}></i>
              <span>Available for opportunities</span>
            </div>
            <div className="intro-info-content">
              <p>
                <span className="heading-3">
                  Hi, I'm <span className='blue-gradient'>Madhav</span> Full-Stack Developer.
                </span>
                <span className="animation-fade-in-up delay-100" style={{ lineHeight: "30px" }}>
                  Hey, I'm Madhav  — a BCA grad who loves crafting useful, innovative web apps from the ground up.
                  Comfortable across the stack: React,  Node.js,  JavaScript,  MySQL
                </span>
              </p>
            </div>
            <div className="btn-section animation-fade-in-up delay-200">
              <div><Link to="/projects"><button tabIndex={5} className="magic-btn">View my work</button></Link></div>
              <div><a href='./cv.pdf' download="madhav_bondhare_cv"><button tabIndex={6}>Download CV</button></a></div>
            </div>
            <div className="socio-media-label-sec animation-fade-in-up delay-200">
              <div tabIndex="7" className="fa-brands fa-github cursor-pointer color-blue-hover" onClick={() => { window.open(`${import.meta.env.VITE_GITHUB_URL}`, "_blank") }}></div>
              <div tabIndex="8" className="fa-brands fa-linkedin cursor-pointer color-blue-hover" onClick={() => { window.open(`${import.meta.env.VITE_LINKEDIN_URL}`, "_blank") }}></div>
              <div tabIndex="9" className="fa-regular fa-envelope cursor-pointer color-blue-hover" onClick={() => { navigate('/contact') }}></div>
              <div tabIndex="10" className="d-flex gap-5"><span className="material-symbols-outlined">explore_nearby</span> <span className="subtxt">Nanded, India</span></div>
            </div>
          </div>
          <div className="image-container delay-200">
            <img src={"./portfolio-icon.png"} height={"100%"} />
          </div>
        </div>
        <div className="animation-fade-in-up about-me-section">
          <div className="gap-10-column text-center">
            <div className="color-blue fw-5">ABOUT</div>
            <div className="heading-4">A quick intro</div>
            <div className="color-grey">Here's what makes me trick.</div>
          </div>
          <div className="d-flex gap-25">
            <div tabIndex="11" className="hover-lift about-Container gap-20-column cursor-pointer">
              <div className="icon-badge magic-btn">
                <span className="material-symbols-outlined">
                  school
                </span>
              </div>
              <div className="box-title">Education</div>
              <div className="subtxt">B.C.A at MGM's College of Computer Science and IT, Nanded - CGPA 9.42</div>
            </div>
            <div tabIndex="12" className="hover-lift about-Container gap-20-column cursor-pointer">
              <div className="icon-badge magic-btn">
                <span className="material-symbols-outlined">
                  code_xml
                </span>
              </div>
              <div className="box-title">What i do</div>
              <div className="subtxt">Build full-stack web apps with JavaScript, Bootstrap, React & Node.</div>
            </div>
          </div>
        </div>
        <div tabIndex="13" className="about-me-section">
          <div className="gap-10-column text-center">
            <div className="color-blue fw-5">SKILLS</div>
            <div className="heading-4">Tools I use daily</div>
            <div className="color-grey">From design to deployment.</div>
          </div>
          <div className="d-flex gap-25">
            <div tabIndex="14" className="hover-lift about-Container gap-20-column cursor-pointer">
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
            <div tabIndex="15" className="hover-lift about-Container gap-20-column cursor-pointer">
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
            <div tabIndex="16" className="hover-lift about-Container gap-20-column cursor-pointer">
              <div className="box-title color-blue">Database</div>
              <div className='list-item'>
                <ul>
                  <li>SQL</li>
                  <li>MYSQL</li>
                </ul>
              </div>
            </div>
            <div tabIndex="17" className="hover-lift about-Container gap-20-column cursor-pointer">
              <div className="box-title color-blue">Tools</div>
              <div className='list-item'>
                <ul>
                  <li>Git</li>
                  <li>Git Hub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div tabIndex="18" className="about-me-section padding-top-bottom-35">
          <div className="gap-10-column text-center d-flex" >
            <div className="color-blue fw-5">FEATURED WORK</div>
            <div className="heading-4">Most recent project</div>
            <div className="color-grey">A glimpse of what i build.</div>
          </div>
          <div tabIndex="19" className="project-show-panel">
            <div className='project-img-section'>
              <div className='image-container' style={{ width: "100%" }}>
                <img src={growthTrackerImg} width="100%" />
              </div>

            </div>
            <div className='project-desc'>
              <div className="label-tag">
                <i className="fa-solid fa-star"></i>
                <span>Featured</span>
              </div>
              <div className='heading-4'>
                Growth  Tracker
              </div>
              <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
              <div>
                <ul>
                  <li>React</li>
                  <li>Express</li>
                  <li>MYSQL</li>
                </ul>
              </div>
              <div className='flex gap-20'>
                <button tabIndex="20" className='magic-btn gen-btn flex flex-center gap-10' onClick={() => { window.open(`${import.meta.env.VITE_GITHUB_GROWTH_TRACKER_URL}`, "_blank") }}>
                  <span className="fa-brands fa-github cursor-pointer"></span>
                  <span>Code</span>
                </button>
                <button tabIndex="20" className='magic-btn gen-btn flex flex-center gap-10' onClick={() => { window.open(`${import.meta.env.VITE_GROWTH_TRACKER_LINK}`, "_blank") }}>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div tabIndex="21" className="about-me-section">
          <div className="gap-10-column text-center d-flex" >
            <div className="color-blue fw-5">CERTIFICATIONS</div>
            <div className="heading-4">Continuous Learning</div>
            <div className="color-grey">Recent credentials.</div>
          </div>
          <div className="d-flex gap-25">
            <div tabIndex="22" onClick={()=>{setViewCert(true);setpdfContainer(javascriptcert);setViewCert(true)}}  className='hover-lift cert-container'>
              <div className='cert-icon'>
                <span className="material-symbols-outlined">
                  license
                </span>
              </div>
              <div className='cert-info-panel'>
                <div className='cert-title'>JavaScript</div>
                <div className='cert-subtxt'>Infosys Springboard</div>
              </div>
            </div>
            <div tabIndex="23" onClick={()=>{setpdfContainer(gitHubCert);setViewCert(true)}} className={`${viewCert ? 'cert-container long' : 'cert-container  hover-lift'} `}>
              {
                viewCert
                  ?
                  (
                    <div className='flex flex-col gap-10 width-100 height-100' >
                     <iframe src={pdfConatiner + "#toolbar=0"}
                     width={"100%"}
                     height={"90%"}
                     style={{
                      overflow:"hidden",
                      border:"1px solid black"
                     }}
                     />
                      <button className='magic-btn gen-btn' onClick={(e)=>{ e.stopPropagation(); setViewCert(false);}}> Close</button>
                    </div>
                  )
                  :
                  (
                    <>
                      <div className='cert-icon'>
                        <span className="material-symbols-outlined">
                          license
                        </span>
                      </div>
                      <div className='cert-info-panel '>
                        <div className='cert-title'>Introduction to Git and GitHub</div>
                        <div className='cert-subtxt'>Google / Coursera</div>
                      </div>

                    </>
                  )
              }
            </div>
            <div tabIndex="24" onClick={()=>{setpdfContainer(AIEssentials);setViewCert(true)}} className='hover-lift cert-container'>
              <div className='cert-icon'>
                <span className="material-symbols-outlined">
                  license
                </span>
              </div>
              <div className='cert-info-panel'>
                <div className='cert-title'>Google AI Essentials</div>
                <div className='cert-subtxt'>Google / Coursera</div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-me-section'>
          <div tabIndex="25" className='hover-lift flex flex-center flex-col gap-15 communication-container text-center'>
            <div>
              <span className="material-symbols-outlined color-blue rocket-icon">
                rocket_launch
              </span>
            </div>
            <div>
              <span className='h-5'>Let's build something great.</span>
            </div>
            <div>
              <span className='subtxt '>
                I'm open to internship and full-time roles. Drop me a line - I usually reply within a day.
              </span>
            </div>
            <div>
              <Link to="/contact"><button tabIndex="26" className='magic-btn gen-btn'>Get in touch</button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
