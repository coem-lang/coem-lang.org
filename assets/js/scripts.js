const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", e => {
  e.preventDefault();
  if (nav.classList.toggle("open")) {
    navToggle.innerText = "×";
  } else {
    navToggle.innerText = "☰";
  }
  document.body.classList.toggle("navIsOpen");
});