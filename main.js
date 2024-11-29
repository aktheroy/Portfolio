// Function to toggle the responsive class for the navigation bar
function myFunction() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Scroll event listener to highlight the active navigation link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".content-section");
  const navLinks = document.querySelectorAll(".topnav a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach(link => link.classList.remove("active")); // Remove active class from all links
      navLinks[index].classList.add("active"); // Add active class to the current link
    }
  });
});

// Click event listener to synchronize scroll and active state
document.querySelectorAll(".topnav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default anchor behavior
    event.preventDefault();

    // Scroll to the target section smoothly
    const targetId = link.getAttribute("href").slice(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update active state immediately
    document.querySelectorAll(".topnav a").forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});


// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
