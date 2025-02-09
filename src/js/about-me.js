import Accordion from 'accordion-js';
import sprite from '../img/icons/icon-sprite.svg';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.about-list', {
    duration: 400,
  });

  function toggleIcon(button, isOpen) {
    const iconUse = button.querySelector('use');
    if (iconUse) {
      const newIcon = isOpen ? 'icon-IconUp' : 'icon-IconDown';
      iconUse.setAttribute('xlink:href', `${sprite}#${newIcon}`);
    }
  }

  const items = document.querySelectorAll('.about-list-item');
  items.forEach(item => {
    const button = item.querySelector('.about-toggle-btn');
    const content = item.querySelector('.about-list-content');

    button.addEventListener('click', function () {
      const isActive = item.classList.toggle('is-active');
      toggleIcon(button, isActive);

      if (isActive) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
});

const slider = new Swiper('.swiper-skills-container', {
  loop: true,
  oneWayMovement: true,
  edgeSwipeDetection: true,
  slideToClickedSlide: true,
  wrapperClass: 'skills-list',
  slideClass: 'skills-list-item',
  centeredSlides: false,
  loopedSlides: 6,
  navigation: {
    nextEl: '.skills-slider-btn',
  },
  cssMode: true,

  spaceBetween: 0,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

console.log('Slider: ', slider);
