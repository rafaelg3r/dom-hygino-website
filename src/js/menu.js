"use strict"
import { carnesDescriptions } from "./menu-display.js"

const linhaBoutique = document.getElementById("linhaBoutique")
const linhaNovilhoJovem = document.getElementById("linhaNovilhoJovem")
const linhaChurrasco = document.getElementById("linhaChurrasco")
const linhaPampeira = document.getElementById("linhaPampeira")
const linhaProdutos = document.getElementById("linhaProdutos")

const menuBanner = document.querySelector(".menu-banner")
const bannerTitlePicture = document.querySelector(".menu-title")
const bannerTitle = document.getElementById("banner-title")
const bannerImagePicture = document.querySelector(".menu-banner-steak")
const bannerImage = document.getElementById("banner-image")
const bannerSource = bannerTitlePicture.querySelector("source")

const cardsContainer = document.querySelector(".menu-cards-container")
const card = document.querySelector(".menu-card")

const linhaBoutiqueCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-denver.png",
    title: "Denver",
    description: "Maciez e sabor suave",
  },
  card2: {
    imgSrc: "./src/assets/menu/menu-card-cowboy.png",
    title: "Cowboy",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-shoulder.png",
    title: "Shoulder",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-steak.png",
    title: "Steak Shoulder",
    description: "Suculento, macio e saboroso",
  },
  card5: {
    imgSrc: "./src/assets/menu/menu-card-house-rib.png",
    title: "House Rib",
    description: "Suculento, macio e saboroso",
  },
}
const linhaNovilhoJovemCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card2: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-entrecot.png",
    title: "Entrecot",
    description: "Suculento, macio e saboroso",
  },
  card5: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
}
const linhaPampeiraCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-alcatra.png",
    title: "Alcatra",
    description: "Suculento, macio e saboroso",
  },
}
const linhaChurrascoCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-costela-grill.png",
    title: "Costela Grill",
    description: "Suculento, macio e saboroso",
  },

  card2: {
    imgSrc: "./src/assets/menu/menu-card-costela-em-tira.png",
    title: "Costela em Tira",
    description: "Suculento, macio e saboroso",
  },
}
const linhaProdutosCards = {}
const todasAsLinhasCards = {
  linhaBoutiqueCRD: linhaBoutiqueCards,
  linhaNovilhoJovemCRD: linhaNovilhoJovemCards,
  linhaChurrascoCRD: linhaChurrascoCards,
  linhaPampeiraCRD: linhaPampeiraCards,
  linhaProdutosCRD: linhaProdutosCards,
}

const linhaClicada = sessionStorage.getItem("linhaSelecionada")

let linhaAtual = linhaClicada.replace("linha", "") || "Boutique"
updateBanner(linhaAtual)
function updateBanner(linha) {
  switch (linha) {
    case "Pampeira":
      bannerSource.srcset = "./src/assets/menu/text-linha-Pampeira.png"
      bannerTitle.src = "./src/assets/menu/text-linha-Pampeira.png"
      bannerTitle.alt = "Linha Pampeira"
      break

    case "NovilhoJovem":
      bannerSource.srcset = "./src/assets/menu/text-linha-N-J.png"
      bannerTitle.src = "./src/assets/menu/text-linha-N-J.png"
      bannerTitle.alt = "Linha Novilho Jovem"
      break

    case "Churrasco":
      bannerSource.srcset = "./src/assets/menu/text-linha-Churrasco.png"
      bannerTitle.src = "./src/assets/menu/text-linha-Churrasco.png"
      bannerTitle.alt = "Linha Churrasco"
      break

    case "Produtos":
      bannerSource.srcset = "./src/assets/menu/text-produtos.png"
      bannerTitle.src = "./src/assets/menu/text-produtos.png"
      bannerTitle.alt = "Produtos"
      break

    default: // fallback (Boutique)
      bannerSource.srcset = "./src/assets/menu/text-linha-Boutique.png"
      bannerTitle.src = "./src/assets/menu/text-linha-Boutique.png"
      bannerTitle.alt = "Linha Boutique"
  }
}

