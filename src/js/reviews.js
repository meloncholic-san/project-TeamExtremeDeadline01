console.log("reviews script loaded!");


import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

  // Ініціалізація reviews-swiper
  const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".reviews-swiper .reviews-swiper-button-next",
        prevEl: ".reviews-swiper .reviews-swiper-button-prev",
    },
    wrapperClass: "reviews-swiper-wrapper", 
    slideClass: "reviews-swiper-slide",
  });