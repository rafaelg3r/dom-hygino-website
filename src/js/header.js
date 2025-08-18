"use strict"
// header products dropdown on pc
const headerProducts = document.querySelector(".nav-produtos-container")
const headerProductsList = document.querySelector(".produtos-list-wrapper")
headerProducts.addEventListener("mouseenter", () => {
  headerProductsList.classList.remove("hidden")
})

headerProducts.addEventListener("mouseleave", () => {
  headerProductsList.classList.add("hidden")
})

// burguer menu options
const burguerMenu = document.getElementById("header-options")
const burguerMenuList = document.querySelector(".burguer-options")
const burguerMenuItem = document.querySelectorAll(".burguer-option")

burguerMenu.addEventListener("click", () => {
  burguerMenuList.classList.toggle("hidden")
})

burguerMenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    burguerMenuList.classList.add("hidden")
  })
})
