{
const heightElement = document.querySelector(".js-height");
const formElement = document.querySelector(".js-form");
const weightElement = document.querySelector(".js-weight");
const bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();


  const height = heightElement.value;
  const weight = weightElement.value;

  const bmi = weight / (height / 100) ** 2;

  bmiElement.innerText = bmi.toFixed(2);
});

const btn = document.querySelector("a");
btn.addEventListener("mousemove", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX * 3 - rect.left;
  btn.style.setProperty("--x", x + "deg");
});
}