// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  slidesPerView: "auto",
  spaceBetween: 24,
  loopAdditionalSlides: 1,
  watchSlidesProgress: true,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  modules: [Navigation],
});
