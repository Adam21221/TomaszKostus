// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        successMessage.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Video placeholder click handling
document.querySelectorAll('.video-placeholder').forEach(video => {
    video.addEventListener('click', function() {
        alert('Odtwarzacz wideo zostanie uruchomiony. Możesz zintegrować rzeczywiste filmy z YouTube lub innej platformy.');
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth fade-in for hero section
window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    
    if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1)';
    }
    
    if (heroText) {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateX(0)';
    }
});

// Animate circular progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.circular-progress');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const circle = bar.querySelector('.progress-ring-circle');
        const numberElement = bar.querySelector('.stat-number');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        // Check if element is in viewport
        const rect = bar.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        
        if (isInViewport && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            
            // Animate the circle
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 100);
            
            // Animate the number
            const finalText = numberElement.textContent;
            const isPercentage = finalText.includes('%');
            const finalNumber = parseFloat(finalText.replace(/[^\d.,]/g, '').replace(',', '.'));
            
            if (!isNaN(finalNumber)) {
                let currentNumber = 0;
                const increment = finalNumber / 100;
                const duration = 2000;
                const stepTime = duration / 100;
                
                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        currentNumber = finalNumber;
                        clearInterval(counter);
                    }
                    
                    if (isPercentage) {
                        numberElement.textContent = currentNumber.toFixed(1).replace('.', ',') + '%';
                    } else {
                        numberElement.textContent = Math.round(currentNumber);
                    }
                }, stepTime);
            }
        }
    });
}

// Run on scroll and load
window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

