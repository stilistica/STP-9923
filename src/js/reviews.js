import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';

const btnPrev = document.querySelector('[data-reviews-prev]');
const btnNext = document.querySelector('[data-reviews-next]');

document.addEventListener('DOMContentLoaded', () => {
  const swiperOne = new Swiper('[data-reviews-swiper]', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 24,
    navigation: {
      nextEl: '[data-reviews-next]',
      prevEl: '[data-reviews-prev]',
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
    btnPrev.dataset.disabled = swiperOne.isBeginning;
    btnNext.dataset.disabled = swiperOne.isEnd;
  }
  swiperOne.on('slideChange', updateButtonSlider);
  updateButtonSlider();
});
