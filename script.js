let heightElement = document.querySelector(".js-height");
let formElement = document.querySelector(".js-form");
let weightElement = document.querySelector(".js-weight");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let height = heightElement.value;
  let weight = weightElement.value;

  let bmi = weight / (height / 100) ** 2;

  bmiElement.innerText = bmi.toFixed(2);
});

let btn = document.querySelector("a");
btn.addEventListener("mousemove", (e) => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX * 3 - rect.left;
  btn.style.setProperty("--x", x + "deg");
});
