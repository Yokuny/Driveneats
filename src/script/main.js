function indicadorCheck(elementClass) {
  const elementoEstilizado = document.querySelector(`.${elementClass}`);
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove(elementClass);
  }
}
function snackCard(elemento) {
  indicadorCheck("indicadorSnackCards");
  const checkIcon = document.getElementsByClassName("snacks");
  console.log(checkIcon);
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  indicadorCheck("indicadorDrinkCards");
  elemento.classList.add("indicadorDrinkCards");
}
function dessertCard(elemento) {
  indicadorCheck("indicadorDessertCards");
  elemento.classList.add("indicadorDessertCards");
}
