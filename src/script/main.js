let snack, drink, dessert;
const core = (() => {
  function removeCheckButton(theClass) {
    const checkIcon = document.querySelector(theClass).childNodes;
    for (let i = 0; i < checkIcon.length; i++) {
      if (checkIcon[i].childNodes[1]) {
        checkIcon[i].childNodes[1].childNodes[7].childNodes[3].classList.remove(
          "cardCheckMarkVisible"
        );
      }
    }
  }
  function checkBorder(elementClass) {
    const elementoEstilizado = document.querySelector(`.${elementClass}`);
    if (elementoEstilizado !== null) {
      elementoEstilizado.classList.remove(elementClass);
    }
  }
  function placeCheckButton(element) {
    element.childNodes[1].childNodes[7].childNodes[3].classList.add("cardCheckMarkVisible");
  }
  function checkAllData() {
    if (snack && drink && dessert) {
      return true;
    }
    return false;
  }
  function buttonActivation() {
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Fechar pedido";
    submitButton.disabled = false;
    submitButton.classList.add("activedButton");
  }
  const getElementData = (element) => {
    const escolha = element.childNodes[1].childNodes[3].textContent;
    const valorEmReal = element.childNodes[1].childNodes[7].childNodes[1].textContent;
    const valor = parseFloat(valorEmReal.slice(3));
    return { escolha, valor };
  };
  function run(group, elementClass, element) {
    removeCheckButton(group);
    checkBorder(elementClass);
    placeCheckButton(element);
    if (checkAllData()) {
      buttonActivation();
    }
    element.classList.add(elementClass);
  }
  function aaa() {
    console.log("aol");
  }

  const submiteOrder = () => {
    if (checkAllData()) {
      valor = snack.valor + drink.valor + dessert.valor;
      valor.toFixed(2).replace(".", ",");
      let msg = `
      Olá, gostaria de fazer o pedido:
      - Prato: ${snack.escolha}
      - Bebida: ${drink.escolha}
      - Sobremesa: ${dessert.escolha}
      Total: R$ ${snack.valor + drink.valor + dessert.valor}`;

      const aboutSnacks = document.getElementById("aboutSnacks");
      aboutSnacks.childNodes[1].textContent = snack.escolha;
      aboutSnacks.childNodes[3].textContent = `R$ ${snack.valor}`;

      const aboutDrink = document.getElementById("aboutDrink");
      aboutDrink.childNodes[1].textContent = drink.escolha;
      aboutDrink.childNodes[3].textContent = `R$ ${drink.valor}`;

      const aboutDessert = document.getElementById("aboutDessert");
      aboutDessert.childNodes[1].textContent = dessert.escolha;
      aboutDessert.childNodes[3].textContent = `R$ ${dessert.valor}`;

      const totalPrice = document.getElementById("totalPrice");
      totalPrice.childNodes[3].textContent = `R$ ${valor.toFixed(2)}`;

      const reviewOrder = document.getElementById("reviewCard");
      console.log(reviewOrder);

      reviewOrder.style.display = "flex";
    }
  };
  return {
    submiteOrder,
    getElementData,
    run,
  };
})();
function snackCard(elemento) {
  snack = core.getElementData(elemento);
  core.run(".snacks", "indicadorSnackCards", elemento);
}
function drinkCard(elemento) {
  drink = core.getElementData(elemento);
  core.run(".drinks", "indicadorDrinkCards", elemento);
}
function dessertCard(elemento) {
  dessert = core.getElementData(elemento);
  core.run(".desserts", "indicadorDessertCards", elemento);
}
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", core.submiteOrder);