/**
 * Navi Disha Foundation
 * Custom JavaScript with enhanced GSAP animations
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize preloader
    initPreloader();
    
    // Initialize Bootstrap components
    initBootstrapComponents();
    
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize counter animation
    initCounterAnimation();
    
    // Initialize particles background
    initParticlesBackground();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize form validation
    initFormValidation();

    // Handle smooth scrolling
    initSmoothScrolling();
    
    // Initialize active menu highlighting
    initActiveMenuHighlighting();
});

// Initialize preloader with Indian flag-themed loading
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        // Create flag-themed animation
        gsap.to(preloader.querySelector('.loader'), {
            borderTopColor: "#FF9933", // Saffron
            duration: 0.7,
            repeat: 1,
            yoyo: true,
            onComplete: function() {
                gsap.to(preloader.querySelector('.loader'), {
                    borderTopColor: "#FFFFFF", // White
                    duration: 0.7,
                    repeat: 1,
                    yoyo: true,
                    onComplete: function() {
                        gsap.to(preloader.querySelector('.loader'), {
                            borderTopColor: "#138808", // Green
                            duration: 0.7,
                            repeat: 1,
                            yoyo: true,
                            onComplete: function() {
                                // Fade out preloader
                                gsap.to(preloader, {
                                    opacity: 0,
                                    duration: 0.5,
                                    onComplete: function() {
                                        preloader.style.display = 'none';
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

// Initialize Bootstrap components
function initBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Initialize particles background for impact section - Chakra-inspired design
function initParticlesBackground() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FF9933", "#FFFFFF", "#138808", "#000080"]
                },
                "shape": {
                    "type": ["circle", "triangle"],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#FFFFFF",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.log("Particles.js not loaded or element not found");
    }
}

// Initialize GSAP animations with Indian-inspired effects
function initGSAPAnimations() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Create a smooth navbar animation
    gsap.to("#navbar", {
        scrollTrigger: {
            trigger: "body",
            start: "top -50",
            end: "bottom top",
            toggleClass: {targets: "#navbar", className: "scrolled"},
            toggleActions: "play none none reverse"
        }
    });
    
    // Hero section animation
    const heroTl = gsap.timeline({defaults: {ease: "power3.out"}});
    
    heroTl.from(".hero-section:before", {
        opacity: 0,
        duration: 1.2
    })
    .from(".hero-overlay", {
        opacity: 0,
        duration: 1
    }, "-=0.8")
    .from(".hero-content h1", {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-buttons .btn", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6
    }, "-=0.4")
    .from(".scroll-indicator", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true
    }, "-=0.2");
    
    // Create a reusable staggered fade-in animation for section headers
    const fadeInUpHeaders = gsap.utils.toArray('.section-header');
    fadeInUpHeaders.forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });
        
        // Animate the header decoration
        gsap.from(header.querySelector('h2:before, h2:after'), {
            scrollTrigger: {
                trigger: header,
                start: "top 85%"
            },
            opacity: 0,
            duration: 1,
            delay: 0.3,
            scale: 0.5
        });
        
        // Animate the header line
        gsap.from(header.querySelector(':after'), {
            scrollTrigger: {
                trigger: header,
                start: "top 85%"
            },
            width: 0,
            duration: 1,
            delay: 0.5
        });
    });
    
    // Focus Card animations - Rangoli inspired reveal
    const focusCards = gsap.utils.toArray('.focus-card');
    focusCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "back.out(1.5)"
        });
        
        // Animate the icon with a slight bounce
        gsap.from(card.querySelector('.focus-icon'), {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            scale: 0,
            rotation: -45,
            duration: 0.8,
            delay: 0.2 + (index * 0.1),
            ease: "elastic.out(1, 0.5)"
        });
    });
    
    // Animate timeline items like a traditional Indian scroll unrolling
    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        tl.from(item.querySelector('.timeline-content'), {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out"
        })
        .from(item.querySelector('.date'), {
            opacity: 0,
            scale: 0.8,
            duration: 0.5
        }, "-=0.4")
        .from(item.querySelector('h4'), {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.3")
        .from(item.querySelector('p'), {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");
    });
    
    // Team cards animation
    const teamCards = gsap.utils.toArray('.team-card');
    teamCards.forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
        
        tl.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.15
        })
        .from(card.querySelector('.team-img img'), {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.4")
        .from(card.querySelector('.team-info'), {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");
    });
    
    // Testimonial cards - reveal with scale effect
    const testimonialCards = gsap.utils.toArray('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.15,
            ease: "power2.out"
        });
    });
    
    // Program row animations - showcase content in a staggered fashion
    const programRows = gsap.utils.toArray('.program-row');
    programRows.forEach(row => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        tl.from(row.querySelector('.program-img'), {
            x: row.querySelector('.program-img').parentElement.classList.contains('order-lg-2') ? 50 : -50,
            opacity: 0,
            duration: 0.8
        })
        .from(row.querySelector('.program-content'), {
            x: row.querySelector('.program-img').parentElement.classList.contains('order-lg-2') ? -50 : 50,
            opacity: 0,
            duration: 0.8
        }, "-=0.5")
        .from(row.querySelectorAll('.program-list li'), {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        }, "-=0.4");
    });
    
    // Animate the counter section
    gsap.from('.impact-section .section-header', {
        scrollTrigger: {
            trigger: '.impact-section',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8
    });
    
    // Involvement card animations
    const involvementCards = gsap.utils.toArray('.involvement-card');
    involvementCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2
        });
    });
    
    // Contact section animations
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: "top 85%"
        },
        x: -50,
        opacity: 0,
        duration: 0.8
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: "top 85%"
        },
        x: 50,
        opacity: 0,
        duration: 0.8
    });
    
    // Social links animation
    gsap.from('.social-links a', {
        scrollTrigger: {
            trigger: '.social-links',
            start: "top 90%"
        },
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)"
    });
    
    // Map section reveal
    gsap.from('.map-section iframe', {
        scrollTrigger: {
            trigger: '.map-section',
            start: "top 90%"
        },
        opacity: 0,
        height: 0,
        duration: 1
    });
    
    // Footer animation
    gsap.from('.footer-about, .footer-links, .footer-newsletter', {
        scrollTrigger: {
            trigger: '.footer',
            start: "top 90%"
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
    });
}

// Initialize counter animation with improved effect
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter, index) => {
        const targetCount = parseInt(counter.getAttribute('data-count'));
        
        // Create a colorful and more dynamic counter animation
        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            innerHTML: targetCount,
            duration: 2.5,
            delay: index * 0.2,
            snap: { innerHTML: 1 },
            ease: "power2.out",
            onUpdate: function() {
                // Add blinking effect at certain intervals
                if (Math.round(this.targets()[0].innerHTML) % Math.floor(targetCount / 5) === 0) {
                    gsap.to(counter, {scale: 1.05, duration: 0.1, yoyo: true, repeat: 1});
                }
            }
        });
        
        // Animate the counter box with a slight delay
        gsap.from(counter.closest('.counter-box'), {
            scrollTrigger: {
                trigger: counter,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.1 * index
        });
    });
}

// Initialize back to top button
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Enhanced scroll animation with tricolor effect
        const tricolorDuration = 1.5;
        const tricolorColors = ["#FF9933", "#FFFFFF", "#138808"];
        
        // Create quick color transition for back-to-top button
        tricolorColors.forEach((color, index) => {
            gsap.to(backToTopButton, {
                backgroundColor: color,
                delay: (tricolorDuration / tricolorColors.length) * index,
                duration: tricolorDuration / tricolorColors.length / 2
            });
        });
        
        // Smooth scroll to top
        gsap.to(window, {
            duration: tricolorDuration,
            scrollTo: {
                y: 0,
                autoKill: false
            },
            ease: "power3.inOut"
        });
    });
}

// Initialize form validation with enhanced animations
function initFormValidation() {
    const forms = document.querySelectorAll('.involvement-form, .contact-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!this.checkValidity()) {
                event.stopPropagation();
                
                // Shake animation for invalid fields
                const invalidFields = this.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    gsap.to(field, {
                        x: [-10, 10, -10, 10, 0],
                        duration: 0.5,
                        backgroundColor: "rgba(255, 0, 0, 0.1)"
                    });
                    
                    // Reset background after animation
                    gsap.to(field, {
                        backgroundColor: "",
                        delay: 0.5,
                        duration: 0.3
                    });
                });
                
            } else {
                // Show success message
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                const formElements = this.elements;
                
                // Create a success animation sequence
                const successTl = gsap.timeline();
                
                // Button animation
                successTl.to(submitBtn, {
                    backgroundColor: "#138808", // Green from Indian flag
                    borderColor: "#138808",
                    color: "#FFF",
                    duration: 0.3
                })
                .to(submitBtn, {
                    width: "+=20",
                    duration: 0.2
                })
                .set(submitBtn, {
                    innerHTML: '<i class="fas fa-check me-2"></i> Submitted Successfully!',
                    disabled: true
                })
                .to(formElements, {
                    opacity: 0.7,
                    duration: 0.3
                });
                
                // Celebration animation - simulate Indian festival lights
                const formRect = form.getBoundingClientRect();
                const particles = 20;
                
                for (let i = 0; i < particles; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'success-particle';
                    particle.style.position = 'absolute';
                    particle.style.width = '8px';
                    particle.style.height = '8px';
                    particle.style.borderRadius = '50%';
                    particle.style.backgroundColor = i % 3 === 0 ? '#FF9933' : i % 3 === 1 ? '#FFFFFF' : '#138808';
                    particle.style.zIndex = '100';
                    form.appendChild(particle);
                    
                    const startX = formRect.width / 2;
                    const startY = submitBtn.offsetTop;
                    
                    gsap.set(particle, {
                        x: startX,
                        y: startY
                    });
                    
                    gsap.to(particle, {
                        x: startX + (Math.random() * 200 - 100),
                        y: startY + (Math.random() * -150),
                        opacity: 0,
                        duration: 1 + Math.random() * 1,
                        ease: "power2.out",
                        onComplete: function() {
                            form.removeChild(particle);
                        }
                    });
                }
                
                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    
                    // Reset button and form fields
                    gsap.to(submitBtn, {
                        backgroundColor: "",
                        borderColor: "",
                        width: "-=20",
                        duration: 0.3
                    });
                    
                    gsap.to(formElements, {
                        opacity: 1,
                        duration: 0.3
                    });
                    
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
            
            this.classList.add('was-validated');
        });
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link, .footer-links a, .hero-buttons a, .scroll-indicator a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#') && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('#navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    // Collapse navbar on mobile
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                    
                    // Tricolor smooth scroll animation
                    const scrollDuration = 1.2;
                    
                    // First part of scroll - Saffron
                    gsap.to(window, {
                        duration: scrollDuration / 3,
                        scrollTo: {
                            y: targetPosition / 3,
                            autoKill: false
                        },
                        ease: "power1.inOut"
                    });
                    
                    // Second part - White
                    gsap.to(window, {
                        duration: scrollDuration / 3,
                        delay: scrollDuration / 3,
                        scrollTo: {
                            y: targetPosition * 2/3,
                            autoKill: false
                        },
                        ease: "power1.inOut"
                    });
                    
                    // Final part - Green
                    gsap.to(window, {
                        duration: scrollDuration / 3,
                        delay: scrollDuration * 2/3,
                        scrollTo: {
                            y: targetPosition,
                            autoKill: false
                        },
                        ease: "power3.out",
                        onComplete: function() {
                            // Highlight section on arrival with a subtle flash
                            gsap.to(targetElement, {
                                backgroundColor: "rgba(255,255,255,0.1)",
                                duration: 0.2,
                                yoyo: true,
                                repeat: 1
                            });
                        }
                    });
                }
            }
        });
    });
}

// Initialize active menu highlighting based on scroll position
function initActiveMenuHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function highlightNavItem() {
        let current = '';
        const navbarHeight = document.querySelector('#navbar').offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + current) {
                link.classList.add('active');
                
                // Add subtle pulse animation to active link
                gsap.to(link, {
                    scale: 1.05,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    }
    
    // Run on page load
    highlightNavItem();
    
    // Run on scroll with throttling for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                highlightNavItem();
                scrollTimeout = null;
            }, 100);
        }
    });
    
    // Run after animations complete
    setTimeout(highlightNavItem, 1000);
} 