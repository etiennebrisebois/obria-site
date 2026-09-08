let menuOuvert = false;
const bouton = document.querySelector("#menuBtn");
const statut = document.querySelector("#statutMenu");

bouton.addEventListener("click", function() {
  menuOuvert = !menuOuvert;

  if (menuOuvert) {
    statut.textContent = "Menu ouvert";
  } else {
    statut.textContent = "Menu fermé";
  }
});