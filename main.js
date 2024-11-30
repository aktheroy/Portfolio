// Function to toggle the responsive class for the navigation bar
function myFunction() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive"); // Toggles the "responsive" class
}

// Scroll event listener to highlight the active navigation link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".topnav a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      // Update active class based on the section in view
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll(".topnav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default jump-to behavior
    event.preventDefault();

    // Scroll to the target section smoothly
    const targetId = link.getAttribute("href").slice(1); // Extract ID from href
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Update active state immediately on click
    document
      .querySelectorAll(".topnav a")
      .forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Typing Effect Function
function typeEffect(element, words, delay = 200) {
  let wordIndex = 0; // Index of the current word
  let charIndex = 0; // Index of the current character in the word
  let isDeleting = false; // Flag to indicate whether characters are being deleted

  function type() {
    const currentWord = words[wordIndex]; // Current target word
    const visibleText = isDeleting
      ? currentWord.substring(0, charIndex--) // Reduce characters when deleting
      : currentWord.substring(0, charIndex++); // Add characters when typing

    element.textContent = visibleText; // Update the visible text

    // Typing and deleting speeds
    let speed = isDeleting ? 60 : 100;

    // When typing completes
    if (!isDeleting && charIndex === currentWord.length + 1) {
      speed = delay; // Pause at the end of the word
      isDeleting = true; // Start deleting next
    }

    // When deleting completes
    else if (isDeleting && charIndex === 0) {
      isDeleting = false; // Start typing the next word
      wordIndex = (wordIndex + 1) % words.length; // Loop through words
    }

    setTimeout(type, speed); // Call the function again after the set speed
  }

  type(); // Start the typing effect
}

// Initialize the typing effect
document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.querySelector(".dynamic-text");
  typeEffect(dynamicText, ["Machine Learning", "Data Science", "LLMOps"], 2000);
});

// Initialize Particles.js for background effect
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
