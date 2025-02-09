console.log("reviews script loaded!");


import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { getData } from "./api";

const swiperSlides = document.querySelectorAll(".reviews-swiper-slide");
const swiperBthPrev = document.querySelector("[data-swiper-id='2'].swiper-button-prev");
const swiperBthNext = document.querySelector("[data-swiper-id='2'].swiper-button-next");


  const reviewsSwiper = new Swiper(".reviews-swiper", {
    navigation: {
      nextEl: '[data-swiper-id="2"] .swiper-button-next',
      prevEl: '[data-swiper-id="2"] .swiper-button-prev',
    },
    wrapperClass: "reviews-swiper-wrapper", 
    slideClass: "reviews-swiper-slide",
    spaceBetween: 16,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, 
      1440: { slidesPerView: 4 },
    },
    on: {
      slideChange: function() {
        if (this.isBeginning) {
            swiperBthPrev.disabled = true; 
            swiperBthPrev.classList.add('swiper-button-disabled');
          }
         else {
          swiperBthPrev.disabled = false; 
          swiperBthPrev.classList.remove('swiper-button-disabled');
         }
  
        if (this.isEnd) {
          swiperBthNext.disabled = true; 
          swiperBthNext.classList.add('swiper-button-disabled');
        } 
         else {
          swiperBthNext.classList.remove('swiper-button-disabled');
          swiperBthNext.disabled = false; 
         }
      },
    }
  });

  window.reviewsSwiper = reviewsSwiper;

    swiperBthNext.addEventListener("click", () => {
      reviewsSwiper.slideNext();
    });
    
    swiperBthPrev.addEventListener("click", () => {
      reviewsSwiper.slidePrev();
    });
    

if (reviewsSwiper.isBeginning) {
  swiperBthPrev.classList.add('swiper-button-disabled');
}

if (reviewsSwiper.isEnd) {
  swiperBthNext.classList.add('swiper-button-disabled');
}


  async function loadReviews() {
    const slidesData = await getData(); 
    
    swiperSlides.forEach((slide, index) => {
      if (slidesData[index]) {
        slide.innerHTML = `
          <div class="review-card">
            <img src="${slidesData[index].avatar_url}" alt="${slidesData[index].author}" class="review-avatar">
            <h3 class="review-avatar-name">${slidesData[index].author}</h3>
            <p class ="review-review">${slidesData[index].review}</p>
          </div>
        `;
      }
    });
  }
  

  loadReviews();