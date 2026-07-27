import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css';
export default function Header({ activeEle }) {
    let [active, setActive] = useState("");
    const handleResize =()=>{
        setMobile(window.innerWidth<=1024);
        if(!window.innerWidth<=1024)
            setSliderOpen(false);
    }
    useEffect(() => {
        setActive(activeEle);
    }, []);
    let [sliderOpen,setSliderOpen]=useState(false);
    let [mobile,setMobile]=useState(window.innerWidth<=1024);
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        return ()=> window.removeEventListener("resize",handleResize);
    },[]);
    return (
        <>
        {sliderOpen && (<div className='blur-background'></div>)}
        <header>
            <div className='header-div'>
                <div className='header-box-20'>
                    <div className='profile-icon'>
                        <img src="./portfolio-icon.png" height={30} alt="site icon"/>
                    </div>
                    <div><h3>Madhav Bondhare</h3></div>
                    <div
                        tabIndex={0}
                        role="button"
                        aria-label={sliderOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={sliderOpen}
                        aria-controls="main-navigation"
                        onClick={()=>{setSliderOpen(prev=>!prev)}}
                        onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSliderOpen(prev=>!prev); } }}
                        className={`${mobile ? 'flex flex-col gap-10 three-dots-icon' : ''}`}
                    >
                        <span className={`${sliderOpen? 'lines cross-1': 'lines'}`}></span>
                        <span className={`${sliderOpen? 'lines cross-2': 'lines'}`}></span>
                    </div>
                </div>
                
                <div id="main-navigation" className={`${mobile? `mobile-slider ${sliderOpen? 'slide-open': ' '}`: '' } header-box-50`}>
                   <div className='nav-text-container gap-50'>
                     <Link className={`nav-items color-blue-hover ${active === "Home" ? 'active-item' : ""}`} to="/">Home</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Projects" ? 'active-item' : ""}`} to="/projects">Projects</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Experience" ? 'active-item' : ""}`} to="/experience">Experience</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Contact" ? 'active-item' : ""}`} to="/contact">Contact</Link>
                   </div>
                </div>
            </div>
        </header>
        </>
    )
}
