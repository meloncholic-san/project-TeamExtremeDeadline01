'use strict';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.querySelector('.projects-swiper-next-button');
  const prevButton = document.querySelector('.projects-swiper-prev-button');

  if (!nextButton || !prevButton) {
    console.error('Swiper navigation buttons not found!');
    return;
  }

  const swiper = new Swiper('.swiper-projects-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.projects-swiper-next-button',
      prevEl: '.projects-swiper-prev-button',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      forceToAxis: true,
    },
  });

  console.log('Swiper initialized successfully!');
});
