let snack, drink, dessert;

const core = (() => {
  const removeCheckButton = (theClass) => {
    const checkIcon = document.querySelector(theClass).childNodes;
    for (let i = 0; i < checkIcon.length; i++) {
      if (checkIcon[i].childNodes[1]) {
        checkIcon[i].childNodes[1].childNodes[7].childNodes[3].classList.remove(
          "cardCheckMarkVisible"
        );
      }
    }
  };

  const indicadorCheck = (elementClass) => {
    const elementoEstilizado = document.querySelector(`.${elementClass}`);
    if (elementoEstilizado !== null) {
      elementoEstilizado.classList.remove(elementClass);
    }
  };

  const placeCheckButton = (element) => {
    element.childNodes[1].childNodes[7].childNodes[3].classList.add("cardCheckMarkVisible");
  };

  const getElementData = (element) => {
    const escolha = element.childNodes[1].childNodes[3].textContent;
    const valorEmReal = element.childNodes[1].childNodes[7].childNodes[1].textContent;
    const valor = parseFloat(valorEmReal.slice(3));
    return { escolha, valor };
  };

  const checkAllData = () => {};
  return { removeCheckButton, indicadorCheck, placeCheckButton, getElementData, checkAllData };
})();

function snackCard(elemento) {
  core.removeCheckButton(".snacks");
  core.indicadorCheck("indicadorSnackCards");
  core.placeCheckButton(elemento);
  snack = core.getElementData(elemento);
  core.checkAllData();
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  core.removeCheckButton(".drinks");
  core.placeCheckButton(elemento);
  core.indicadorCheck("indicadorDrinkCards");
  drink = core.getElementData(elemento);
  core.checkAllData();
  elemento.classList.add("indicadorDrinkCards");
}
function dessertCard(elemento) {
  core.removeCheckButton(".desserts");
  core.indicadorCheck("indicadorDessertCards");
  core.placeCheckButton(elemento);
  dessert = core.getElementData(elemento);
  core.checkAllData();
  elemento.classList.add("indicadorDessertCards");
}
