import CardValidator from "./cardValidator/CardValidator";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const validator = new CardValidator(container);
  validator.bindedToDOM();
});
