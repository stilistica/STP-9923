const sections = document.querySelectorAll('section:not(.hero)');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
});
sections.forEach(section => observer.observe(section));
