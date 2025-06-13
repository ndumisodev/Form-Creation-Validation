

const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const usernameValue = usernameInput.value.trim();

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value.trim();

    let isValid = true;
    let messages = [];

    if (usernameValue.length < 3){
        isValid = false;
        messages.push("Username can not be less than 3 charecters")
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailValue) ){
        isValid = false;
        messages.push("Please enter a valid email address.")
    }

    if (passwordValue.length < 8){
        isValid = false;
        messages.push("Password must be at least 8 characters long.")
    }

})