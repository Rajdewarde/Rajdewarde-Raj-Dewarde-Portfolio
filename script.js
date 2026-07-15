// =======================
// Typing Effect
// =======================

const text = [
    "Full Stack Learner",
    "Frontend Developer",
    "Future AI/ML Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typing = document.querySelector(".hero-content h3");

function type() {

    if (index >= text.length) index = 0;

    currentText = text[index];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, charIndex++);
    } else {
        typing.textContent = currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();


// =======================
// Scroll Progress Bar
// =======================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "5px";
progress.style.background = "#38BDF8";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    let total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progressWidth =
        (window.scrollY / total) * 100;

    progress.style.width = progressWidth + "%";

});


// =======================
// Active Navbar
// =======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =======================
// Scroll Reveal Animation
// =======================

const cards = document.querySelectorAll(
    ".about-card,.skill-card,.project-card,.contact-item");

function reveal() {

    cards.forEach(card => {

        const windowHeight = window.innerHeight;

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);

reveal();


// =======================
// Back To Top Button
// =======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38BDF8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};