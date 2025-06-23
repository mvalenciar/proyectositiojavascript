const validator = new JustValidate(".main__contact");

const btn_submit = document.querySelector(".contact__submit");

isValidate = false;

validator
  .addField("#contact__name", [
    {
      rule: "required",
      errorMessage: "El campo nombre es obligatorio.",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "El campo debe contener un mínimo de 3 caracteres.",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "El campo debe contener un máximo de 15 caracteres.",
    },
  ])
  .addField("#contact__lastname", [
    {
      rule: "required",
      errorMessage: "El campo apellido es obligatorio.",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "El campo debe contener un mínimo de 3 caracteres.",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "El campo debe contener un máximo de 15 caracteres.",
    },
  ])
  .addField("#contact__email", [
    {
      rule: "required",
      errorMessage: "El campo email es obligatorio.",
    },
    {
      rule: "email",
      errorMessage: "El correo electrónico tiene un formato no válido.",
    },
  ])
  .addField("#contact__birthday", [
    {
      rule: "required",
      errorMessage: "El campo fecha es obligatorio.",
    },
  ])
  .addField("#contact__age", [
    {
      rule: "number",
      errorMessage: "Solo números",
    },
    {
      rule: "required",
      errorMessage: "El campo edad es obligatorio.",
    },
  ])
  .addField("#contact__message", [
    {
      rule: "required",
      errorMessage: "El campo mensaje esta vacío",
    },
  ])
  .onSuccess(() => {
    isValidate = true;
    alert("todo es valido");
  });

btn_submit.addEventListener("click", (event) => {
  event.preventDefault;
});
