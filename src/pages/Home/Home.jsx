import './Home.css';
import '../../styles/utility.css';
import './responsive.css';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import FadeContent from '../../components/effects/FadeContent.jsx';
import TargetCursor from '../../components/effects/TargetCursor.jsx';
import Introduction from './introduction/Introduction';
import About from './about/About';
import Skills from './skills/Skills';
import Certificates from './certificates/Certificates';
import Projects from './projects/Projects';
import ContactSection from './contact/ContactSection';

export default function Home() {
  return (
    <>
      <Header activeEle="Home" singlePage />
      <main className="mainHome">
        <div id="hero" className="home-hero-container">
          <FadeContent effect="mist" duration={1.8} ease="power2.out" stagger={0.1} threshold={0.1}>
            <Introduction />
          </FadeContent>
        </div>
        <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
