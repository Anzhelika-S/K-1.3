const mobile = window.matchMedia("(max-width:320px)");
const desktop = window.matchMedia("(min-width:1120px)");

const showMoreButton = document.querySelector(".button");
const showMore = document.querySelector(".button__text--show");
const hide = document.querySelector(".button__text--hide");
const buttonArrows = document.querySelector(".button__arrows");
const servicesSwiper = document.querySelector(".services__swiper");

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

        slidesPerView: 1.2,
        spaceBetween: 16,

        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesOffsetBefore: false,
      });
    }
  } else if (!mobile.matches && init) {
    swiper.destroy();
    init = false;
  }
}

function showMoreLess() {
  if (showMore.classList.contains("hidden")) {
    showMore.classList.remove("hidden");
    hide.classList.add("hidden");

    buttonArrows.style.transform = "rotate(0deg)";
    servicesSwiper.style.height = "200px";
  } else {
    showMore.classList.add("hidden");
    hide.classList.remove("hidden");

    buttonArrows.style.transform = "rotate(180deg)";

    if (!desktop.matches) {
      servicesSwiper.style.height = "380px";
    } else {
      servicesSwiper.style.height = "280px";
    }
  }
}

showMoreButton.addEventListener("click", showMoreLess);

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});
