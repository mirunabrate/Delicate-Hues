// Initialize the slide index
let slideIndex = 0;
// Call the showSlides function to start the slideshow
showSlides();

// Function to display the slides in the slideshow
function showSlides() {
  // Declare variables
  let i;
  // Get all elements with the class "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  // Get all elements with the class "dot"
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Increment the slide index
  slideIndex++;

  // If slide index exceeds the number of slides, reset it to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add the "active" class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // Call the showSlides function again after 5 seconds to change the slide
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// adds an event listener for the "Check Out the Product" button
// and redirects the user to the "decor.html" page at the section with the id "product1".
document.getElementById('checkProductButton1').addEventListener('click', function() {
  window.location.href = '../Decor/decor.html#product1';
});
document.getElementById('checkProductButton2').addEventListener('click', function() {
  window.location.href = '../Vases/vases&flowers.html#product2';
});
document.getElementById('checkProductButton3').addEventListener('click', function() {
  window.location.href = '../Candles/candles&lighting.html#product3';
});



// Filter for Current Promotions section
// Function to initialize filter with "all" category selected
filterSelection("all");

// Function to filter elements based on category
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column-offers");
  // If category is "all", reset filter
  if (c == "all") c = "";
  // Iterate through elements
  for (i = 0; i < x.length; i++) {
    // Hide elements not in selected category
    w3RemoveClass(x[i], "show");
    // Show elements in selected category
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Function to add class to element
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  // Iterate through classes to add
  for (i = 0; i < arr2.length; i++) {
    // Add class if not already present
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Function to remove class from element
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  // Iterate through classes to remove
  for (i = 0; i < arr2.length; i++) {
    // Remove class while it exists in the element's classes
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  // Update element's classes after removal
  element.className = arr1.join(" ");
}

// Add active class to the current button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-offer");
    current[0].className = current[0].className.replace(" active-offer", "");
    this.className += " active-offer";
  });
}