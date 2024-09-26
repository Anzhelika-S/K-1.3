const mobile = window.matchMedia("(min-width:320px) and (max-width: 767px)");
const tablet = window.matchMedia("(min-width:768px)");
const desktop = window.matchMedia("(min-width:1120px)");

let init = false;
let swiper = Swiper;


function swiperMode() {
    if (mobile.matches) {
      if (!init) {
        init = true;
        swiper = new Swiper(".swiper", {
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
  
          grabCursor: true,
  
          slidesPerView: "auto",
          spaceBetween: 16,
  
          centeredSlides: true,
          centeredSlidesBounds: true,
          slidesOffsetBefore: false,
        });
      }
    } else if (tablet.matches && init) {
      swiper.destroy();
      init = false;
    }
  }

  
window.addEventListener("load", function () {
    swiperMode();
  });
  
window.addEventListener("resize", function () {
    swiperMode();
});
  