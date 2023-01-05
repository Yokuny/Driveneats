function snackCards(elemento) {
  const elementoEstilizado = document.querySelector(".indicaçãoDeSeleção");
  if (elementoEstilizado !== null) {
    elementoEstilizado.classList.remove("indicaçãoDeSeleção");
  }
  elemento.classList.add("indicaçãoDeSeleção");
}
