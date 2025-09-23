tsParticles.load("tsparticles", {
  background: {
    color: "#0d1117"
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 200, links: { opacity: 0.6 } },
      push: { quantity: 3 }
    }
  },
  particles: {
    number: { value: 120, density: { enable: true, area: 1000 } },
    color: { value: ["#00d4ff", "#00ffea", "#ffffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.7,
      random: true,
      animation: { enable: true, speed: 1, minimumValue: 0.3 }
    },
    size: {
      value: { min: 1, max: 3 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      random: false,
      straight: false,
      outModes: "out"
    }
  },
  detectRetina: true
});
