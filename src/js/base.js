const sections = document.querySelectorAll('[data-action="section-nothero"]');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.setAttribute('data-visible', 'true');
      obs.unobserve(entry.target);
    }
  });
});
sections.forEach(section => observer.observe(section));
