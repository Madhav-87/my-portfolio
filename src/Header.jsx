import React, { useEffect, useState } from 'react'
import {Link }from 'react-router-dom';
export default function Header({activeEle}) {
    let [active,setActive]=useState("");
    useEffect(()=>{
        setActive(activeEle);
    },[]);
    return (
        <header>
            <div className='header-div'>
                <div className='header-box-20'>
                    <div className='profile-icon magic-btn'>
                        M
                    </div>
                    <div><h3>Madhav</h3></div>
                </div>
                <div className='header-box-50'>
                    <Link className={`nav-items ${active==="Home" ? 'active-item' : ""}`} to="/">Home</Link>
                    <Link className={`nav-items ${active==="Projects" ? 'active-item' : ""}`} to="/projects">Projects</Link>
                    <div className={`nav-items ${active==="Experience" ? 'active-item' : ""}`}>Experience</div>
                    <Link className={`nav-items ${active==="Contact" ? 'active-item' : ""}`} to="/contact">Contact</Link>
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
    )
}
