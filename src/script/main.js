function snackCard(elemento) {
  const elementoEstilizado = document.querySelector(".indicadorSnackCards");
  const checkIcon = document.getElementsByClassName("snacks");
  console.log(checkIcon);
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
function dessertCard(elemento) {
  const elementoEstilizado = document.querySelector(".indicadorDessertCards");
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove("indicadorDessertCards");
  }
  elemento.classList.add("indicadorDessertCards");
}
