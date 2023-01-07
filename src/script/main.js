function snackCard(elemento) {
  const elementoEstilizado = document.querySelector(".indicadorSnackCards");
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove("indicadorSnackCards");
  }
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  const elementoEstilizado = document.querySelector(".indicadorDrinkCards");
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove("indicadorDrinkCards");
  }
  elemento.classList.add("indicadorDrinkCards");
}
