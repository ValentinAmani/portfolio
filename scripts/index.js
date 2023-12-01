/**
 * index.js
 */

let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formMessage = document.getElementById("message");
let formSubmit = document.getElementById("form-submit");

formSubmit.addEventListener("click", () => {
  if (formName.value === "" || formEmail === "" || formMessage === "") {
    alert(`Champs requis.`);
  } else {
    alert(`Merci pour votre message !`);
  }
});
