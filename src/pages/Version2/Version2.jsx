import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowDown, ArrowUpRight, Code2, Mail, MapPin, Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import VersionSwitcher from '../../components/layout/VersionSwitcher.jsx';
import growthTrackerPreview from '../../assets/growth-tracker-img.png';
import ClickSpark from '../../components/effects/ClickSpark.jsx';
import TiltedCard from '../../components/effects/TiltedCard.jsx';
import SwarmCursor from '../../components/effects/SwarmCursor.jsx';
import './portfolio.css';

const navigation = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const projects = [
    {
        number: '01',
        name: 'Growth Tracker',
        category: 'Featured project',
        description: 'A personal development app for setting meaningful goals, tracking daily progress, and building lasting habits with analytics and visual reports.',
        image: growthTrackerPreview,
        imageAlt: 'Growth Tracker application preview',
        imageStyle: 'project-image--cover',
        technologies: ['React', 'Express', 'MySQL', 'Gemini API'],
        codeUrl: import.meta.env.VITE_GITHUB_GROWTH_TRACKER_URL,
        liveUrl: import.meta.env.VITE_GROWTH_TRACKER_LINK,
        featured: true,
    },
    {
        number: '02',
        name: 'AI Study Planner',
        category: 'Learning and focus',
        description: 'An AI study planner that creates structured schedules from a syllabus and includes a Pomodoro timer to support focused study.',
        image: '/study-ai.png',
        imageAlt: 'Illustration for the AI Study Planner',
        imageStyle: 'project-image--contain',
        technologies: ['React', 'Express', 'Gemini API'],
        codeUrl: import.meta.env.VITE_GITHUB_STUDY_PLANNER_URL,
        liveUrl: import.meta.env.VITE_INTELLISTUDY_LINK,
    },
    {
        number: '03',
        name: 'Personal Portfolio',
        category: 'Portfolio and case studies',
        description: 'A personal portfolio website presenting projects, skills, experience, education, and certifications in one place.',
        image: '/portfolio-icon.png',
        imageAlt: 'Personal portfolio mark',
        imageStyle: 'project-image--contain project-image--mark',
        technologies: ['React', 'JavaScript', 'CSS', 'EmailJS'],
        codeUrl: import.meta.env.VITE_GITHUB_PORTFOLIO_URL,
    },
];

const skillGroups = [
    {
        title: 'Frontend',
        description: 'Interfaces, layouts, and accessible interactions.',
        items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
    {
        title: 'Backend',
        description: 'Application logic and service integrations.',
        items: ['Node.js', 'Express', 'REST APIs', 'JWT'],
    },
    {
        title: 'Data and tools',
        description: 'Data storage, version control, and delivery.',
        items: ['MySQL', 'MongoDB', 'Git', 'GitHub'],
    },
];

const certificates = [
    {
        number: '01',
        title: 'JavaScript',
        issuer: 'Infosys Springboard',
        file: '/JavaScript-Cert.pdf',
    },
    {
        number: '02',
        title: 'Introduction to Git and GitHub',
        issuer: 'Google / Coursera',
        file: '/Google Git and GitHub Certificate.pdf',
    },
    {
        number: '03',
        title: 'Google AI Essentials',
        issuer: 'Google / Coursera',
        file: '/Google AI Essentials.pdf',
    },
    {
        number: '04',
        title: 'React Basics',
        issuer: 'Meta / Coursera',
        file: '/react_certificate.pdf',
    },
];

const SCROLL_PARTICLE_TAIL_MS = 700;

function motionReveal(reducedMotion, delay = 0) {
    if (reducedMotion) return {};
    return {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.16 },
        transition: { duration: 0.55, delay, ease: 'easeOut' },
    };
}

function SparkClick({ children, className, reducedMotion, style }) {
    return (
        <ClickSpark
            className={className}
            sparkColor="#e7ddc8"
            shape="line"
            sparkCount={8}
            sparkSize={14}
            sparkRadius={30}
            duration={500}
            disabled={Boolean(reducedMotion)}
            style={style}
        >
            {children}
        </ClickSpark>
    );
}

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="section-heading">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {description && <p className="section-description">{description}</p>}
        </div>
    );
}

