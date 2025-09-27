const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const mainnav = document.querySelector("nav");
const title = document.querySelector("h1");

const today = new Date();
currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

menuButton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  menuButton.classList.toggle("show");
  title.classList.toggle("hidden");
});
