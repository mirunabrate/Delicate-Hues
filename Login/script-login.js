// Get the login, register, btn elements
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
// Function to switch to the register form
function register(){
    // Move the login form to the left to hide it
    x.style.left="-400px";
      // Move the register form to the left to display it
    y.style.left="50px";
     // Move the button to the left to highlight the register option
    z.style.left="110px"
}
// Function to switch to the login form
function login(){
     // Move the login form to the left to display it
    x.style.left="50px";
     // Move the register form to the right to hide it
    y.style.left="450px";
     // Move the button to the right to highlight the login option
    z.style.left="0px"
}




// Function to redirect to the home page
function redirectToHomePage(){
    // Redirect the user to the home page
    window.location.href = "../../Home/home.html";
}

// Function for the login process
function loginFunc(){
    // Get the values entered in the email and password fields for login
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve the list of users from local storage or initialize an empty list
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find the user in the list of users based on the entered email and password
    const user = users.find(u => u.email === email && u.password === password);

    // Check if the user is found in the list
    if(user){
        // Display a success message if the login is successful
        alert('Login successful!');
        // Redirect the user to the home page
        redirectToHomePage();
    } else {
        // Display an error message if the login fails
        alert('Invalid username or password');
    }
}



function validateForm() {
    var firstName = document.getElementById('registerFirstName').value;
    var lastName = document.getElementById('registerLastName').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsCheckbox = document.getElementById('termsCheckbox');
    const users = JSON.parse(localStorage.getItem('users')) || []

    // check if the username already exists
    if(users.find(u => u.email === email)){
        alert('User already exists. Please choose another.')
        return false;
    }

    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill out all required fields.');
        return false;
    }

    //mail validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // confirm the password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (!termsCheckbox.checked) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    // add the new user to the array
    users.push({email, password});

    // save the updated array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // If all validations pass, you can submit the form
    alert('Registration successful!');
    return true;
}