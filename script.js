// Optional: Add interactivity later
console.log("Portfolio loaded!");

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect for subtitle
document.addEventListener("DOMContentLoaded", function() {
  new Typed("#subtitle", {
    strings: [
      "Aspiring Frontend Developer",
      "Creative Media Enthusiast",
      "Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
});