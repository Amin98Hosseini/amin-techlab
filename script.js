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
