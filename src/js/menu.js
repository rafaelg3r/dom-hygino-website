"use strict"

const linhaBoutique = document.getElementById("linhaBoutique")
const linhaNovilhoJovem = document.getElementById("linhaNovilhoJovem")
const linhaCampoNobre = document.getElementById("linhaCampoNobre")
const linhaPampeira = document.getElementById("linhaPampeira")
const linhaProdutos = document.getElementById("linhaProdutos")

const cardsContainer = document.querySelector(".menu-cards-container")
const card = document.querySelector(".menu-card")
// const linhaSelectedSpan = document.querySelector(".menu-selected")
// const linhaSelected =
const linhaNovilhoJovemCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card2: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
}
const linhaBoutiqueCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
  card2: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },
}
const linhaPampeiraCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },

  card2: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
}
const linhaCampoNobreCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },

  card2: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
}
const linhaProdutosCards = {
  card1: {
    imgSrc: "./src/assets/menu/menu-card-picanha.png",
    title: "Picanha",
    description: "Suculento, macio e saboroso",
  },

  card2: {
    imgSrc: "./src/assets/menu/menu-card-contrafile.png",
    title: "Contrafilé",
    description: "Suculento, macio e saboroso",
  },
  card3: {
    imgSrc: "./src/assets/menu/menu-card-maminha.png",
    title: "Maminha",
    description: "Maciez e sabor suave",
  },
  card4: {
    imgSrc: "./src/assets/menu/menu-card-vazio.png",
    title: "Vazio",
    description: "Maciez e sabor suave",
  },
}
const todasAsLinhasCards = {
  
}

const linhaClicada = sessionStorage.getItem("linhaSelecionada")
console.log(linhaClicada)
let linhaSelected; // variavel que guarda o objeto de um card de uma das linhas selecionadas
function cardsLoad(linhaSelected) {
  cardsContainer.innerHTML = ""
  console.log(linhaSelected)

  Object.values(linhaSelected).forEach((card) => {
    const menuCard = document.createElement("div")
    menuCard.classList.add("menu-card")

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
} else if (linhaClicada === "linhaCampoNobre") {
  linhaCampoNobre.classList.add("menu-selected")
  cardsLoad(linhaCampoNobreCards)
  linhaSelected = linhaCampoNobreCards
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
  console.log(linhaSelected)
}

const allLinhaCards = [
  linhaNovilhoJovemCards,
  linhaBoutiqueCards,
  linhaPampeiraCards,
  linhaCampoNobreCards,
  linhaProdutosCards,
]
const linhas = [
  linhaBoutique,
  linhaNovilhoJovem,
  linhaCampoNobre,
  linhaPampeira,
  linhaProdutos,
]

  linhas.forEach((linha) => {
    if (linha.classList.contains("menu-selected")) {
      console.log("Linha selecionada:", linha.id)
      let linhaSelected = eval(`${linha.id}Cards`)
      cardsLoad(linhaSelected)
    }
    linha.addEventListener("click", () => {
      linhas.forEach((item) => item.classList.remove("menu-selected"))
      linha.classList.add("menu-selected")
      // linhaSelectedSpan.textContent = linha.textContent
      let linhaSelected = eval(`${linha.id}Cards`)
      cardsLoad(linhaSelected)
      console.log(linhaSelected)
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
