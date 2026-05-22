import React, { useRef, useState } from 'react'
import Header from '../../Components/Header'
import './Contact.css';
import Footer from '../../Components/Footer';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
export default function Contact() {
    const form = useRef();
    let [loading, setLoading] = useState(false);
    let [messageSent, setMessage]=useState(false);
    const sendEmail = (event) => {
        event.preventDefault();
        setLoading(prev=>true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        ).then(() => {
            setMessage(prev=>true);
            setTimeout(()=>{
                setMessage(prev => false);
                event.target.reset();
            },5000);
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
                        <div className='color-blue flex flex-center gap-10'><i className="fa-solid fa-user" style={{color:"black"}}></i> CONTACT</div>
                        <div className='heading-4'>Let's Connect</div>
                        <div className='subtxt text-center'>Have a role, project, or just a hello? I'd love to hear from you.</div>
                    </div>
                    <div tabIndex={5} className='message-container'>
                        <form ref={form} className='flex  flex-col gap-40' onSubmit={sendEmail}>
                            <div>
                                <span className='h-5'>Send a message</span>
                            </div>
                            <div className='flex gap-20'>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Name</label>
                                    <input tabIndex={6} type="text" placeholder='Your name' name="name" required></input>
                                </div>
                                <div className='flex width-50 flex-col gap-5'>
                                    <label>Email</label>
                                    <input tabIndex={7} type="email" placeholder='you@company.com' name="email" required></input>
                                </div>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Subject</label>
                                <input tabIndex={8} type="text" placeholder={`What's this about?`} name="title" required></input>
                            </div>
                            <div className='flex width-100 flex-col gap-5'>
                                <label>Message</label>
                                <textarea tabIndex={9} placeholder='Tell me about the role or project..' name="message" required/>
                            </div>
                            <button tabIndex={10} className='flex flex-center gap-10 magic-btn gen-btn width-50 transition'>
                                {
                                    loading
                                        ?
                                    (
                                        <span className="fas fa-spinner"></span>
                                    )
                                    :
                                    messageSent
                                    ?
                                    (
                                    <>
                                    <span>Sent successfully</span>
                                    <span className='fa-solid fa-check-circle'></span>
                                    </>
                                    )
                                    :
                                    (   
                                    <>
                                    <span>Send Message</span>
                                    <span className="material-symbols-outlined tilt">
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
