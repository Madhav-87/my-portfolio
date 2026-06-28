import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import isMobile from 'is-mobile';
import './header.css';

export default function Header({ activeEle }) {
    let [active, setActive] = useState("");
    useEffect(() => {
        setActive(activeEle);
    }, []);
    let [sliderOpen,setSliderOpen]=useState(false);
    let [mobile,setMobile]=useState(isMobile())
    return (
        <header>
            <div className='header-div'>
                <div className='header-box-20'>
                    <div className='profile-icon magic-btn'>
                        M
                    </div>
                    <div><h3>Madhav Bondhare</h3></div>
                    <div tabIndex={0} role="button" onClick={()=>{setSliderOpen(prev=>!prev)}} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSliderOpen(prev=>!prev); } }} className={`${mobile ? 'flex flex-col gap-10 three-dots-icon' : ''}`}>
                        <span className={`${sliderOpen? 'lines cross-1': 'lines'}`}></span>
                        <span className={`${sliderOpen? 'lines cross-2': 'lines'}`}></span>
                    </div>
                </div>

                <div className={`${mobile? `mobile-slider ${sliderOpen? 'slide-open': ' '}`: '' } header-box-50`}>
                    <Link className={`nav-items color-blue-hover ${active === "Home" ? 'active-item' : ""}`} to="/">Home</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Projects" ? 'active-item' : ""}`} to="/projects">Projects</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Experience" ? 'active-item' : ""}`} to="/experience">Experience</Link>
                    <Link className={`nav-items color-blue-hover ${active === "Contact" ? 'active-item' : ""}`} to="/contact">Contact</Link>
                </div>
            </div>
        </header>
    )
}
