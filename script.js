const revealTargets = document.querySelectorAll(".card, .track-card, .timeline-item, .faq-item, .cta-panel");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.16 });

revealTargets.forEach((node) => {
  node.classList.add("reveal");
  observer.observe(node);
});
