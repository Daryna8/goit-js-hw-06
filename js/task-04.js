const decrBtnEl = document.querySelector('[data-action="decrement"]')
const incrBtnEl = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')

decrBtnEl.addEventListener('click', onDecrBtnClick)
incrBtnEl.addEventListener('click', onIncrBtnClick)

let counterValue = 0;

function onDecrBtnClick (event) {
 counterValue -= 1;
 valueEl.textContent = counterValue;
}

function onIncrBtnClick (event) {
counterValue +=1;
valueEl.textContent = counterValue;
}