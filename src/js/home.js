function setLinha(linha) {
  sessionStorage.setItem("linhaSelecionada", linha)
  console.log("Linha selecionada:", linha)
}
window.setLinha = setLinha; // <-- torna disponível para onClick inline