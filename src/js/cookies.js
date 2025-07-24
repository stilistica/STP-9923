window.addEventListener('DOMContentLoaded', ()=>{
  if(!localStorage.getItem('cookiesAnswered')){
    const cookies = document.querySelector('[data-action="cookies"]');
    cookies.classList.add('active');
    document.body.classList.add('no-scroll');
  }
});

document.querySelector('[data-action="accept-cookies"]').addEventListener('click', ()=>{
  localStorage.setItem('cookiesAnswered', 'accepted');
  document.querySelector('[data-action="cookies"]').classList.remove('active');
  document.body.classList.remove('no-scroll');
});

document.querySelector('[data-action="decline-cookies"]').addEventListener('click', ()=>{
  localStorage.setItem('cookiesAnswered', 'declined');
  document.querySelector('[data-action="cookies"]').classList.remove('active');
  document.body.classList.remove('no-scroll');
});