/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
   window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ============================================
   MENU MOBILE
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ============================================
   ACTIVE LINK ON SCROLL
   ============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

/* ============================================
   THEME TOGGLE (DARK / LIGHT)
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const text = typewriterElement.dataset.text || typewriterElement.textContent;
    typewriterElement.textContent = '';
    let i = 0;

    const type = () => {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    };

    setTimeout(type, 500);
}

/* ============================================
   ANIMATION DES BARRES DE PROGRESSION
   ============================================ */
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50) {
            const width = bar.dataset.width || '0';
            bar.style.width = width + '%';
        }
    });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

/* ============================================
   BACK TO TOP
   ============================================ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   FORMULAIRE DE CONTACT
   ============================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:njakaniaina000333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        window.location.href = mailtoLink;

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Message prêt à envoyer !';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

/* ============================================
   ANIMATIONS D'APPARITION AU SCROLL
   ============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .language-card, .timeline-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ============================================
   MESSAGE CONSOLE
   ============================================ */
console.log('%c👋 Portfolio de Njakaniaina ANDRIAMALALA', 'font-size: 16px; font-weight: bold; color: #6366f1;');
console.log('%c📧 njakaniaina000333@gmail.com', 'color: #8b5cf6;');
console.log('%c📞 038 56 786 57', 'color: #ec4899;');
console.log('%c🐙 github.com/njakaniaina', 'color: #10b981;');