const sections = document.querySelectorAll('[data-action="section-nothero"]');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
});
sections.forEach(section => observer.observe(section));
