// burguer menu options and navbar products expand list
const headerProducts = document.querySelector(".nav-produtos-container")
const headerProductsList = document.querySelector(".produtos-list-wrapper")

const burguerMenu = document.getElementById("header-options")
const burguerMenuList = document.querySelector(".burguer-options")
const burguerMenuItem = document.querySelectorAll(".burguer-option")

headerProducts.addEventListener("mouseenter", () => {
  headerProductsList.classList.remove("hidden")
})

headerProducts.addEventListener("mouseleave", () => {
  headerProductsList.classList.add("hidden")
})

burguerMenu.addEventListener("click", () => {
  burguerMenuList.classList.toggle("hidden")
})

burguerMenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    burguerMenuList.classList.add("hidden")
  })
})

//* Menu
// menu selectors options

//menu cards
const card = document.querySelector(".menu-card")
const cardsContainer = document.querySelector(".menu-cards-container")
// const linhaSelectedSpan = document.querySelector(".menu-selected")
// const linhaSelected =
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
const linhaCampoNobreCards = {}
const linhaProdutosCards = {}

const allLinhaCards = [
  linhaNovilhoJovemCards,
  linhaBoutiqueCards,
  linhaPampeiraCards,
  linhaCampoNobreCards,
  linhaProdutosCards,
]

document.addEventListener("DOMContentLoaded", function () {
  const btnLinhaBoutique = document.querySelector("btnLinhaBoutique")
  const btnLinhaNovilhoJovem = document.querySelector("btnLinhaNovilhoJovem")
  const btnLinhaCampoNobre = document.getElementById("btnLinhaCampoNobre")
  const btnLinhaPampeira = document.querySelector("btnLinhaPampeira")
  const btnLinhaProdutos = document.querySelector("btnLinhaProdutos")
  const linhasBtns = [
    btnLinhaBoutique,
    btnLinhaNovilhoJovem,
    btnLinhaCampoNobre,
    btnLinhaPampeira,
    btnLinhaProdutos,
  ]
  console.log(linhasBtns)
  console.log(linhasBtns.length)

  if (linhasBtns.length > 0) {
    linhasBtns.forEach((linhaBtn) => {
      linhaBtn.addEventListener("click", () => {
        linhaSelected =
          allLinhaCards[linhaBtn.id.replace("btn", "").toLowerCase()]
        console.log(`${linhaBtn.id} clicado`)
        console.log(linhaSelected)
      })
    })
  } else {
    console.warn('Nenhum botão de linha encontrado com ID começando com "btn"')
  }

  // const btnLinhaNovilhoJovem = document.getElementById("btnLinhaNovilhoJovem")
  // const btnLinhaBoutique = document.getElementById("btnLinhaBoutique")
  // const btnLinhaPampeira = document.getElementById("btnLinhaPampeira")
  // const btnLinhaProdutos = document.getElementById("btnLinhaProdutos")
  // const btnLinhaCampoNobre = document.getElementById("btnLinhaCampoNobre")
  // console.log(btnLinhaProdutos)
  // console.log(btnLinhaCampoNobre)
  // console.log(btnLinhaPampeira)

  // const linhasBtns = [
  //   btnLinhaNovilhoJovem,
  //   btnLinhaBoutique,
  //   btnLinhaPampeira,
  //   btnLinhaProdutos,
  //   btnLinhaCampoNobre,
  // ]
  let linhaSelected = "LinhaBoutique"

  linhasBtns.forEach((linhaBtn) => {
    linhaBtn.addEventListener("click", () => {
      linhaSelected =
        allLinhaCards[linhaBtn.id.replace("btn", "").toLowerCase()]

      console.log(`${linhaBtn.id} clicado`)
      console.log(linhaSelected)
    })
  })
  // linhas

  const linhaBoutique = document.getElementById("linhaBoutique")
  const linhaNovilhoJovem = document.getElementById("linhaNovilhoJovem")
  const linhaCampoNobre = document.getElementById("linhaCampoNobre")
  const linhaPampeira = document.getElementById("linhaPampeira")
  const linhaProdutos = document.getElementById("linhaProdutos")
  const linhas = [
    linhaBoutique,
    linhaNovilhoJovem,
    linhaCampoNobre,
    linhaPampeira,
    linhaProdutos,
  ]

  linhas.forEach((linha) => {
    if (linha.classList.contains("menu-selected")) {
      linhaSelected = eval(`${linha.id}Cards`)
      cardsLoad(linhaSelected)
    }
    linha.addEventListener("click", () => {
      linhas.forEach((item) => item.classList.remove("menu-selected"))
      linha.classList.add("menu-selected")
      // linhaSelectedSpan.textContent = linha.textContent
      linhaSelected = eval(`${linha.id}Cards`)
      cardsLoad(linhaSelected)
    })
    // carrega os cards da linha ja selecionada ao carregar a pagina
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

  // splide carousel
})
