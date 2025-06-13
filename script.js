document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        // const usernameValue = usernameInput.value.trim();

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();

        const passwordInput = document.getElementById('password');
        const passwordValue = passwordInput.value.trim();

        let isValid = true;
        let messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

    
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // Password Validation
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block"; 
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br>
            feedbackDiv.style.color = "#dc3545"; // Red for error
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light red background
        }
    });
});