// Example JavaScript to ensure basic form validation (for registration and login)
document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (!email || !password) {
            alert('Please fill in both email and password fields.');
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
