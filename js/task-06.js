const inputFormEl = document.querySelector('#validation-input');

inputFormEl.addEventListener('blur', onInputElBlur);
inputFormEl.addEventListener('focus', onInputElFocus);

function onInputElBlur (event) {
    const el = event.target.value;
    const length = Number(event.target.dataset.length);
    
    if (el.length === length) {
        event.target.classList.add('valid');
    } else {
        event.target.classList.add('invalid');
    }
    console.log(onInputElBlur);
};

function onInputElFocus (event) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
};

