const burgerBtn = document.querySelector('[data-action="toggle-menu"]');
const mobileMenu = document.querySelector('.mobile-menu');
const useEl = burgerBtn.querySelector('use');

const iconBurger = '../img/sprite.svg#icon-burger';
const iconClose = '../img/sprite.svg#icon-close';


burgerBtn.addEventListener('click', e => {
  const isBurger = useEl.getAttribute('href') === iconBurger;
  useEl.setAttribute('href', isBurger ? iconClose : iconBurger);

  mobileMenu.classList.toggle('active');
});

