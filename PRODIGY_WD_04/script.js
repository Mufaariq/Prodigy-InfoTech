// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal Sections on Scroll
function revealSections() {
    const reveals = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSections);

// Typing Animation for the Tagline
const taglineElement = document.querySelector('.typing-effect');
const taglineText = "A frontend Developer specialize in Developing Intuitive and Engaging Web Interfaces and Transforming Designs into Interactive Web Experiences.";
let taglineIndex = 0;
const typingSpeed = 80;

function typeTagline() {
    if (taglineIndex < taglineText.length) {
        taglineElement.textContent += taglineText.charAt(taglineIndex);
        taglineIndex++;
        setTimeout(typeTagline, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', typeTagline);

// Basic Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
const bodyHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator() {
    const scrollPercentage = (window.scrollY / bodyHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateScrollIndicator);

// Mobile Navigation Toggle
const hamburger = document.querySelector('.nav-content');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(event) {
    if (event.target.classList.contains('hamburger')) {
        event.target.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
});


const navContent = document.querySelector('.nav-content');
const hamburgerDiv = document.createElement('div');
hamburgerDiv.classList.add('hamburger');
hamburgerDiv.innerHTML = `
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
`;
navContent.appendChild(hamburgerDiv);