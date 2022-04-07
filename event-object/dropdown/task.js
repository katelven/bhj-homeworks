const dropdown = document.querySelector(".dropdown");
const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const item = Array.from(document.querySelectorAll(".dropdown__item"));


const menu = function (event) {
  event.preventDefault();
  value.textContent = event.target.closest(".dropdown__item").textContent;
};

const openMenu = function () {
  list.classList.toggle("dropdown__list_active");
  if (list.classList.contains("dropdown__list_active")) {
    item.forEach((item) => item.addEventListener("click", menu));
  }
};
dropdown.addEventListener("click", openMenu);