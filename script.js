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
    threshold: 0,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

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

// Hero section is now visible immediately without waiting for full page load

// Days counter - from December 13, 2023
(function() {
    const startDate = new Date(2023, 11, 13); // December 13, 2023
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const counter = document.getElementById('daysCount');
    if (counter) {
        counter.textContent = diffDays;
    }
})();

// Animate modern stat cards
function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.85;
        
        if (isInViewport && !card.classList.contains('animated')) {
            card.classList.add('animated');
            
            const numberElement = card.querySelector('.stat-number-modern');
            if (numberElement) {
                const target = parseFloat(numberElement.getAttribute('data-target'));
                const suffix = numberElement.getAttribute('data-suffix') || '';
                const isDecimal = target % 1 !== 0;
                
                let currentNumber = 0;
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                const stepTime = duration / steps;
                
                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= target) {
                        currentNumber = target;
                        clearInterval(counter);
                    }
                    
                    if (isDecimal) {
                        numberElement.textContent = currentNumber.toFixed(2).replace('.', ',') + suffix;
                    } else {
                        numberElement.textContent = Math.round(currentNumber) + suffix;
                    }
                }, stepTime);
            }
        }
    });
}

// Run on scroll and load
window.addEventListener('scroll', animateStatCards);
window.addEventListener('load', animateStatCards);

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

// Christmas Popup - shows from December 17 to December 26
(function() {
    const popup = document.getElementById('christmasPopup');
    if (!popup) return;
    
    const today = new Date();
    const year = today.getFullYear();
    const startDate = new Date(year, 11, 17); // December 17
    const endDate = new Date(year, 11, 26, 23, 59, 59); // December 26, end of day
    
    // Check if we're in the Christmas period
    const isChristmasPeriod = today >= startDate && today <= endDate;
    
    // Check if user already closed popup today
    const lastClosed = localStorage.getItem('christmasPopupClosed');
    const todayString = today.toDateString();
    const alreadyClosedToday = lastClosed === todayString;
    
    if (isChristmasPeriod && !alreadyClosedToday) {
        // Show popup after a short delay
        setTimeout(() => {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 1000);
    }
    
    // Close popup function
    function closePopup() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        localStorage.setItem('christmasPopupClosed', todayString);
    }
    
    // Close button
    const closeBtn = popup.querySelector('.popup-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }
    
    // Close on overlay click
    const overlay = popup.querySelector('.popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', closePopup);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
})();
