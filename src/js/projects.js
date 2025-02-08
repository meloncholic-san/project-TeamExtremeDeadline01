'use strict';
import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.uniqu-swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.unique-swiper-button-next[data-swiper-id="1"]',
    prevEl: '.unique-swiper-button-prev[data-swiper-id="1"]',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: true,

  on: {
    slideChange: function () {
      const prevButton = document.querySelector(
        '.unique-swiper-button-prev[data-swiper-id="1"]'
      );
      const nextButton = document.querySelector(
        '.unique-swiper-button-next[data-swiper-id="1"]'
      );

      prevButton.disabled = swiper.isBeginning;
      nextButton.disabled = swiper.isEnd;

      prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
      nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
    },
  },
});