function TechnologyList({ items }) {
    return (
        <ul className="technology-list" aria-label="Technologies used">
            {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    );
}

function ProjectCard({ project, index, reducedMotion }) {
    return (
        <motion.article
            {...motionReveal(reducedMotion, index * 0.06)}
            className={`project-card card-chai${project.featured ? ' project-card--featured' : ''}`}
        >
            <div
                className={`project-media-stage${project.featured ? ' project-media-stage--featured' : ''}`}
            >
                {project.featured && (
                    <>
                        <div className="project-media-layer project-media-layer--rear" aria-hidden="true" />
                        <div className="project-media-layer project-media-layer--front" aria-hidden="true" />
                    </>
                )}
                {project.featured ? (
                    <TiltedCard
                        className="project-reactbits-tilt"
                        imageSrc={project.image}
                        altText={project.imageAlt}
                        containerWidth="100%"
                        containerHeight="100%"
                        imageWidth="100%"
                        imageHeight="100%"
                        rotateAmplitude={reducedMotion ? 0 : 6}
                        scaleOnHover={reducedMotion ? 1 : 1.025}
                        parallax={reducedMotion ? 0 : 3}
                        glare={reducedMotion ? 0 : 0.12}
                        shadow={0}
                        showTooltip={false}
                        intro={!reducedMotion}
                        floating={false}
                        gyroscope={false}
                        radius={11}
                    />
                ) : (
                    <div className="project-media-screen">
                        <img
                            className={`project-image ${project.imageStyle}`}
                            src={project.image}
                            alt={project.imageAlt}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                )}
            </div>

            <div className="project-content">
                <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="project-number">{project.number} / 03</span>
                </div>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <TechnologyList items={project.technologies} />
                <div className="project-actions">
                    {project.codeUrl && (
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" className="text-link">
                            <Code2 size={16} aria-hidden="true" />
                            <span>View code</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">
                            <span>Live demo</span>
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                    <a href="#contact" className="text-link text-link--contact">
                        <span>Discuss a similar build</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

function CertificateCard({ certificate, index, reducedMotion }) {
    return (
        <motion.article
            {...motionReveal(reducedMotion, index * 0.055)}
            className="certificate-card card-chai"
        >
            <div className="certificate-preview" aria-hidden="true">
                <div className="certificate-paper certificate-paper--back" />
                <div className="certificate-paper certificate-paper--front">
                    <span className="certificate-paper-line certificate-paper-line--long" />
                    <span className="certificate-paper-line" />
                    <span className="certificate-paper-line certificate-paper-line--short" />
                    <span className="certificate-seal" />
                </div>
            </div>
            <div className="certificate-copy">
                <div className="certificate-meta">
                    <span>{certificate.issuer}</span>
                    <span className="certificate-number">{certificate.number} / 04</span>
                </div>
                <h3>{certificate.title}</h3>
                <a
                    className="certificate-link"
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certificate.title} certificate`}
                >
                    <span>View certificate</span>
                    <ArrowUpRight className="certificate-link-arrow" size={15} aria-hidden="true" />
                </a>
            </div>
        </motion.article>
    );
}

export default function Version2() {
    const contactFormRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 8);
        let scrollEndTimer;
        updateScrollState();
        const handleScroll = () => {
            updateScrollState();
            setIsScrolling(true);
            window.clearTimeout(scrollEndTimer);
            scrollEndTimer = window.setTimeout(() => setIsScrolling(false), SCROLL_PARTICLE_TAIL_MS);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.clearTimeout(scrollEndTimer);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.portfolio-v2 section[id]');
        if (!('IntersectionObserver' in window)) return undefined;

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, { rootMargin: '-28% 0px -62% 0px' });

        sections.forEach((section) => sectionObserver.observe(section));
        return () => sectionObserver.disconnect();
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return undefined;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        const closeOnResize = () => {
            if (window.innerWidth > 768) setIsMenuOpen(false);
        };
        window.addEventListener('keydown', closeOnEscape);
        window.addEventListener('resize', closeOnResize);
        return () => {
            window.removeEventListener('keydown', closeOnEscape);
            window.removeEventListener('resize', closeOnResize);
        };
    }, [isMenuOpen]);

    const handleContactSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setFormSent(false);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                contactFormRef.current,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );
            setFormSent(true);
            contactFormRef.current?.reset();
        } catch {
            window.alert('The message could not be sent. Please try the Version 1 contact form.');
        } finally {
            setIsSending(false);
        }
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="portfolio-v2">
            <a className="skip-link" href="#main-content">Skip to content</a>

            <SwarmCursor
                className="scroll-particle-field"
                count={260}
                size={1.6}
                color="#d2cec4"
                accentColor="#c1ae8e"
                spread={76}
                speed={0.38}
                swirl={0.3}
                tail={0.16}
                trail={0.14}
                wander={0.32}
                depth={0.35}
                clickEffect="pulse"
                enabled={isScrolling && !reducedMotion}
                dpr={1.25}
            />

            <header id="navbar" className={isScrolled ? 'scrolled' : ''}>
                <nav className="nav-inner" aria-label="Main navigation">
                    <a href="#hero" className="nav-logo" onClick={closeMenu}>
                        <span className="nav-monogram" aria-hidden="true">MB</span>
                        <span>Madhav Bondhare</span>
                    </a>

                    <div className="nav-links">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <VersionSwitcher currentVersion="v2" variant="dark" />
                        <SparkClick className="nav-toggle-spark" reducedMotion={reducedMotion} style={{ width: 'auto', height: 'auto' }}>
                            <button
                                className="nav-toggle"
                                type="button"
                                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-controls="mobile-nav"
                                aria-expanded={isMenuOpen}
                                onClick={() => setIsMenuOpen((open) => !open)}
                            >
                                {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                            </button>
                        </SparkClick>
                    </div>
                </nav>

                <nav
                    id="mobile-nav"
                    className="mobile-nav"
                    aria-label="Mobile navigation"
                    hidden={!isMenuOpen}
                >
                    {navigation.map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="mobile-link" onClick={closeMenu}>
                            {item.label}
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </header>

            <main id="main-content">
                <section id="hero" className="hero-section section">
                    <div className="container hero-content">
                            <p className="hero-eyebrow">Full Stack Developer <span aria-hidden="true">·</span> Nanded, India</p>
                            <h1>
                                Hi, I&apos;m Madhav.<br />
                                I build <span className="highlight">useful digital products</span>.
                            </h1>
                            <p className="hero-lead">
                                I work across React, Node.js, APIs, and databases to turn practical ideas into polished products.
                            </p>
                            <SparkClick className="hero-actions" reducedMotion={reducedMotion} style={{ height: 'auto' }}>
                                <a href="#projects" className="btn btn-primary btn-asym">
                                    <span>Explore projects</span>
                                    <ArrowUpRight size={17} aria-hidden="true" />
                                </a>
                                <a href="#contact" className="btn btn-outline btn-asym-mirror">
                                    <span>Contact me</span>
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </a>
                            </SparkClick>
                            <SparkClick className="hero-utility-links" reducedMotion={reducedMotion} style={{ height: 'auto' }}>
                                <a className="hero-scroll-link" href="#about">
                                    <ArrowDown size={15} aria-hidden="true" />
                                    <span>Scroll to explore</span>
                                </a>
                                <a className="cv-download-link" href="/cv.pdf" download="madhav_bondhare_cv.pdf">
                                    <ArrowDown size={15} aria-hidden="true" />
                                    <span>Download CV</span>
                                </a>
                            </SparkClick>



                    </div>
                </section>

                <section id="about" className="section section-about">
                    <div className="container">
                        <SectionHeading
                            eyebrow="A little about me"
                            title="From idea to useful product"
                            description="I enjoy building across the stack and paying attention to the details that make an app feel clear and dependable."
                        />
                        <div className="about-grid">
                            <motion.div {...motionReveal(reducedMotion)} className="about-copy">
                                <p>
                                    I&apos;m Madhav Bondhare, a BCA graduate who enjoys building useful web applications. I work across the stack with React, Node.js, JavaScript, and MySQL.
                                </p>
                                <p>
                                    I like turning practical ideas into <span className="highlight">polished product experiences</span>, from the interface through the API and database.
                                </p>
                                <div className="about-location">
                                    <MapPin size={16} aria-hidden="true" />
                                    <span>Nanded, India</span>
                                </div>
                            </motion.div>

                            <motion.div {...motionReveal(reducedMotion, 0.08)} className="about-stats" aria-label="Portfolio highlights">
                                <div className="stat-item">
                                    <span className="stat-value">3<span>+</span></span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">9.28</span>
                                    <span className="stat-label">CGPA</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">4</span>
                                    <span className="stat-label">Certificates</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="section section-skills">
                    <div className="container">
                        <SectionHeading
                            eyebrow="Tools I work with"
                            title="Tech stack"
                            description="The technologies I use to design, build, and ship web applications."
                        />
                        <div className="skills-grid">
                            {skillGroups.map((group, index) => (
                                <motion.article
                                    key={group.title}
                                    {...motionReveal(reducedMotion, index * 0.06)}
                                    className="skill-card card-chai"
                                >
                                    <h3>{group.title}</h3>
                                    <p>{group.description}</p>
                                    <TechnologyList items={group.items} />
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="certificates" className="section section-certificates">
                    <div className="container">
                        <SectionHeading
                            eyebrow="Credentials"
                            title="Certificates"
                            description="A few credentials from focused study and continued learning."
                        />
                        <div className="certificates-grid">
                            {certificates.map((certificate, index) => (
                                <CertificateCard
                                    key={certificate.number}
                                    certificate={certificate}
                                    index={index}
                                    reducedMotion={reducedMotion}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="section section-projects">
                    <div className="container">
                        <SectionHeading
                            eyebrow="Selected work"
                            title="Featured projects"
                            description="A few projects built with care for the people using them and the systems behind them."
                        />
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={project.number}
                                    project={project}
                                    index={index}
                                    reducedMotion={reducedMotion}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section section-contact">
                    <div className="container">
                        <SectionHeading
                            eyebrow="Get in touch"
                            title="Let&apos;s make something useful"
                            description="Have a role, project, or question? Send me a message and I&apos;ll get back to you."
                        />
                        <div className="contact-grid">
                            <motion.div {...motionReveal(reducedMotion)} className="contact-info">
                                <a href="#contact-form" className="contact-link-item">
                                    <span className="contact-icon-wrap"><Mail size={18} aria-hidden="true" /></span>
                                    <span className="contact-link-text">
                                        <span className="contact-link-label">Email</span>
                                        <span className="contact-link-value">Send me a message</span>
                                    </span>
                                    <ArrowUpRight className="contact-link-arrow" size={16} aria-hidden="true" />
                                </a>
                                {import.meta.env.VITE_LINKEDIN_URL && (
                                    <a href={import.meta.env.VITE_LINKEDIN_URL} className="contact-link-item" target="_blank" rel="noreferrer">
                                        <span className="contact-icon-wrap"><ArrowUpRight size={18} aria-hidden="true" /></span>
                                        <span className="contact-link-text">
                                            <span className="contact-link-label">LinkedIn</span>
                                            <span className="contact-link-value">Connect with me</span>
                                        </span>
                                        <ArrowUpRight className="contact-link-arrow" size={16} aria-hidden="true" />
                                    </a>
                                )}
                                <a href="https://github.com/Madhav-87" className="contact-link-item" target="_blank" rel="noreferrer">
                                    <span className="contact-icon-wrap"><Code2 size={18} aria-hidden="true" /></span>
                                    <span className="contact-link-text">
                                        <span className="contact-link-label">GitHub</span>
                                        <span className="contact-link-value">github.com/Madhav-87</span>
                                    </span>
                                    <ArrowUpRight className="contact-link-arrow" size={16} aria-hidden="true" />
                                </a>
                            </motion.div>

                            <motion.div {...motionReveal(reducedMotion, 0.08)} className="contact-form-card card-chai">
                                <form id="contact-form" className="contact-form" ref={contactFormRef} onSubmit={handleContactSubmit}>
                                    <label className="form-group" htmlFor="contact-name">
                                        <span className="form-label">Your name</span>
                                        <input id="contact-name" name="name" type="text" className="form-input" placeholder="Name" autoComplete="name" required />
                                    </label>
                                    <label className="form-group" htmlFor="contact-email">
                                        <span className="form-label">Email address</span>
                                        <input id="contact-email" name="email" type="email" className="form-input" placeholder="you@example.com" autoComplete="email" required />
                                    </label>
                                    <label className="form-group" htmlFor="contact-message">
                                        <span className="form-label">Message</span>
                                        <textarea id="contact-message" name="message" className="form-input form-textarea" placeholder="Tell me a little about it" rows="4" required />
                                    </label>
                                    <SparkClick className="form-submit-spark" reducedMotion={reducedMotion} style={{ height: 'auto' }}>
                                        <button type="submit" className="btn btn-primary btn-asym form-submit" disabled={isSending}>
                                        <span>{isSending ? 'Sending…' : 'Send message'}</span>
                                        <ArrowUpRight size={17} aria-hidden="true" />
                                        </button>
                                    </SparkClick>
                                    {formSent && (
                                        <p className="form-success" role="status" aria-live="polite">
                                            Your message has been sent. Thanks for reaching out.
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-inner">
                    <a href="#hero" className="footer-logo">Madhav Bondhare</a>
                    <p>Designed and built with care.</p>
                    <a href="#hero" className="footer-top-link">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
                    <span className="footer-copy">© {new Date().getFullYear()} Madhav Bondhare</span>
                </div>
            </footer>
        </div>
    );
}
