const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const numberEl = document.querySelector('input');
const boxEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', onCreateClick);
btnDestroy.addEventListener('click', onDestroyClick);

function onCreateClick(event) {
  const inputNumber = numberEl.value;
  createBoxes(inputNumber);
}

function onDestroyClick(event) {
  destroyBoxes();
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = `<div
        style="width: ${size}px; height: ${size}px; 
        background-color: ${getRandomHexColor()}"
      ></div>`;
    boxEl.insertAdjacentHTML('beforeend', div);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  numberEl.value = '';
}


