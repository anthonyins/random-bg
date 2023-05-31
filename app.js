const bodyDiv = document.querySelector(".bg-color");
const btnClick = document.querySelector("#btn-click");
const btnOver = document.querySelector(".btn-over");
// const renkSonuc = document.querySelector(".renk");

const changeColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const renk = `rgb(${r},${g},${b})`;
  bodyDiv.style.backgroundColor = renk;
  // renkSonuc.innerText = `Background Color : ${renk}`
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
