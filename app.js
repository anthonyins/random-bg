const bodyDiv = document.querySelector(".bg-color");
const btnClick = document.querySelector("#btn-click");
const btnOver = document.querySelector(".btn-over");

const changeColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const renk = `rgb(${r},${g},${b})`;
  bodyDiv.style.backgroundColor = renk;
};

window.addEventListener("load", () => {
  changeColor();
});
btnClick.addEventListener("click", () => {
  changeColor();
});

btnOver.addEventListener("mouseover", () => {
  changeColor();
});
