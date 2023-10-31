const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    const size = event.target.value;
    textEl.style.fontSize = `${size}px`
}
