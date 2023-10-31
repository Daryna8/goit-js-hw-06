const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output')

nameInputEl.addEventListener('input', onNameInput);

function onNameInput (event) {
    const inputValue = event.target.value;

    if (inputValue === '') {
      nameOutputEl.textContent = 'Anonymous';
    } else {
      nameOutputEl.textContent = inputValue;
    }
};

