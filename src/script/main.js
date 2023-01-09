let snack, drink, dessert;
const reviewButton = document.getElementById("reviewOrder");
const submitButton = document.getElementById("submitOrder");
const cancelButton = document.getElementById("cancelOrder");
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
    return snack && drink && dessert;
  }
  function buttonActivation() {
    const reviewBtn = document.getElementById("reviewOrder");
    reviewBtn.textContent = "Fechar pedido";
    reviewBtn.disabled = false;
    reviewBtn.classList.add("activedButton");
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
  function getNameAndAdress() {
    const userName = prompt("digite seu nome:");
    const userAdress = prompt("digite seu endereço:");
    return { userName, userAdress };
  }
  function cardConstructor(total) {
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
    totalPrice.childNodes[3].textContent = `R$ ${total}`;
    const reviewOrder = document.getElementById("reviewCard");
    reviewOrder.style.display = "flex";
  }
  function getOrderPrice() {
    return (snack.valor + drink.valor + dessert.valor).toFixed(2);
  }
  const reviewOrder = () => {
    if (checkAllData()) {
      const total = getOrderPrice();
      cardConstructor(total);
    }
  };
  const submitOrder = () => {
    const total = getOrderPrice();
    const userNameAndAdress = getNameAndAdress();
    let msg = `Olá, gostaria de fazer o pedido:\n- Prato: ${snack.escolha}\n- Bebida: ${drink.escolha}\n- Sobremesa: ${dessert.escolha}\nTotal: R$ ${total}\n\nNome: ${userNameAndAdress.userName}\nEndereço: ${userNameAndAdress.userAdress}`;
    window.location.href = `https://wa.me/5528999848929?text=${encodeURIComponent(msg)}`;
  };
  const cancelOrder = () => {
    const reviewOrder = document.getElementById("reviewCard");
    reviewOrder.style.display = "none";
  };

  return {
    getElementData,
    run,
    reviewOrder,
    submitOrder,
    cancelOrder,
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
reviewButton.addEventListener("click", core.reviewOrder);
submitButton.addEventListener("click", core.submitOrder);
cancelButton.addEventListener("click", core.cancelOrder);