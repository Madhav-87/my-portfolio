import React from 'react'
import Header from './Header'
import './Contact.css';
import Footer from './Footer';
export default function Contact() {
    return (
        <div>
            <Header activeEle={"Contact"} />
            <main className='mainProject'>
                <div className='flex flex-center flex-col project-container gap-40'>
                    <div className='flex flex-center flex-col gap-10'>
                        <div className='color-blue'>CONTACT</div>
                        <div className='heading-4'>Let's Connect</div>
                        <div className='subtxt'>Have a role, project, or just a hello? I'd love to hear from you.</div>
                    </div>
                    <div className='message-container'>
                        <form className='flex  flex-col gap-40'>
                            <div>
                                <span className='h-5'>Send a message</span>
                            </div>
                            <div className='flex gap-20'>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Name</label>
                                    <input type="text" placeholder='Your name'></input>
                                </div>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Email</label>
                                    <input type="email" placeholder='you@company.com'></input>
                                </div>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Subject</label>
                                <input type="text" placeholder={`What's this about?`}></input>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Message</label>
                                <textarea placeholder='Tell me about the role or project..'/>
                            </div>
                            <button className='flex flex-center gap-10 magic-btn gen-btn width-50'>
                                <span>Send Message</span>
                                <span class="material-symbols-outlined tilt">
                                    send
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    )
}
