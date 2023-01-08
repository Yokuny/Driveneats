function indicadorCheck(elementClass) {
  const elementoEstilizado = document.querySelector(`.${elementClass}`);
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove(elementClass);
  }
}
function removeCheckButton() {
  const checkIcon = document.getElementsByClassName("snacks");
}
function placeCheckButton(element) {
  element.childNodes[1].childNodes[7].childNodes[3].classList.add("cardCheckMarkVisible");
}
function snackCard(elemento) {
  indicadorCheck("indicadorSnackCards");
  removeCheckButton();
  placeCheckButton(elemento);
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  indicadorCheck("indicadorDrinkCards");
  placeCheckButton(elemento);
  elemento.classList.add("indicadorDrinkCards");
}
function dessertCard(elemento) {
  indicadorCheck("indicadorDessertCards");
  placeCheckButton(elemento);
  elemento.classList.add("indicadorDessertCards");
}
