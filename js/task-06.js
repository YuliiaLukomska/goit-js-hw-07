function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
let startBoxWidth = 30;
let startBoxHeight = 30;

createBtn.addEventListener('click', () => {
  const inputValue = Number(input.value);
  if (inputValue >= 1 && inputValue <= 100) {
    boxes.innerHTML = '';
    createBoxes(inputValue);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${startBoxWidth + i * 10}px`;
    div.style.height = `${startBoxHeight + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
  }
}
