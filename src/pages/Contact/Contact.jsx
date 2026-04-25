import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import './Contact.css';
import Footer from '../../Components/Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
export default function Contact() {
    const form = useRef();
    let [loading, setLoading] = useState(false);
    const sendEmail = (event) => {
        event.preventDefault();
        setLoading(prev=>true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ).then(() => {
            toast.success("Message sent successfully!")
            event.target.reset();
        }).catch(() => {
            toast.error("Failed to send message.");
        }).finally(()=>{
            setLoading(prev=>false);
        })
    };
    return (
        <div>
            <ToastContainer />
            <Header activeEle={"Contact"} />
            <main className='mainProject'>
                <div className='flex flex-center flex-col project-container gap-40'>
                    <div className='flex flex-center flex-col gap-10'>
                        <div className='color-blue'>CONTACT</div>
                        <div className='heading-4'>Let's Connect</div>
                        <div className='subtxt text-center'>Have a role, project, or just a hello? I'd love to hear from you.</div>
                    </div>
                    <div className='message-container'>
                        <form ref={form} className='flex  flex-col gap-40' onSubmit={sendEmail}>
                            <div>
                                <span className='h-5'>Send a message</span>
                            </div>
                            <div className='flex gap-20'>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Name</label>
                                    <input type="text" placeholder='Your name' name="name" required></input>
                                </div>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Email</label>
                                    <input type="email" placeholder='you@company.com' name="email" required></input>
                                </div>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Subject</label>
                                <input type="text" placeholder={`What's this about?`} name="title" required></input>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Message</label>
                                <textarea placeholder='Tell me about the role or project..' name="message" required/>
                            </div>
                            <button className='flex flex-center gap-10 magic-btn gen-btn width-50'>
                                {
                                    loading
                                        ?
                                    (
                                        <span class="fas fa-spinner"></span>
                                    )
                                    :
                                    (
                                    <>
                                    <span>Send Message</span>
                                    <span class="material-symbols-outlined tilt">
                                        send
                                    </span>
                                    </>
                                    )
                                }
                        </button>
                    </form>
                </div>
        </div>

            </main >
        <Footer />
        </div >
    )
}
