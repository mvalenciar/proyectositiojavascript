let slides = document.querySelectorAll(".slider__img");
let btnNext = document.querySelector(".slider__btn-next");
let btnPrev = document.querySelector(".slider__btn-prev");

let indexImg = 0;
let lengthImg = slides.length;

let clearActives = () => {
  slides.forEach((slide) => {
    slide.classList.remove("slider__img--active");
  });
};

btnNext.addEventListener("click", () => {
  indexImg++;
  if (indexImg >= lengthImg) {
    indexImg = 0;
  }

  clearActives();

  slides[indexImg].classList.add("slider__img--active");
});

btnPrev.addEventListener("click", () => {
  indexImg--;
  if (indexImg < 0) {
    indexImg = lengthImg - 1;
  }
  clearActives();

  slides[indexImg].classList.add("slider__img--active");
});
