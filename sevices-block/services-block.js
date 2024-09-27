const showMoreButton = document.querySelector(".button");
const showMore = document.querySelector(".button__text--show-more");
const buttonArrows = document.querySelector(".button__arrows");
const servicesSwiper = document.querySelector(".services__swiper");

function showMoreLess() {
  if (servicesSwiper.style.height <= "200px") {
    buttonArrows.style.transform = "rotate(180deg)";

    showMore.textContent = "Скрыть";
    if (!desktop.matches) {
      servicesSwiper.style.height = "380px";
    } else {
      servicesSwiper.style.height = "280px";
    }
  } else {
    buttonArrows.style.transform = "rotate(0deg)";
    servicesSwiper.style.height = "200px";

    showMore.textContent = "Показать еще";
  }
}

showMoreButton.addEventListener("click", showMoreLess);
