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

  const checkBorder = (elementClass) => {
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

  const checkAllData = () => {
    if (snack && drink && dessert) {
      return true;
    }
    return false;
  };
  const buttonActivation = () => {
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Fechar pedido";
    submitButton.classList.add("activedButton");
  };
  return {
    removeCheckButton,
    checkBorder,
    placeCheckButton,
    getElementData,
    checkAllData,
    buttonActivation,
  };
})();

function snackCard(elemento) {
  core.removeCheckButton(".snacks");
  core.checkBorder("indicadorSnackCards");
  core.placeCheckButton(elemento);
  snack = core.getElementData(elemento);
  if (core.checkAllData()) {
    core.buttonActivation();
  }
  elemento.classList.add("indicadorSnackCards");
}
function drinkCard(elemento) {
  core.removeCheckButton(".drinks");
  core.placeCheckButton(elemento);
  core.checkBorder("indicadorDrinkCards");
  drink = core.getElementData(elemento);
  if (core.checkAllData()) {
    core.buttonActivation();
  }
  elemento.classList.add("indicadorDrinkCards");
}
function dessertCard(elemento) {
  core.removeCheckButton(".desserts");
  core.checkBorder("indicadorDessertCards");
  core.placeCheckButton(elemento);
  dessert = core.getElementData(elemento);
  if (core.checkAllData()) {
    core.buttonActivation();
  }
  elemento.classList.add("indicadorDessertCards");
}
