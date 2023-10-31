const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
    if (email === '' || password === '') {
        alert(`Всі поля повинні бути заповнені!`);
    }

     const result = { email, password };
    
    console.log(result);
    event.target.reset();
};