let linhaSelected // variavel que guarda o objeto de um card de uma das linhas selecionadas
function cardsLoad(linhaSelected) {
  cardsContainer.innerHTML = ""

  Object.values(linhaSelected).forEach((card) => {
    const menuCard = document.createElement("div")
    menuCard.classList.add("menu-card")
    // menuCard.addEventListener("click", () => {
    //   const cardSelected = card.title
    //   console.log(cardSelected)
    // })

    const cardImg = document.createElement("img")
    cardImg.src = card.imgSrc
    // cardImg.alt = ""
    menuCard.appendChild(cardImg)

    const cardText = document.createElement("div")
    cardText.classList.add("menu-card-text")

    const cardTextMain = document.createElement("div")
    cardTextMain.classList.add("card-text-main")

    const cardTitle = document.createElement("h3")
    cardTitle.id = "title"
    cardTitle.textContent = card.title

    const cardDescription = document.createElement("p")
    cardDescription.id = "description"
    cardDescription.textContent = card.description

    // adiciona na div .card-text-main o h3 e o p
    cardTextMain.appendChild(cardTitle)
    cardTextMain.appendChild(cardDescription)

    const cardButton = document.createElement("button")
    cardButton.textContent = "Saiba mais"

    cardText.appendChild(cardTextMain)
    cardText.appendChild(cardButton)

    menuCard.appendChild(cardImg)
    menuCard.appendChild(cardText)

    cardsContainer.appendChild(menuCard)
  })
}

if (linhaClicada === "linhaBoutique") {
  linhaBoutique.classList.add("menu-selected")
  cardsLoad(linhaBoutiqueCards)
  linhaSelected = linhaBoutiqueCards
} else if (linhaClicada === "linhaNovilhoJovem") {
  linhaNovilhoJovem.classList.add("menu-selected")
  cardsLoad(linhaNovilhoJovemCards)
  linhaSelected = linhaNovilhoJovemCards
} else if (linhaClicada === "linhaChurrasco") {
  linhaChurrasco.classList.add("menu-selected")
  cardsLoad(linhaChurrascoCards)
  linhaSelected = linhaChurrascoCards
} else if (linhaClicada === "linhaPampeira") {
  linhaPampeira.classList.add("menu-selected")
  cardsLoad(linhaPampeiraCards)
  linhaSelected = linhaPampeiraCards
} else if (linhaClicada === "linhaProdutos") {
  linhaProdutos.classList.add("menu-selected")
  cardsLoad(linhaProdutosCards)
  linhaSelected = linhaProdutosCards
} else {
  console.log("Nenhuma linha foi selecionada")
  linhaBoutique.classList.add("menu-selected")
  cardsLoad(linhaBoutiqueCards)
  linhaSelected = linhaBoutiqueCards
}


const linhas = [
  linhaBoutique,
  linhaNovilhoJovem,
  linhaChurrasco,
  linhaPampeira,
  linhaProdutos,
]

linhas.forEach((linha) => {
  if (linha.classList.contains("menu-selected")) {
    console.log("Linha selecionada:", linha.id)
    let linhaSelected = eval(`${linha.id}Cards`)

    cardsLoad(linhaSelected)

    updateBanner(linha.id.replace("linha", ""))
  }
  linha.addEventListener("click", () => {
    linhas.forEach((item) => item.classList.remove("menu-selected"))
    linha.classList.add("menu-selected")
    // linhaSelectedSpan.textContent = linha.textContent
    let linhaSelected = eval(`${linha.id}Cards`)
    cardsLoad(linhaSelected)
    updateBanner(linha.id.replace("linha", ""))
  })
})
// filtros
const filtroRecomendados = document.getElementById("filtro-recomendados")
// const recomendados = [1, 2, 3, 4, 5, 6]

const filtroPopulares = document.getElementById("filtro-populares")
// const populares = []

const menuFiltros = [filtroRecomendados, filtroPopulares]

menuFiltros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    menuFiltros.forEach((item) => item.classList.remove("menu-selected"))
    filtro.classList.add("menu-selected")
  })
})

