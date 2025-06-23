const themeGreen = document.querySelector(".theme__green");
const themeOrange = document.querySelector(".theme__orange");
const themeBlue = document.querySelector(".theme__blue");

const page = document.querySelector("html");

themeGreen.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("theme__green--active");
});

themeOrange.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("theme__orange--active");
});

themeBlue.addEventListener("click", () => {
  page.removeAttribute("class");
  page.classList.add("theme__blue--active");
});
