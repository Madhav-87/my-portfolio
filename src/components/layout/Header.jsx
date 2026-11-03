import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import ClickSpark from '../effects/ClickSpark';
export default function Header({ activeEle, singlePage = false }) {
  const [active, setActive] = useState('');
  const [sliderOpen, setSliderOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 1024);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setActive(activeEle), [activeEle]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setMobile(isMobile);
      if (!isMobile) setSliderOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!singlePage) return undefined;
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [singlePage]);

  const toggleMenu = () => setSliderOpen(open => !open);
  const closeMenu = () => setSliderOpen(false);

  return (
    <>
      {sliderOpen && <div className="blur-background" onClick={closeMenu} aria-hidden="true" />}
      <header className={singlePage ? `single-page-header${isScrolled ? ' scrolled' : ''}` : undefined}>
        <div className="header-div">
          <div className="header-box-20">
            <div className="profile-icon">
              <img src="/portfolio-icon.png" height={30} alt="site icon" />
            </div>
            <div><h3>Madhav Bondhare</h3></div>
            <button
              type="button"
              tabIndex={mobile ? 0 : -1}
              aria-label={sliderOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={sliderOpen}
              aria-controls="main-navigation"
              onClick={toggleMenu}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  toggleMenu();
                }
              }}
              className={`${mobile ? 'flex flex-col gap-10 three-dots-icon' : 'desktop-menu-toggle display-none'}`}
            >
              <span className={sliderOpen ? 'lines cross-1' : 'lines'} />
              <span className={sliderOpen ? 'lines cross-2' : 'lines'} />
            </button>
          </div>

          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`${mobile ? `mobile-slider ${sliderOpen ? 'slide-open' : ''}` : ''} header-box-50`}
          >
            <div className="nav-text-container gap-50">
              {singlePage ? (
                <>
                  <ClickSpark
                    sparkColor="#fff"
                    shape="line"
                    sparkCount={8}
                    sparkSize={14}
                    sparkRadius={30}
                    duration={500}
                  >
                  <a className="nav-items cursor-target color-blue-hover" href="#about" onClick={closeMenu}>About</a>
                  </ClickSpark>
                  <ClickSpark
                    sparkColor="#fff"
                    shape="line"
                    sparkCount={8}
                    sparkSize={14}
                    sparkRadius={30}
                    duration={500}
                  >
                  <a className="nav-items cursor-target color-blue-hover" href="#skills" onClick={closeMenu}>Skills</a>
                  </ClickSpark>
                  <ClickSpark
                    sparkColor="#fff"
                    shape="line"
                    sparkCount={8}
                    sparkSize={14}
                    sparkRadius={30}
                    duration={500}
                  >
                  <a className="nav-items cursor-target color-blue-hover" href="#certificates" onClick={closeMenu}>Certificates</a>
                  </ClickSpark>
                  <ClickSpark
                    sparkColor="#fff"
                    shape="line"
                    sparkCount={8}
                    sparkSize={14}
                    sparkRadius={30}
                    duration={500}
                  >
                  <a className="nav-items cursor-target color-blue-hover" href="#projects" onClick={closeMenu}>Projects</a>
                  </ClickSpark>
                  <ClickSpark
                    sparkColor="#fff"
                    shape="line"
                    sparkCount={8}
                    sparkSize={14}
                    sparkRadius={30}
                    duration={500}
                  >
                  <a className="nav-items cursor-target color-blue-hover" href="#contact" onClick={closeMenu}>Contact</a>
                  </ClickSpark>
                </>
              ) : (
                <>
                  <Link className={`nav-items cursor-target color-blue-hover ${active === 'Home' ? 'active-item' : ''}`} to="/v1">Home</Link>
                  <Link className={`nav-items cursor-target color-blue-hover ${active === 'Projects' ? 'active-item' : ''}`} to="/v1/projects">Projects</Link>
                  <Link className={`nav-items cursor-target color-blue-hover ${active === 'Experience' ? 'active-item' : ''}`} to="/v1/experience">Experience</Link>
                  <Link className={`nav-items cursor-target color-blue-hover ${active === 'Contact' ? 'active-item' : ''}`} to="/v1/contact">Contact</Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
