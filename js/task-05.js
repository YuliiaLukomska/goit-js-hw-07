function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const body = document.body;
const colorName = document.querySelector('.color');
let randomColor = getRandomHexColor();

changeBtn.addEventListener('click', setBackgroundColor);

function setBackgroundColor() {
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
  randomColor = getRandomHexColor();
}
