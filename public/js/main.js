// ===================================
// Initialize EmailJS
// ===================================
// EmailJS Configuration - Connected to diaaeddin.me@gmail.com
const EMAILJS_PUBLIC_KEY = 'VRgFHVT2r9TH_faja';
const EMAILJS_SERVICE_ID = 'service_hiwpo9l';
const EMAILJS_TEMPLATE_ID = 'template_ekeykgc';

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('✅ EmailJS initialized successfully!');
    } else {
        console.error('❌ EmailJS SDK not loaded');
    }
})();

// ===================================
// Navigation Functionality
// ===================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Testimonials Slider
// ===================================
const testimonialTrack = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const testimonialCards = document.querySelectorAll('.testimonial-card');

let currentTestimonial = 0;
const totalTestimonials = testimonialCards.length;

// Only show slider controls if there are multiple testimonials
if (totalTestimonials <= 3) {
    const controls = document.querySelector('.testimonial-controls');
    if (controls) controls.style.display = 'none';
}

function updateTestimonialSlider() {
    // This is a simple implementation
    // For a more complex slider, you might want to use a library like Swiper.js
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    let itemsToShow = 3;
    if (isMobile) itemsToShow = 1;
    else if (isTablet) itemsToShow = 2;
    
    // Simple auto-rotation every 5 seconds
    setInterval(() => {
        if (window.innerWidth < 768) {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            testimonialCards.forEach((card, index) => {
                if (index === currentTestimonial) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }, 5000);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonialSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonialSlider();
    });
}

// ===================================
// Contact Form Handling with EmailJS
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });
    
    // Name validation
    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Message validation
    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;
    
    try {
        // Check if EmailJS is configured
        if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
            // For demo purposes - simulate email sending
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showFormMessage('success', 'Thank you for your message! We will contact you as soon as possible. (Demo Mode - EmailJS not configured)');
            contactForm.reset();
        } else {
            // Send email using EmailJS
            const templateParams = {
                to_email: 'diaaeddin.me@gmail.com',
                from_name: name,
                from_email: email,
                phone: phone || 'Not provided',
                message: message,
                reply_to: email
            };
            
            console.log('Sending email with params:', templateParams);
            
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            console.log('EmailJS Response:', response);
            
            if (response.status === 200) {
                showFormMessage('success', '✅ Thank you for your message! We will contact you as soon as possible.');
                contactForm.reset();
            } else {
                throw new Error('Failed to send email');
            }
        }
    } catch (error) {
        console.error('❌ EmailJS Error:', error);
        console.error('Error details:', error.text || error.message);
        showFormMessage('error', 'Something went wrong. Please try again later or contact us directly.');
    } finally {
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function showFormMessage(type, message) {
    formMessage.className = 'form-message ' + type;
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===================================
// Portfolio Modal (Optional)
// ===================================
function openPortfolioModal(projectId) {
    // You can implement a modal here to show more project details
    // For now, we'll just log to console
    console.log('Opening portfolio modal for:', projectId);
    
    // Example: You could show an alert or create a custom modal
    alert('Portfolio details coming soon! You can customize this to show a modal with full project information.');
}

// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
}

// ===================================
// Dynamic Year in Footer
// ===================================
const updateCopyrightYear = () => {
    const yearElements = document.querySelectorAll('.copyright');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = element.textContent.replace('2025', currentYear);
    });
};

updateCopyrightYear();

// ===================================
// Form Input Animations
// ===================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// Lazy Loading Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavLink, 100);
window.addEventListener('scroll', debouncedHighlight);

// ===================================
// Console Message
// ===================================
console.log('%c👋 Welkom bij Al-Noor Marketing!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cOntworpen en ontwikkeld door Diaaeddin', 'font-size: 14px; color: #64748b;');
console.log('%c\nInterested in working together? Contact me at diaaeddin.me@gmail.com', 'font-size: 12px; color: #64748b;');
