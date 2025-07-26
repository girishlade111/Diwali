// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 153, 51, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 153, 51, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.tradition-card, .timeline-item, .day-card, .recipe-card, .gallery-item');
    animateElements.forEach(el => observer.observe(el));
});

// Add CSS for animation classes
const style = document.createElement('style');
style.textContent = `
    .tradition-card,
    .timeline-item,
    .day-card,
    .recipe-card,
    .gallery-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .tradition-card.animate,
    .timeline-item.animate,
    .day-card.animate,
    .recipe-card.animate,
    .gallery-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .timeline-item:nth-child(even).animate {
        animation: slideInRight 0.6s ease forwards;
    }
    
    .timeline-item:nth-child(odd).animate {
        animation: slideInLeft 0.6s ease forwards;
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Diya lighting effect on click
document.addEventListener('DOMContentLoaded', () => {
    const diyas = document.querySelectorAll('.diya');
    
    diyas.forEach(diya => {
        diya.addEventListener('click', () => {
            diya.style.animation = 'none';
            diya.style.transform = 'scale(1.2)';
            diya.style.boxShadow = '0 0 20px var(--gold)';
            
            setTimeout(() => {
                diya.style.animation = 'float 6s ease-in-out infinite';
                diya.style.transform = '';
                diya.style.boxShadow = '';
            }, 1000);
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-diyas, .rangoli-pattern');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Random sparkle effect
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--gold);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnimation 2s ease-out forwards;
    `;
    
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create sparkles periodically
setInterval(createSparkle, 3000);

// Gallery item click effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(1.1)';
        item.style.zIndex = '10';
        
        setTimeout(() => {
            item.style.transform = '';
            item.style.zIndex = '';
        }, 300);
    });
});

// Recipe card hover sound effect (visual feedback)
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = document.createElement('div');
        icon.innerHTML = '✨';
        icon.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1.5rem;
            animation: fadeInOut 1s ease-in-out;
            pointer-events: none;
        `;
        card.style.position = 'relative';
        card.appendChild(icon);
        
        setTimeout(() => {
            icon.remove();
        }, 1000);
    });
});

// Add fadeInOut animation
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(fadeStyle);

// Tradition card interactive effect
document.querySelectorAll('.tradition-card').forEach(card => {
    card.addEventListener('click', () => {
        const icon = card.querySelector('.card-icon');
        icon.style.animation = 'none';
        icon.style.transform = 'scale(1.3) rotate(720deg)';
        
        setTimeout(() => {
            icon.style.animation = '';
            icon.style.transform = '';
        }, 600);
    });
});

// CTA button click effect
document.querySelector('.cta-button').addEventListener('click', () => {
    const button = document.querySelector('.cta-button');
    button.style.animation = 'pulse 0.6s ease-in-out';
    
    setTimeout(() => {
        button.style.animation = '';
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    }, 600);
});

// Add pulse animation for CTA button
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(pulseStyle);

// Dynamic greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingElement = document.querySelector('.hero-description');
    
    let greeting;
    if (hour < 12) {
        greeting = "May this morning bring you the light of prosperity and joy";
    } else if (hour < 17) {
        greeting = "May this afternoon illuminate your path with happiness";
    } else {
        greeting = "May this evening sparkle with the blessings of Diwali";
    }
    
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// Update greeting on page load
document.addEventListener('DOMContentLoaded', updateGreeting);

// Add floating animation to social links
document.querySelectorAll('.social-links a').forEach((link, index) => {
    link.style.animationDelay = `${index * 0.2}s`;
    link.classList.add('float-social');
});

const socialStyle = document.createElement('style');
socialStyle.textContent = `
    .float-social {
        animation: floatSocial 3s ease-in-out infinite;
    }
    
    @keyframes floatSocial {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(socialStyle);

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 70px;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--gradient-gold);
    z-index: 1001;
    transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Diwali Themed Cursor
document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'diwali-cursor';
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .tradition-card, .recipe-card, .gallery-item, .nav-menu li');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});

// Floating Akash Candil Components
document.addEventListener('DOMContentLoaded', () => {
    // Create container for akash candils
    const candilContainer = document.createElement('div');
    candilContainer.className = 'akash-candil-container';
    document.body.appendChild(candilContainer);

    // Function to create a single akash candil
    function createAkashCandil() {
        const candil = document.createElement('div');
        candil.className = 'akash-candil';
        
        // Add random variations
        const variations = ['small', 'large', ''];
        const colorVariants = ['variant-1', 'variant-2', 'variant-3', ''];
        
        const sizeVariation = variations[Math.floor(Math.random() * variations.length)];
        const colorVariation = colorVariants[Math.floor(Math.random() * colorVariants.length)];
        
        if (sizeVariation) candil.classList.add(sizeVariation);
        if (colorVariation) candil.classList.add(colorVariation);

        // Create candil structure
        candil.innerHTML = `
            <div class="candil-body">
                <div class="candil-flame"></div>
            </div>
            <div class="candil-string"></div>
        `;

        // Random horizontal position
        candil.style.left = Math.random() * 100 + '%';
        
        // Random animation delay
        candil.style.animationDelay = Math.random() * 5 + 's';

        candilContainer.appendChild(candil);

        // Remove candil after animation completes
        setTimeout(() => {
            if (candil.parentNode) {
                candil.parentNode.removeChild(candil);
            }
        }, 20000);
    }

    // Create akash candils periodically
    function startAkashCandilAnimation() {
        createAkashCandil();
        
        // Random interval between 2-5 seconds
        const nextInterval = Math.random() * 3000 + 2000;
        setTimeout(startAkashCandilAnimation, nextInterval);
    }

    // Start the animation
    startAkashCandilAnimation();

    // Create initial batch of candils
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createAkashCandil();
        }, i * 1000);
    }
});

