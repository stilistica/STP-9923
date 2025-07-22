import Swiper from 'swiper';
import { EffectCards, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1200;

  const swiperTwo = new Swiper('.gallery-swiper', {
    modules: [EffectCoverflow, Navigation, EffectCards],
    effect: isDesktop ? 'coverflow' : 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    loopedSlides: 5,
    initialSlide: 2,

    slidesPerView: isDesktop ? 3 : 1.2,

    ...(isDesktop
      ? {
          coverflowEffect: {
            rotate: 5,
            stretch: 85,
            depth: 200,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          },
        }
      : {
          coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          },
        }),

    navigation: {
      nextEl: '.gallery-swiper-next',
      prevEl: '.gallery-swiper-prev',
    },
  });
});
