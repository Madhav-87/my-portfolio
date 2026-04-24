import React from 'react'
import Header from '../../Components/Header.jsx';
import './Project.css';
import Footer from '../../Components/Footer.jsx';

export default function Project() {
    return (
        <div>
            <Header activeEle={"Projects"} />
            <main className='mainProject'>
                <div className='flex flex-center flex-col project-container gap-40'>
                    <div className='flex flex-center flex-col gap-10'>
                        <div className='color-blue'>PROJECTS</div>
                        <div className='heading-4'>Selected Work</div>
                        <div className='subtxt text-center'>A handful of projects I'm proud of - built with care for users and code quality.</div>
                    </div>
                    <div className='flex flex-center flex-wrap height-100 width-100 gap-40'>
                        <div className='flex flex-col project-box gap-15'>
                            <div className='projectbox-img-container'></div>
                            <div className='h-5'>Growth Tracker</div>
                            <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MYSQL</li>
                                </ul>
                            </div>
                            <div>
                                <button className='magic-btn gen-btn flex flex-center gap-10' onClick={()=>{window.open(`${import.meta.env.VITE_GITHUB_GROWTH_TRACKER_URL}`,"_blank")}}>
                                    <span class="fa-brands fa-github cursor-pointer"></span>
                                    <span>Code</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col project-box gap-15 '>
                            <div className='projectbox-img-container'></div>
                            <div className='h-5'>Growth Tracker</div>
                            <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MYSQL</li>
                                </ul>
                            </div>
                            <div>
                                <button className='magic-btn gen-btn flex flex-center gap-10' onClick={()=>{window.open(`${import.meta.env.VITE_GITHUB_STUDY_PLANNER_URL}`,"_blank")}}>
                                    <span class="fa-brands fa-github cursor-pointer"></span>
                                    <span>Code</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col project-box gap-15'>
                            <div className='projectbox-img-container'></div>
                            <div className='h-5'>Growth Tracker</div>
                            <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MYSQL</li>
                                </ul>
                            </div>
                            <div>
                                <button className='magic-btn gen-btn flex flex-center gap-10' onClick={()=>{window.open(`${import.meta.env.VITE_GITHUB_PORTFOLIO_URL}`,"_blank")}}>
                                    <span class="fa-brands fa-github cursor-pointer"></span>
                                    <span>Code</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
