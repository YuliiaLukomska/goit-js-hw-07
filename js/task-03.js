const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const updateValue = event => {
  const outputValue = event.currentTarget.value.trim();
  if (outputValue === '' || outputValue === ' ') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = outputValue;
  }
};

input.addEventListener('input', updateValue);
