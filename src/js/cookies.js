window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookiesAnswered')) {
    const cookies = document.querySelector('[data-action="cookies"]');
    cookies.setAttribute('data-active', 'true');
    document.body.setAttribute('data-scroll-locked', 'true');
  }
});

document.querySelector('[data-action="accept-cookies"]').addEventListener('click', () => {
  localStorage.setItem('cookiesAnswered', 'accepted');
  document.querySelector('[data-action="cookies"]').setAttribute('data-active', 'false');
  document.body.setAttribute('data-scroll-locked', 'false');
});

document.querySelector('[data-action="decline-cookies"]').addEventListener('click', () => {
  localStorage.setItem('cookiesAnswered', 'declined');
  document.querySelector('[data-action="cookies"]').setAttribute('data-active', 'false');
  document.body.setAttribute('data-scroll-locked', 'false');
});
