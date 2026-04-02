// Initialize Lucide Icons
lucide.createIcons();

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const form = document.getElementById('contactForm');
const particlesContainer = document.getElementById('particles-container');

// Sticky Header & Scroll Events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenu.classList.contains('active') ? 'x' : 'menu';
        // Re-render icon
        mobileMenuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });
}

// Subtle Airflow Animation Generator
function createAirflowParticles() {
    const particleCount = 20; // Subtle amount
    
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position across width
    const leftPos = Math.random() * 100;
    
    // Random animation duration between 8s and 15s
    const animDuration = 8 + Math.random() * 7;
    
    // Random delay
    const delay = Math.random() * 10;
    
    // Random opacity
    const opacity = 0.3 + Math.random() * 0.4;
    
    // Random size modifier
    const sizeMod = 0.5 + Math.random();
    
    particle.style.left = `${leftPos}vw`;
    particle.style.animationDuration = `${animDuration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity.toString();
    particle.style.transform = `scale(${sizeMod})`;
    
    particlesContainer.appendChild(particle);
}

// Initialize particles
createAirflowParticles();

// Form Submission handling (Mock)
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        // Simulating loading state
        btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Sending Request...`;
        lucide.createIcons();
        btn.disabled = true;
        
        // Mock API Call Delay
        setTimeout(() => {
            btn.innerHTML = `<i data-lucide="check-circle"></i> Request Received!`;
            lucide.createIcons();
            btn.classList.add('btn-success');
            btn.style.backgroundColor = 'var(--accent)';
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.classList.remove('btn-success');
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}

// Spin Animation Class for icons
const style = document.createElement('style');
style.textContent = `
    .spin {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
