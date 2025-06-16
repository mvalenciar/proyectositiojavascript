let clockHours = document.querySelector(".horas");
let clockMinutes = document.querySelector(".minutos");
let clockSeconds = document.querySelector(".segundos");

let dateDay = document.querySelector(".fecha_dia");
let dateMonth = document.querySelector(".fecha_mes");
let dateYear = document.querySelector(".fecha_ano");

let diasSemana = document.querySelectorAll(".dia");

let myDate = new Date();

let day = myDate.getDate();
let month = myDate.getMonth() + 1;
let year = myDate.getFullYear();

if (month < 10) {
  month = "0" + month;
}

setInterval(() => {
  let myDate = new Date();

  let hours = myDate.getHours();
  let minutes = myDate.getMinutes();
  let seconds = myDate.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  clockHours.innerHTML = `${hours}`;
  clockMinutes.innerHTML = `${minutes}`;
  clockSeconds.innerHTML = `${seconds}`;

  dateDay.innerHTML = `${day}`;
  dateMonth.innerHTML = `${month}`;
  dateYear.innerHTML = `${year}`;

  switch (myDate.getDay()) {
    case 0:
      clearActive();
      diasSemana[0].classList.add("dia--active");
      break;
    case 1:
      clearActive();
      diasSemana[1].classList.add("dia--active");
      break;
    case 2:
      clearActive();
      diasSemana[2].classList.add("dia--active");
      break;
    case 3:
      clearActive();
      diasSemana[3].classList.add("dia--active");
      break;
    case 4:
      clearActive();
      diasSemana[4].classList.add("dia--active");
      break;
    case 5:
      clearActive();
      diasSemana[5].classList.add("dia--active");
      break;
    case 6:
      clearActive();
      diasSemana[6].classList.add("dia--active");
      break;
    default:
      break;
  }
}, 1000);

function clearActive() {
  diasSemana.forEach((dia) => {
    dia.classList.remove("dia--active");
  });
}
