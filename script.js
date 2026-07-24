// ===========================
// AOS Animation
// ===========================

AOS.init({
    duration: 1000,
    once: true
});

// ===========================
// Typing Animation
// ===========================

const text = [
    "Full Stack Developer",
    "Frontend Developer",
    "Future AI/ML Engineer",
    "Computer Engineering Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);

    }

})();

// ===========================
// Active Navbar
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===========================
// Cursor Glow
// ===========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// ===========================
// Navbar Background
// ===========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ===========================
// Hero Image Animation
// ===========================

const image = document.querySelector(".image-card");

setInterval(() => {

    image.classList.toggle("animate");

}, 2500);

// ===========================
// Button Ripple Effect
// ===========================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ===========================
// Console Message
// ===========================

console.log("%cWelcome To Raj Dewarde Portfolio 🚀",
"color:#00E5FF;font-size:22px;font-weight:bold;");
