let slides = document.querySelectorAll(".slider__img");
let btnNext = document.querySelector(".slider__btn-next");
let btnPrev = document.querySelector(".slider__btn-prev");
let contenedorArticulo = document.querySelector(".layout__article");

let indexImg = 0;
let lengthImg = slides.length;

let contenidoArticulo = [
  {
    titulo: "articulo 1",
    fecha: "7 marzo del 2024",
    contenido:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam voluptas nulla praesentium rem numquam nostrum asperiores pariatur assumenda, in odit cumque facere? Hic quisquam iusto labore enim, fugiat dolorum!",
  },
  {
    titulo: "articulo 2",
    fecha: "3 abril del 2025",
    contenido:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam voluptas nulla praesentium rem numquam nostrum asperiores pariatur assumenda, in odit cumque facere? Hic quisquam iusto labore enim, fugiat dolorum!",
  },
  {
    titulo: "articulo 3",
    fecha: "20 mayo del 2025",
    contenido:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam voluptas nulla praesentium rem numquam nostrum asperiores pariatur assumenda, in odit cumque facere? Hic quisquam iusto labore enim, fugiat dolorum!",
  },
  {
    titulo: "articulo 4",
    fecha: "01 junio del 2025",
    contenido:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam voluptas nulla praesentium rem numquam nostrum asperiores pariatur assumenda, in odit cumque facere? Hic quisquam iusto labore enim, fugiat dolorum!",
  },
];

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

contenidoArticulo.forEach((articulo) => {
  contenedorArticulo.innerHTML += `<div class="article_content">
          <h2 class="article__title">${articulo.titulo}</h2>
          <span class="article__date">publicado el ${articulo.fecha}</span>
          <p class="article__text">
            ${articulo.contenido}
          </p>
          <button type="button" class="article__button">leer mas</button>
        </div>`;
});
