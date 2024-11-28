// Particles.js configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
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
    move: {
      enable: true,
      speed: 1,
      random: true,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
    },
    modes: {
      grab: { distance: 250 },
      repulse: { distance: 400, duration: 0.4 },
    },
  },
  retina_detect: true,
});

// Custom cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
  cursor.style.transform = "scale(0.8) translate(-50%, -50%)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "scale(1) translate(-50%, -50%)";
});
