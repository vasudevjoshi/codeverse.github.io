document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const validEmail = 'suryaprasad@gmail.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
        window.location.href = "home.html";  // Redirect to home.html
    } else {
        errorElement.textContent = 'Invalid email or password';
    }
});
