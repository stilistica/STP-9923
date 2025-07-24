import spriteUrl from '/img/sprite.svg';
const iconBurger = `${spriteUrl}#icon-burger`;
const iconClose = `${spriteUrl}#icon-close`;

const burgerBtn = document.querySelector('[data-action="toggle-menu"]');
const mobileMenu = document.querySelector('[data-action="mobile-menu"]');
const useEl = document.querySelector('[data-action="use-burger"]');

burgerBtn.addEventListener('click', e => {
  const isBurger = useEl.getAttribute('href') === iconBurger;
  useEl.setAttribute('href', isBurger ? iconClose : iconBurger);

  const isActive = mobileMenu.getAttribute('data-active') === 'true';
  mobileMenu.setAttribute('data-active', String(!isActive));
  document.body.setAttribute('data-scroll-locked', String(!isActive));
});

mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
    mobileMenu.setAttribute('data-active', 'false');
    document.body.setAttribute('data-scroll-locked', 'false');
    useEl.setAttribute('href', iconBurger);
    burgerBtn.dataset.icon = 'burger';
  });
});
