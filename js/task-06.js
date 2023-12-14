function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function checkInput(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue >= 1 && inputValue <= 100) {
    createBtn.addEventListener('click', createBoxes(inputValue));
    input.value = '';
    createBtn.addEventListener('click', () => {
      boxes.innerHTML = '';
      createBoxes(inputValue);
    });
  } else {
    return;
  }
}

input.addEventListener('change', checkInput);

destroyBtn.addEventListener('click', () => {});

function createBoxes(amount) {
  const markupArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = '<div></div>';
    markupArray[i] = div;
  }
  const markup = markupArray.join('');
  boxes.insertAdjacentHTML('afterbegin', markup);

  const boxChild = boxes.children;
  console.log(boxChild);
  for (const div of boxChild) {
    console.log(div);
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = setBoxWidth();
    div.style.height = setBoxHeight();
  }
}

let startWidth = 20;
let startHeight = 20;

function setBoxWidth() {
  startWidth += 10;
  return `${startWidth}px`;
}

function setBoxHeight() {
  startHeight += 10;
  return `${startHeight}px`;
}