// Enhanced cursor trail effect
document.addEventListener('DOMContentLoaded', () => {
    const trailElements = [];
    const maxTrailElements = 8;

    // Create trail elements
    for (let i = 0; i < maxTrailElements; i++) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: ${12 - i}px;
            height: ${12 - i}px;
            background: var(--gold);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: ${0.8 - (i * 0.1)};
            transition: all 0.1s ease;
            box-shadow: 0 0 ${8 - i}px var(--gold);
        `;
        document.body.appendChild(trail);
        trailElements.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let trailX = [], trailY = [];

    // Initialize trail positions
    for (let i = 0; i < maxTrailElements; i++) {
        trailX[i] = 0;
        trailY[i] = 0;
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animate trail
    function animateTrail() {
        trailX[0] = mouseX;
        trailY[0] = mouseY;

        for (let i = 1; i < maxTrailElements; i++) {
            trailX[i] += (trailX[i - 1] - trailX[i]) * 0.3;
            trailY[i] += (trailY[i - 1] - trailY[i]) * 0.3;

            trailElements[i].style.left = trailX[i] - (6 - i/2) + 'px';
            trailElements[i].style.top = trailY[i] - (6 - i/2) + 'px';
        }

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
});

// Special cursor effects for different sections
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.diwali-cursor');
    
    // Hero section - larger cursor with more glow
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.3)';
            cursor.style.boxShadow = '0 0 20px var(--gold), 0 0 40px rgba(255, 215, 0, 0.7)';
        });
        
        heroSection.addEventListener('mouseleave', () => {
            cursor.style.transform = '';
            cursor.style.boxShadow = '0 0 10px var(--gold), 0 0 20px rgba(255, 215, 0, 0.5)';
        });
    }

    // Traditions section - saffron colored cursor
    const traditionsSection = document.querySelector('.traditions');
    if (traditionsSection) {
        traditionsSection.addEventListener('mouseenter', () => {
            cursor.style.background = 'var(--saffron-primary)';
            cursor.style.boxShadow = '0 0 15px var(--saffron-primary), 0 0 30px rgba(255, 153, 51, 0.6)';
        });
        
        traditionsSection.addEventListener('mouseleave', () => {
            cursor.style.background = 'var(--gold)';
            cursor.style.boxShadow = '0 0 10px var(--gold), 0 0 20px rgba(255, 215, 0, 0.5)';
        });
    }
});

// Diwali Welcome Message Window Functionality
document.addEventListener('DOMContentLoaded', () => {
    const welcomeWindow = document.getElementById('diwali-welcome-window');
    const minimizedWindow = document.getElementById('minimized-welcome');
    const minimizeBtn = document.getElementById('minimize-btn');
    const closeBtn = document.getElementById('close-btn');
    const restoreBtn = document.getElementById('restore-btn');

    // Show welcome window on page load
    setTimeout(() => {
        welcomeWindow.style.display = 'block';
    }, 1000);

    // Minimize functionality
    minimizeBtn.addEventListener('click', () => {
        welcomeWindow.classList.add('minimizing');
        
        setTimeout(() => {
            welcomeWindow.style.display = 'none';
            minimizedWindow.style.display = 'block';
            welcomeWindow.classList.remove('minimizing');
        }, 500);
    });

    // Close functionality
    closeBtn.addEventListener('click', () => {
        welcomeWindow.classList.add('minimizing');
        
        setTimeout(() => {
            welcomeWindow.style.display = 'none';
            welcomeWindow.classList.remove('minimizing');
        }, 500);
    });

    // Restore functionality
    restoreBtn.addEventListener('click', () => {
        minimizedWindow.style.display = 'none';
        welcomeWindow.style.display = 'block';
        welcomeWindow.classList.add('restoring');
        
        setTimeout(() => {
            welcomeWindow.classList.remove('restoring');
        }, 500);
    });

    // Click on minimized window to restore
    minimizedWindow.addEventListener('click', () => {
        minimizedWindow.style.display = 'none';
        welcomeWindow.style.display = 'block';
        welcomeWindow.classList.add('restoring');
        
        setTimeout(() => {
            welcomeWindow.classList.remove('restoring');
        }, 500);
    });

    // Add sparkle effect to welcome window
    function addWelcomeSparkles() {
        const welcomeContent = document.querySelector('.welcome-content');
        if (!welcomeContent) return;

        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: var(--gold);
            border-radius: 50%;
            pointer-events: none;
            animation: welcomeSparkle 2s ease-out forwards;
        `;
        
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        welcomeContent.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }

    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes welcomeSparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1) rotate(180deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Create sparkles periodically when window is visible
    setInterval(() => {
        if (welcomeWindow.style.display !== 'none') {
            addWelcomeSparkles();
        }
    }, 1500);
});

console.log('🪔 Diwali website loaded successfully! May the festival of lights bring you joy and prosperity! 🪔');