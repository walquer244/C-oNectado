let botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    let item = botao.closest(".item");
    let infor = item.querySelector(".infor");
    let icone = botao.querySelector(".icone");

    if (conteudo.classList.contains("aberto")) {
      conteudo.classList.remove("aberto");
      icone.classList.remove("rotated");
    } else {
      conteudo.classList.add("aberto");
      icone.classList.add("rotated");
    }
  })
})