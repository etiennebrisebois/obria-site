const bouton = document.querySelector("#menuBtn");
const menu = document.querySelector("nav");

if (bouton) {
  bouton.addEventListener("click", function() {
    menu.classList.toggle("menu-ouvert");
  });
}

const formulaire = document.querySelector("form");
const message = document.querySelector("#message");
const erreurMessage = document.querySelector("#erreurMessage");

if (formulaire) {
  formulaire.addEventListener("submit", function(event) {
    if (message.value.length < 10) {
      event.preventDefault();
      erreurMessage.textContent = "Ton message doit contenir au moins 10 caractères.";
    } else {
      erreurMessage.textContent = "";
    }
  });
}