//? Display
const display = document.getElementById("display")
// capturando o card clicado para exibir as informações no display
cardsContainer.addEventListener("click", (event) => {
  const cardSelected = event.target.closest(".menu-card")
  if (cardSelected) {
    const cardSelectedName = cardSelected
      .querySelector("h3")
      .textContent.replace(/\s+/g, "")
    const cardImgSrc = cardSelected.querySelector("img").src
    console.log(cardSelectedName)
    displayLoad(cardSelectedName, cardImgSrc, carnesDescriptions)
  }
})

function displayLoad(cardSelectedName, cardImgSrc, carnesDescriptions) {
  display.innerHTML = ""

  const displayMainInformation = document.createElement("div")
  displayMainInformation.classList.add("display-main-information")

  const displayTitle = document.createElement("h1")
  displayTitle.textContent = cardSelectedName
  displayTitle.classList.add("silver-gradient-right")

  const displayImgContainer = document.createElement("div")

  const displayImg = document.createElement("img")
  displayImg.src = cardImgSrc

  const displayDescription = document.createElement("p")
  displayDescription.textContent = `“${carnesDescriptions[cardSelectedName].description}”`
  displayDescription.classList.add("silver-gradient-mid")

  const acompanhamentosContainer = document.createElement("div")
  acompanhamentosContainer.classList.add("acompanhamentos-container")
  const acompanhamentosSpan = document.createElement("span")
  acompanhamentosSpan.classList.add("silver-gradient-right")
  acompanhamentosSpan.textContent = "acompanhamentos"
  const acompanhamentosList = document.createElement("div")
  acompanhamentosList.classList.add("acompanhamento")
  const acompanhamentoIconContainer = document.createElement("div")
  acompanhamentoIconContainer.classList.add("display-icon-container")

  const acompanhamentoIcon = document.createElement("img")
  acompanhamentoIcon.src =
    carnesDescriptions[cardSelectedName].acompanhamentos.acomp1.acompIcon
  console.log(acompanhamentoIcon.src)
  const acompanhamentoName = document.createElement("p")
  acompanhamentoName.textContent =
    carnesDescriptions[cardSelectedName].acompanhamentos.acomp1.acompName

  const harmonizacoesContainer = document.createElement("div")
  harmonizacoesContainer.classList.add("harmonizacoes-container")

  const harmonizacoesSpan = document.createElement("span")
  harmonizacoesSpan.classList.add("silver-gradient-right")
  harmonizacoesSpan.textContent = "harmonizações"

  harmonizacoesContainer.appendChild(harmonizacoesSpan)

  // pega todas as harmonizações do card
  const harmonizacoes = carnesDescriptions[cardSelectedName].harmonizacoes

  Object.values(harmonizacoes).forEach((harm) => {
    const harmonizacoesList = document.createElement("div")
    harmonizacoesList.classList.add("harmonizacao")

    const harmonizacaoIconContainer = document.createElement("div")
    harmonizacaoIconContainer.classList.add("display-icon-container")

    const harmonizacaoIcon = document.createElement("img")
    harmonizacaoIcon.src = harm.harmIcon

    const harmonizacaoName = document.createElement("p")
    harmonizacaoName.textContent = harm.harmName

    harmonizacaoIconContainer.appendChild(harmonizacaoIcon)
    harmonizacoesList.appendChild(harmonizacaoIconContainer)
    harmonizacoesList.appendChild(harmonizacaoName)

    harmonizacoesContainer.appendChild(harmonizacoesList)
  })

  acompanhamentoIconContainer.appendChild(acompanhamentoIcon)

  acompanhamentosList.appendChild(acompanhamentoIconContainer)
  acompanhamentosList.appendChild(acompanhamentoName)

  acompanhamentosContainer.appendChild(acompanhamentosSpan)
  acompanhamentosContainer.appendChild(acompanhamentosList)

  displayImgContainer.appendChild(displayImg)

  displayMainInformation.appendChild(displayTitle)
  displayMainInformation.appendChild(displayImgContainer)
  displayMainInformation.appendChild(displayDescription)

  display.appendChild(displayMainInformation)
  display.appendChild(acompanhamentosContainer)
  display.appendChild(harmonizacoesContainer)
}
