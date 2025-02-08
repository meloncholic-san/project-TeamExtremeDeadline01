console.log("reviews script loaded!");


import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { getData } from "./api";

const swiperSlides = document.querySelectorAll(".reviews-swiper-slide");

console.log(swiperSlides)

  // Ініціалізація reviews-swiper
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '[data-swiper-id="2"].reviews-swiper-button-next',
      prevEl: '[data-swiper-id="2"].reviews-swiper-button-prev',
    },
    wrapperClass: "reviews-swiper-wrapper", 
    slideClass: "reviews-swiper-slide",
  });

  
  getData()
  .then ((response) => {
    const slidesData = response;
    console.log(slidesData);
    swiperSlides.forEach((slide, index) => {


    })
  } 
  
)




