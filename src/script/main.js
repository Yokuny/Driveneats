function indicadorCheck(elementClass) {
  const elementoEstilizado = document.querySelector(`.${elementClass}`);
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove(elementClass);
  }
}
function removeCheckButton(theClass) {
  const checkIcon = document.querySelector(theClass).childNodes;
  for (let i = 0; i < checkIcon.length; i++) {
    if (checkIcon[i].childNodes[1]) {
      console.log(
        checkIcon[i].childNodes[1].childNodes[7].childNodes[3].classList.remove(
          "cardCheckMarkVisible"
        )
      );
    }
  }
}
function placeCheckButton(element) {
  element.childNodes[1].childNodes[7].childNodes[3].classList.add("cardCheckMarkVisible");
}
function snackCard(elemento) {
  removeCheckButton(".snacks");
  indicadorCheck("indicadorSnackCards");
  placeCheckButton(elemento);
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  removeCheckButton(".drinks");
  placeCheckButton(elemento);
  indicadorCheck("indicadorDrinkCards");
  elemento.classList.add("indicadorDrinkCards");
}
function dessertCard(elemento) {
  removeCheckButton(".desserts");
  indicadorCheck("indicadorDessertCards");
  placeCheckButton(elemento);
  elemento.classList.add("indicadorDessertCards");
}
