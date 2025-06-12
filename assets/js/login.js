let contentForm = document.querySelector(".content__widget__form");
let form = document.querySelector(".widget__form");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let btnSubmit = document.querySelector("#wsubmit");

let getUser = () => {
  let myUser = localStorage.getItem("user");
  if (myUser) {
    let identity = JSON.parse(myUser);

    contentForm.innerHTML = `Hola ${identity.name}`;
    form.style.display = "none";
    let btnLogout = document.createElement("button");
    btnLogout.setAttribute("type", "button");
    btnLogout.append(document.createTextNode("Salir"));
    contentForm.append(btnLogout);

    btnLogout.addEventListener("click", () => {
      alert("cerrando sesión");

      localStorage.clear();
      location.reload();
    });
  }
  return true;
};

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault;

  alert("Login");

  //Tomar datos del formulario

  let name = inputName.value;
  let email = inputEmail.value;
  let password = inputPassword.value;

  //Comprobar que todo esta relleno

  if (name && email && password) {
    //Guardar datos del formulario en un objeto

    let user = { name, email, password };
    //Guardar los datos en el localStorage
    localStorage.setItem("user", JSON.stringify(user));
    //Vaciar el formulario
    form.reset();

    //Mostrar el usuario
    getUser();
  }
});

getUser();
