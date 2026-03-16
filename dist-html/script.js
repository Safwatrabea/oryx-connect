/**
 * Global JavaScript logic for Weoryx Connect HTML Clone
 */

// Initialize Lucide Icons globally
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
    
    setupNavbar();
    setupRevealHOC();
    setupFAQ();
    setupTabs();
    setupWordRotation();
});

function setupNavbar() {
    const header = document.getElementById('main-header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerCloseArea = document.getElementById('mobile-drawer-close-area');
    
    if (!header || !mobileMenuBtn || !mobileDrawer) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.background = 'rgba(13,13,18,0.92)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = '1px solid transparent';
        }
    });

    // Mobile menu toggle
    const toggleMenu = () => {
        const isClosed = mobileDrawer.style.opacity === '0' || mobileDrawer.style.opacity === '';
        const iconElement = mobileMenuBtn.querySelector('i');
        
        if (isClosed) {
            mobileDrawer.style.opacity = '1';
            mobileDrawer.style.pointerEvents = 'auto';
            mobileDrawer.querySelector('.drawer-content').style.transform = 'translateY(0)';
            if (iconElement) {
                iconElement.setAttribute('data-lucide', 'x');
                window.lucide.createIcons();
            }
        } else {
            mobileDrawer.style.opacity = '0';
            mobileDrawer.style.pointerEvents = 'none';
            mobileDrawer.querySelector('.drawer-content').style.transform = 'translateY(-8px)';
            if (iconElement) {
                iconElement.setAttribute('data-lucide', 'menu');
                window.lucide.createIcons();
            }
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    if (mobileDrawerCloseArea) {
        mobileDrawerCloseArea.addEventListener('click', toggleMenu);
    }
}

/**
 * Replicates the `<Reveal>` component logic from React
 */
function setupRevealHOC() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        revealElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
        // Set initial state based on data attributes or defaults
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.willChange = 'opacity, transform';
        
        const delay = el.getAttribute('data-delay') || '0';
        el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
        
        observer.observe(el);
    });
}

/**
 * Sets up FAQ accordions
 */
function setupFAQ() {
    const faqButtons = document.querySelectorAll('.faq-button');
    if (!faqButtons.length) return;

    faqButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find parent container
            const item = this.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const iconDiv = this.querySelector('.faq-icon-div');
            const icon = this.querySelector('i');
            
            // Check if currently active
            const isActive = item.classList.contains('active');
            
            // Close all others first (Accordion behavior)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.style.border = '1px solid rgba(255,255,255,0.06)';
                otherItem.style.background = 'rgba(255,255,255,0.03)';
                
                const otherContent = otherItem.querySelector('.faq-content');
                if (otherContent) otherContent.style.maxHeight = '0';
                
                const otherIconDiv = otherItem.querySelector('.faq-icon-div');
                if (otherIconDiv) {
                    otherIconDiv.style.background = 'rgba(255,255,255,0.05)';
                    otherIconDiv.style.color = 'rgba(255,255,255,0.40)';
                }
                
                const otherIcon = otherItem.querySelector('i');
                if (otherIcon) {
                    otherIcon.setAttribute('data-lucide', 'chevron-down');
                }
            });
            
            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                item.style.border = '1px solid rgba(139,92,246,0.25)';
                item.style.background = 'rgba(139,92,246,0.04)';
                
                content.style.maxHeight = '200px';
                
                iconDiv.style.background = 'rgba(139,92,246,0.20)';
                iconDiv.style.color = '#a78bfa';
                
                icon.setAttribute('data-lucide', 'chevron-up');
            }
            
            window.lucide.createIcons();
        });
    });
}

/**
 * Sets up the Solutions Tabs (توزيع ذكي, صندوق موحد, etc.)
 */
function setupTabs() {
    const tabButtons = document.querySelectorAll('.solution-tab-btn');
    const tabContents = document.querySelectorAll('.solution-tab-content');
    
    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Reset all buttons
            tabButtons.forEach(b => {
                b.style.border = '1px solid rgba(255,255,255,0.08)';
                b.style.background = 'transparent';
                b.style.color = 'rgba(255,255,255,0.50)';
            });
            
            // Activate clicked button
            btn.style.border = '1px solid rgba(139,92,246,0.40)';
            btn.style.background = 'rgba(139,92,246,0.15)';
            btn.style.color = '#c4b5fd';
            
            // Hide all content
            tabContents.forEach(c => {
                c.style.display = 'none';
            });
            
            // Show corresponding content
            if (tabContents[index]) {
                tabContents[index].style.display = 'grid';
            }
        });
    });
}

/**
 * Sets up rotating text in Hero section
 */
function setupWordRotation() {
    const span = document.getElementById('rotating-word');
    if (!span) return;
    
    const words = ['واتساب', 'فيسبوك', 'تيليغرام', 'إنستغرام'];
    let idx = 0;
    
    setInterval(() => {
        // Fade out
        span.style.opacity = '0';
        span.style.transform = 'translateY(8px)';
        
        setTimeout(() => {
            idx = (idx + 1) % words.length;
            span.textContent = words[idx];
            
            // Fade in
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 300); // Wait for fade out to complete
    }, 2200);
}
