// Scroll animation for sections
const sections = document.querySelectorAll("section");
let skillsAnimated = false; // Flag to track if skills have been animated

function revealSection() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
            sec.classList.add("show");
            
            // Animate progress bars in skills section only once
            if (sec.id === 'skills' && !skillsAnimated) {
                animateProgressBars();
                skillsAnimated = true; // Mark as animated
            }
        }
    });
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 100); // Stagger the animations
    });
}

// Initialize animations
window.addEventListener("scroll", revealSection);
revealSection();

// Smooth scrolling for navigation links
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
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

// Accordion functionality
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    
    // Close all other accordion items
    document.querySelectorAll('.accordion-content').forEach(item => {
        if (item !== content) {
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current accordion item
    content.classList.toggle('active');
    header.classList.toggle('active');
}
