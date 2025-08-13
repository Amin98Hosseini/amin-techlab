// Smooth scroll for navigation links
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
                duration: 1000
            });
        }
    });
});

// Scroll animation for sections
const sections = document.querySelectorAll("section");

function revealSection() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSection);
revealSection();
