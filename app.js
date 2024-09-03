/* Created by Tivotal */

let toggleTags = document.querySelectorAll(".form-toggle a");
let wrapper = document.querySelector(".wrapper");
let btns = document.querySelectorAll(".btn");

toggleTags.forEach((btn) => {
  btn.addEventListener("click", () => {
    wrapper.classList.toggle("signup-active");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
});
