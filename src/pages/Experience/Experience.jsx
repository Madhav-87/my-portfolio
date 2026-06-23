import React from 'react'
import Header from '../../Components/Header'
import './Experience.css';
import Footer from '../../Components/Footer';
export default function Experience() {
    return (
        <div>
            <Header activeEle={"Experience"} />
            <main className='mainProject'>
                <div className='flex flex-center gap-5'>
                    <div className='timeline'>
                        <div className='point'></div>
                        <div className='point'></div>
                        <div className='point'></div>
                    </div>
                    <div className='flex flex-center flex-col project-container ex-project-container  gap-40'>
                        <div className='flex flex-center flex-col gap-10'>
                            <div className='flex flex-center gap-10 color-blue'><i className="fa-solid fa-road" style={{ color: "black" }}></i> JOURNEY</div>
                            <div className='heading-4 text-center'>Project-Based Experience & Education</div>
                            <div className='subtxt'>Where I've worked and studied.</div>
                        </div>
                        <div className='flex flex-center gap-10 h-5 ex-main-txt'>
                            <span className="material-symbols-outlined">
                                business_center
                            </span> 
                            <span>
                                Project-Based Experience
                            </span>
                        </div>
                        <div tabIndex={5} className= 'mr-10 hover-lift flex flex-col gap-10 ex-box-container'>
                            <div className='h-6'>Growth Tracker</div>
                            <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
                        </div>
                        <div tabIndex={6} className='hover-lift flex flex-col gap-10 ex-box-container'>
                            <div className='h-6'>AI Study Planner</div>
                            <div className='subtxt'>An AI-based study planner that helps students create structured study schedules directly from their syllabus. It uses AI to organize topics efficiently and includes a Pomodoro timer to improve focus and productivity during study sessions.</div>
                        </div>
                        <div tabIndex={7} className='hover-lift flex flex-col gap-10 ex-box-container'>
                            <div className='h-6'>Personal Portfolio</div>
                            <div className='subtxt'>A personal portfolio website created to showcase my skills, projects, experience, and certifications in a clear and organized way. It acts as a central place where recruiters and others can explore my work and understand my technical abilities.</div>
                        </div>
                        <div className='flex flex-center gap-10 h-5'>
                            <span className="material-symbols-outlined">
                                school
                            </span> <span>Education</span>
                        </div>
                        <div tabIndex={8} className='hover-lift flex flex-col gap-5 ex-box-container'>
                            <div className='h-6'>MGM's College of Computer Science and IT, Nanded</div>
                            <div className='subtxt color-blue'>B.C.A, Computer Application</div>
                            <div className='subtxt'>CGPA: 9.42</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
