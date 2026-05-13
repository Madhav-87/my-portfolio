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
                <div  className='header-box-20'>
                    <div className='profile-icon magic-btn'>
                        M
                    </div>
                    <div><h3>Madhav Bondhare</h3></div>
                </div>
                <div className='header-box-50'>
                    <Link  tabindex="1" className={`nav-items color-blue-hover ${active==="Home" ? 'active-item' : ""}`} to="/">Home</Link>
                    <Link  tabindex="2" className={`nav-items color-blue-hover ${active==="Projects" ? 'active-item' : ""}`} to="/projects">Projects</Link>
                    <Link  tabindex="3" className={`nav-items color-blue-hover ${active==="Experience" ? 'active-item' : ""}`} to="/experience">Experience</Link>
                    <Link  tabindex="4" className={`nav-items color-blue-hover ${active==="Contact" ? 'active-item' : ""}`} to="/contact">Contact</Link>
                </div>
            </div>
        </header>
    )
}
