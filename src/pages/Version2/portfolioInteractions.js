/* ═══════════════════════════════════════════════
   APP.JS — Main Interactions & Animations
   Typing effects, scroll reveals, counters,
   card tilts, and more.
   ═══════════════════════════════════════════════ */

let activeInteractionCleanup;

export function initializePortfolioInteractions() {
    activeInteractionCleanup?.();
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const eventController = new AbortController();
    const pendingTimeouts = new Set();
    const pendingAnimationFrames = new Set();
    const activeObservers = new Set();

    function scheduleTimeout(callback, delay) {
        const timeoutId = window.setTimeout(() => {
            pendingTimeouts.delete(timeoutId);
            callback();
        }, delay);
        pendingTimeouts.add(timeoutId);
        return timeoutId;
    }

    function clearScheduledTimeout(timeoutId) {
        window.clearTimeout(timeoutId);
        pendingTimeouts.delete(timeoutId);
    }

    function scheduleAnimationFrame(callback) {
        const frameId = window.requestAnimationFrame(() => {
            pendingAnimationFrames.delete(frameId);
            callback();
        });
        pendingAnimationFrames.add(frameId);
        return frameId;
    }

    // ═══════════════════════════════════════
    //  PRELOADER
    // ═══════════════════════════════════════
    const preloader = document.getElementById('preloader');

    scheduleTimeout(() => {
        if (preloader) preloader.classList.add('loaded');
        if (!prefersReducedMotion) startHeroTyping();
    }, prefersReducedMotion ? 0 : 1400);

    // ═══════════════════════════════════════
    //  HERO TYPING EFFECT
    // ═══════════════════════════════════════
    function startHeroTyping() {
        const line1El = document.getElementById('hero-line-1');
        const line2El = document.getElementById('hero-line-2');
        const line1Text = "Hi, I'm Madhav.";
        const line2Text = "Full Stack Developer";

        typeText(line1El, line1Text, 45, () => {
            scheduleTimeout(() => {
                typeText(line2El, line2Text, 40);
            }, 180);
        });
    }

    function typeText(element, text, speed, callback) {
        if (!element) return;
        if (prefersReducedMotion) {
            element.textContent = text;
            if (callback) callback();
            return;
        }
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                scheduleTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // ═══════════════════════════════════════
    // ═══════════════════════════════════════
    // ═══════════════════════════════════════
    //  NAVBAR SCROLL EFFECT
    // ═══════════════════════════════════════
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function handleNavScroll() {
        const scrollY = window.scrollY;

        // Add background on scroll
        if (scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link based on section
        sections.forEach((section) => {
            const top = section.offsetTop - 150;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < bottom) {
                navLinks.forEach((link) => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true, signal: eventController.signal });
    handleNavScroll();

    // ═══════════════════════════════════════
    //  MOBILE NAVIGATION
    // ═══════════════════════════════════════
    const navToggle = document.getElementById('nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.classList.toggle('active');
            mobileNav.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            if (isOpen) mobileNav.querySelector('.mobile-link')?.focus();
        }, { signal: eventController.signal });

        function closeMobileNav() {
            navToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Open navigation menu');
            document.body.style.overflow = '';
        }

        // Close mobile nav on link click
        mobileNav.querySelectorAll('.mobile-link').forEach((link) => {
            link.addEventListener('click', () => {
                closeMobileNav();
            }, { signal: eventController.signal });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileNav();
                navToggle.focus();
                return;
            }

            if (event.key === 'Tab' && mobileNav.classList.contains('active')) {
                const links = mobileNav.querySelectorAll('.mobile-link');
                const first = links[0];
                const last = links[links.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        }, { signal: eventController.signal });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) closeMobileNav();
        }, { signal: eventController.signal });
    }

    // ═══════════════════════════════════════
    //  SMOOTH SCROLL FOR NAV LINKS
    // ═══════════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
            }
        }, { signal: eventController.signal });
    });

    // ═══════════════════════════════════════
    //  SCROLL REVEAL ANIMATIONS
    // ═══════════════════════════════════════
    const revealElements = document.querySelectorAll('[data-reveal]');

    function revealElement(target) {
        target.classList.add('revealed');

        if (target.classList.contains('stat-item')) {
            const counter = target.querySelector('[data-count]');
            if (counter && !counter.dataset.animationStarted) {
                counter.dataset.animationStarted = 'true';
                if (prefersReducedMotion) counter.textContent = counter.dataset.count;
                else animateCounter(counter);
            }
        }

        if (target.classList.contains('metric-row')) {
            const fill = target.querySelector('.metric-fill');
            if (fill && !fill.classList.contains('animated')) {
                fill.style.setProperty('--target-width', `${fill.dataset.width}%`);
                fill.classList.add('animated');
            }
        }
    }

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = prefersReducedMotion ? 0 : parseInt(entry.target.dataset.delay || 0, 10);
                        scheduleTimeout(() => revealElement(entry.target), delay);
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px',
            }
        );
        activeObservers.add(revealObserver);
        revealElements.forEach((el) => revealObserver.observe(el));
    } else {
        revealElements.forEach(revealElement);
    }

    // ═══════════════════════════════════════
    //  COUNTER ANIMATION (About Stats)
    // ═══════════════════════════════════════
    function animateCounter(el) {
        const target = Number.parseInt(el.dataset.count, 10);
        if (!Number.isFinite(target)) return;
        const reel = document.createElement('span');
        reel.className = 'stat-counter-reel';
        reel.setAttribute('aria-hidden', 'true');
        reel.style.setProperty('--counter-target', target);

        for (let value = 0; value <= target; value += 1) {
            const digit = document.createElement('span');
            digit.textContent = value;
            reel.appendChild(digit);
        }

        el.setAttribute('role', 'img');
        el.setAttribute('aria-label', String(target));
        el.replaceChildren(reel);
        scheduleAnimationFrame(() => {
            scheduleAnimationFrame(() => reel.classList.add('is-counting'));
        });
    }

    // ═══════════════════════════════════════
    //  SKILL METRIC BARS ANIMATION
    // ═══════════════════════════════════════
    // ═══════════════════════════════════════
    //  PROJECT CARD TILT EFFECT
    // ═══════════════════════════════════════
    const tiltCards = document.querySelectorAll('[data-tilt]');

    if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) tiltCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

            // Move glow
            const glow = card.querySelector('.project-glow');
            if (glow) {
                glow.style.opacity = '1';
                glow.style.background = `radial-gradient(circle at ${x}px 0px, rgba(0, 229, 255, 0.4), transparent 60%)`;
            }
        }, { signal: eventController.signal });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            const glow = card.querySelector('.project-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        }, { signal: eventController.signal });
    });

    // ═══════════════════════════════════════
    //  TECH BADGE HOVER SOUND EFFECT (visual)
    // ═══════════════════════════════════════
    const techBadges = document.querySelectorAll('.tech-badge[data-glow]');
    techBadges.forEach((badge) => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.08)';
        }, { signal: eventController.signal });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        }, { signal: eventController.signal });
    });

    // ═══════════════════════════════════════
    //  CONTACT FORM
    // ═══════════════════════════════════════
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recipient = document.querySelector('.contact-info a[href^="mailto:"]')?.getAttribute('href').slice(7);
            if (!recipient || !formSuccess) return;

            const formData = new FormData(contactForm);
            const subject = `Portfolio enquiry from ${formData.get('name')}`;
            const body = [
                `Name: ${formData.get('name')}`,
                `Email: ${formData.get('email')}`,
                '',
                formData.get('message'),
            ].join('\n');
            window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            formSuccess.classList.add('show');
        }, { signal: eventController.signal });
    }

    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) footerCopy.textContent = footerCopy.textContent.replace('2024', new Date().getFullYear());

    // ═══════════════════════════════════════
    //  SHOOTING STARS (CSS-based)
    // ═══════════════════════════════════════
    const meteorMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const meteorPool = Array.from({ length: 3 }, () => {
        const meteor = document.createElement('div');
        meteor.className = 'shooting-star';
        meteor.setAttribute('aria-hidden', 'true');
        document.querySelector('.portfolio-v2')?.appendChild(meteor);
        return meteor;
    });
    const meteorTimers = new Map();

    function clearMeteorTimer(meteor) {
        if (meteorTimers.has(meteor)) {
            clearScheduledTimeout(meteorTimers.get(meteor));
            meteorTimers.delete(meteor);
        }
    }

    function scheduleMeteor(meteor, firstWave = false) {
        if (document.hidden || meteorMotion.matches) return;
        clearMeteorTimer(meteor);
        const delay = firstWave ? 300 + Math.random() * 1800 : 900 + Math.random() * 2600;
        meteorTimers.set(meteor, scheduleTimeout(() => {
            meteorTimers.delete(meteor);
            if (document.hidden || meteorMotion.matches) return;

            meteor.style.setProperty('--meteor-x', `${-18 + Math.random() * 12}vw`);
            meteor.style.setProperty('--meteor-y', `${-12 + Math.random() * 35}vh`);
            meteor.style.setProperty('--meteor-angle', `${24 + Math.random() * 18}deg`);
            meteor.style.setProperty('--meteor-color', Math.random() < 0.82 ? '0, 229, 255' : '191, 90, 242');
            meteor.style.setProperty('--meteor-distance', `${145 + Math.random() * 20}vw`);
            meteor.style.setProperty('--meteor-length', `${100 + Math.random() * 90}px`);
            meteor.style.setProperty('--meteor-duration', '10s');
            meteor.classList.add('active');
        }, delay));
    }

    meteorPool.forEach((meteor) => {
        meteor.addEventListener('animationend', () => {
            meteor.classList.remove('active');
            scheduleMeteor(meteor);
        }, { signal: eventController.signal });
    });

    function stopMeteorShower() {
        meteorPool.forEach((meteor) => {
            clearMeteorTimer(meteor);
            meteor.classList.remove('active');
        });
    }

    function startMeteorShower() {
        if (document.hidden || meteorMotion.matches) return;
        meteorPool.forEach((meteor) => scheduleMeteor(meteor, true));
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopMeteorShower();
        else startMeteorShower();
    }, { signal: eventController.signal });
    meteorMotion.addEventListener('change', () => {
        if (meteorMotion.matches) stopMeteorShower();
        else startMeteorShower();
    }, { signal: eventController.signal });
    startMeteorShower();

    // ═══════════════════════════════════════
    //  TERMINAL TYPING EFFECT ON SCROLL
    //  (for terminal command lines)
    // ═══════════════════════════════════════
    const terminalCmds = document.querySelectorAll('.terminal-cmd');

    const cmdObserver = 'IntersectionObserver' in window ? new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cmd = entry.target;
                    const textSpan = cmd.querySelector('.prompt');
                    if (prefersReducedMotion) {
                        cmdObserver.unobserve(cmd);
                        return;
                    }
                    if (textSpan && textSpan.nextSibling) {
                        const fullText = textSpan.nextSibling.textContent;
                        textSpan.nextSibling.textContent = '';
                        let i = 0;
                        function typeCmd() {
                            if (i < fullText.length) {
                                textSpan.nextSibling.textContent += fullText.charAt(i);
                                i++;
                                scheduleTimeout(typeCmd, 40);
                            }
                        }
                        scheduleTimeout(typeCmd, 600);
                    }
                    cmdObserver.unobserve(cmd);
                }
            });
        },
        { threshold: 0.5 }
    ) : null;

    if (cmdObserver) {
        activeObservers.add(cmdObserver);
        terminalCmds.forEach((cmd) => cmdObserver.observe(cmd));
    }

    // ═══════════════════════════════════════
    //  PAGE VISIBILITY — pause animations
    // ═══════════════════════════════════════
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.querySelector('.portfolio-v2')?.classList.add('paused');
        } else {
            document.querySelector('.portfolio-v2')?.classList.remove('paused');
        }
    }, { signal: eventController.signal });

    function cleanup() {
        eventController.abort();
        pendingTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
        pendingTimeouts.clear();
        pendingAnimationFrames.forEach((frameId) => window.cancelAnimationFrame(frameId));
        pendingAnimationFrames.clear();
        activeObservers.forEach((observer) => observer.disconnect());
        activeObservers.clear();
        meteorTimers.clear();
        meteorPool.forEach((meteor) => meteor.remove());
        document.body.style.overflow = '';
        if (activeInteractionCleanup === cleanup) activeInteractionCleanup = undefined;
    }

    activeInteractionCleanup = cleanup;
    return cleanup;

}
