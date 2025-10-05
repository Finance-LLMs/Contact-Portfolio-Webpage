// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initializeAnimations();
    initializeContactInteractions();
    initializeImageErrorHandling();
    initializeSmoothScrolling();
});

// Initialize animations
function initializeAnimations() {
    // Add stagger animation to team cards
    const teamCards = document.querySelectorAll('.team-card');
    
    // Intersection Observer for scroll animations
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
    
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize contact interactions
function initializeContactInteractions() {
    // Add click to copy functionality for email and phone
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                let textToCopy = '';
                if (link.href.startsWith('mailto:')) {
                    textToCopy = link.href.replace('mailto:', '');
                } else if (link.href.startsWith('tel:')) {
                    textToCopy = link.textContent;
                }
                
                if (textToCopy) {
                    copyToClipboard(textToCopy);
                    showCopyNotification(item, 'Copied!');
                }
            });
            
            // Add hover effect
            item.addEventListener('mouseenter', function() {
                item.style.cursor = 'pointer';
                item.title = 'Click to copy';
            });
        }
    });
}

// Copy to clipboard function
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Show copy notification
function showCopyNotification(element, message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: absolute;
        background: #4CAF50;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        transform: translateY(-100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    element.style.position = 'relative';
    element.appendChild(notification);
    
    // Position the notification
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// Initialize image error handling
function initializeImageErrorHandling() {
    const memberPhotos = document.querySelectorAll('.member-photo');
    
    memberPhotos.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder content
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #f8f9fa, #e9ecef);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                color: #adb5bd;
            `;
            
            // Get the name from alt attribute
            const name = this.alt || 'User';
            const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
            
            placeholder.innerHTML = `<i class="fas fa-user" style="font-size: 4rem;"></i>`;
            
            // Replace the image with placeholder
            this.style.display = 'none';
            this.parentNode.appendChild(placeholder);
        });
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    // Add smooth scrolling to internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add parallax effect to header
function initializeParallaxEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (header) {
            header.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add typing animation to title
function initializeTypingAnimation() {
    const title = document.querySelector('.main-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid white';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Add floating animation to cards
function initializeFloatingAnimation() {
    const cards = document.querySelectorAll('.team-card');
    
    cards.forEach((card, index) => {
        // Add slight floating animation
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('floating');
    });
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add loading state management
function showLoadingState() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
}

function hideLoadingState() {
    document.body.style.opacity = '1';
}

// Initialize everything when page loads
window.addEventListener('load', function() {
    hideLoadingState();
    initializeParallaxEffect();
    // Uncomment the line below if you want typing animation
    // initializeTypingAnimation();
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .floating {
        animation: floating 6s ease-in-out infinite;
    }
`;
document.head.appendChild(style);