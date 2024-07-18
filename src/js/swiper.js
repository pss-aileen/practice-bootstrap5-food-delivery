// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const swiperEl = document.querySelector("swiper-container");

// swiper parameters
const swiperParams = {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: true,
  loop: true,
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();
