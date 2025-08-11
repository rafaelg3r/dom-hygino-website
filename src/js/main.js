const headerProducts = document.querySelector(".nav-produtos-container")
const headerProductsList = document.querySelector(".produtos-list-wrapper")

// const burguerProducts = document.querySelector(".burguer-produtos")
// const burguerProductsList = document.querySelector(
//   ".burguer-produtos-list-wrapper"
// )

const burguerMenu = document.getElementById("header-options")
const burguerMenuList = document.querySelector(".burguer-options")

headerProducts.addEventListener("mouseenter", () => {
  headerProductsList.classList.remove("hidden")
})

headerProducts.addEventListener("mouseleave", () => {
  headerProductsList.classList.add("hidden")
})

burguerMenu.addEventListener("click", () => {
  burguerMenuList.classList.toggle("hidden")
})

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#my-carousel", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 7000,
    arrows: false,
    pagination: true,
  }).mount()
})
