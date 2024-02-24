// Function to toggle responsive behavior of the navigation bar
function myFunction() {
    // Get the element with the id "myTopnav"
    var x = document.getElementById("myTopnav");

    // Check if the element's class name is "topnav"
    if (x.className === "topnav") {
        // If the class name is "topnav", add the "responsive" class
        x.className += " responsive";
    } else {
        // If the class name is not "topnav", set it back to "topnav"
        x.className = "topnav";
    }
}
