import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const btnPrev = document.querySelector('.reviews-swiper-prev');
const btnNext = document.querySelector('.reviews-swiper-next');

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.reviews-can-see', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    navigation: {
      nextEl: '.reviews-swiper-next',
      prevEl: '.reviews-swiper-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    resizeObserver: true,
    slidesPerView: 1,
    breakpoints: {
      1200: { slidesPerView: 3 },
    },

    modules: [Pagination, Navigation, Keyboard],
  });

  function updateButtonSlider() {
    btnPrev.classList.toggle('rev-disabled', swiper.isBeginning);
    btnNext.classList.toggle('rev-disabled', swiper.isEnd);
  }
  swiper.on('slideChange', updateButtonSlider);
    updateButtonSlider();
});
