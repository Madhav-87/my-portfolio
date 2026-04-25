import React from 'react'
import Header from '../../Components/Header'
import './Experience.css';
import Footer from '../../Components/Footer';
export default function Experience() {
  return (
    <div>
        <Header activeEle={"Experience"}/>
        <main className='mainProject'>
                <div className='flex flex-center flex-col project-container gap-40'>
                    <div className='flex flex-center flex-col gap-10'>
                        <div className='color-blue'>JOURNEY</div>
                        <div className='heading-4 text-center'>Project-Based Experience & Education</div>
                        <div className='subtxt'>Where I've worked and studied.</div>
                    </div>
                    <div className='h-5'>
                        Project-Based Experience
                    </div>
                    <div className='flex flex-col gap-10 ex-box-container'>
                        <div className='h-6'>Growth Tracker</div>
                        <div className='subtxt'>Growth Tracker is a personal development web application designed to help users set meaningful goals, track daily progress, and build long-term habits. It provides structured planning, performance analytics, and visual reports to improve consistency and productivity. The platform focuses on transforming small daily actions into measurable growth over time.</div>
                    </div>
                    <div className='flex flex-col gap-10 ex-box-container'>
                        <div className='h-6'>AI Study Planner</div>
                        <div className='subtxt'>An AI-based study planner that helps students create structured study schedules directly from their syllabus. It uses AI to organize topics efficiently and includes a Pomodoro timer to improve focus and productivity during study sessions.</div>
                    </div>
                    <div className='flex flex-col gap-10 ex-box-container'>
                        <div className='h-6'>Personal Portfolio</div>
                        <div className='subtxt'>A personal portfolio website created to showcase my skills, projects, experience, and certifications in a clear and organized way. It acts as a central place where recruiters and others can explore my work and understand my technical abilities.</div>
                    </div>
                    <div className='h-5'>
                        Education
                    </div>
                    <div className='flex flex-col gap-5 ex-box-container'>
                        <div className='h-6'>MGM's College of Computer Science and IT, Nanded</div>
                        <div className='subtxt color-blue'>B.C.A, Computer Application</div>
                        <div className='subtxt'>CGPA: 9.42</div>
                    </div>
                </div>
            </main>
            <Footer/>
    </div>
  )
}
