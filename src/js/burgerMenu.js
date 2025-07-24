import spriteUrl from '/img/sprite.svg';
const iconBurger = `${spriteUrl}#icon-burger`;
const iconClose = `${spriteUrl}#icon-close`;

const burgerBtn = document.querySelector('[data-action="toggle-menu"]');
const mobileMenu = document.querySelector('[data-action="mobile-menu"]');
const useEl = document.querySelector('[data-action="use-burger"]');


burgerBtn.addEventListener('click', e => {
  const isBurger = useEl.getAttribute('href') === iconBurger;
  useEl.setAttribute('href', isBurger ? iconClose : iconBurger);

  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
});

mobileMenu.querySelectorAll('a[href^="#"]').forEach(link =>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    useEl.setAttribute('href', iconBurger);
    burgerBtn.dataset.icon = 'burger';
  });
});
