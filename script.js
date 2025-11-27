/* -----------------------------------
   Mobile Navigation Toggle
----------------------------------- */
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

/* -----------------------------------
   Reveal Animation Using IntersectionObserver
----------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

const revealOptions = {
    threshold: 0.1
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

/* -----------------------------------
   Subtle Parallax for Hero Image
----------------------------------- */
const heroParallax = document.querySelector("[data-parallax]");

window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.03;
    heroParallax.style.transform = `translateY(${offset}px)`;
});
