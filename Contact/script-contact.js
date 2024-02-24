// Function to validate the form inputs
function validateForm() {
    // Clear any previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get the values of name, email, and message inputs and trim any leading/trailing whitespace
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value;

    // Validate the name input
    if (name === '') {
        // If name is empty, display an error message and stop form submission
        document.getElementById('nameError').textContent = 'Enter your name.';
        return;
    }

    // Regular expression pattern for validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate the email input against the email pattern
    if (!emailPattern.test(email)) {
        // If email format is invalid, display an error message and stop form submission
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        return;
    }

    // Validate the message input
    if (message.length === 0) {
        // If message is empty, display an error message and stop form submission
        document.getElementById('messageError').textContent = 'Enter a message.';
        return;
    }

    // If all inputs are valid, show a success message
    alert('Message sent!');

    // Clear the form inputs after successful submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}