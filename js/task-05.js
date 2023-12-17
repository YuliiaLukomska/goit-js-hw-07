function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const body = document.body;
const colorName = document.querySelector('.color');

changeBtn.addEventListener('click', setBackgroundColor);

function setBackgroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
