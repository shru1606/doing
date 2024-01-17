function validateForm() {
    // Get form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password strength
    var passwordStrength = document.getElementById('password-strength');
    var strengthText = getPasswordStrength(password);
    passwordStrength.innerHTML = strengthText;

    // Validate other form fields
    if (name === '' || email === '' || dob === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Assuming validation is successful, show confirmation message
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
}

function getPasswordStrength(password) {
    // Password strength logic (you can customize this according to your needs)
    var strength = 0;

    if (password.length >= 8) {
        strength += 1;
    }

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }

    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }

    if (password.match(/[0-9]+/)) {
        strength += 1;
    }

    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    var strengthText = '';

    switch (strength) {
        case 0:
            strengthText = 'Weak';
            break;
        case 1:
        case 2:
            strengthText = 'Moderate';
            break;
        case 3:
        case 4:
            strengthText = 'Strong';
            break;
        case 5:
            strengthText = 'Very Strong';
            break;
        default:
            strengthText = '';
            break;
    }

    return 'Password Strength: ' + strengthText;
}
