// Image Slider 
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// Products section
// Product 1
// store the element with the id 'productImg' in the variable 'image'
const image = document.getElementById('productImg');

// Select all elements with the class 'btn' and store them in the variable 'btns'
const btns = document.querySelectorAll('.btn');

// Add a click event listener to the first button in the list of buttons
btns[0].addEventListener('click', function () {
    // Change the image source displayed in the 'image' element to the path of another image
    image.src = '../imagini/decor6.webp';
    // For each button in the list of buttons, remove the 'active' class 
    for (btn of btns) {
        btn.classList.remove('active');
    }
    // Add the 'active' class to the button clicked 
    this.classList.add('active');
});

// Add a click event listener to the second button in the list of buttons
btns[1].addEventListener('click', function () {
    image.src = '../imagini/decor7.webp';
    for (btn of btns) {
        btn.classList.remove('active');
    }
    this.classList.add('active');
});

// Add a click event listener to the third button in the list of buttons
btns[2].addEventListener('click', function () {
    image.src = '../imagini/decor8.webp';
    for (btn of btns) {
        btn.classList.remove('active');
    }
    this.classList.add('active');
});

// Product 2
const image2 = document.getElementById('productImg2');
const btns2 = document.querySelectorAll('.btn2');

btns2[0].addEventListener('click', function () {
    image2.src = '../imagini/clock3.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

btns2[1].addEventListener('click', function () {
    image2.src = '../imagini/clock4.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

btns2[2].addEventListener('click', function () {
    image2.src = '../imagini/clock5.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

// Product 3
const image3 = document.getElementById('productImg3');
const btns3 = document.querySelectorAll('.btn3');

btns3[0].addEventListener('click', function () {
    image3.src = '../imagini/sculpture.webp';
    for (btn3 of btns3) {
        btn3.classList.remove('active');
    }
    this.classList.add('active');
});

btns3[1].addEventListener('click', function () {
    image3.src = '../imagini/sculpture2.webp';
    for (btn3 of btns3) {
        btn3.classList.remove('active');
    }
    this.classList.add('active');
});

btns3[2].addEventListener('click', function () {
    image3.src = '../imagini/sculpture3.webp';
    for (btn3 of btns3) {
        btn3.classList.remove('active');
    }
    this.classList.add('active');
});

// Product 4
const image4 = document.getElementById('productImg4');
const btns4 = document.querySelectorAll('.btn4');

btns4[0].addEventListener('click', function () {
    image4.src = '../imagini/decor9.webp';
    for (btn4 of btns4) {
        btn4.classList.remove('active');
    }
    this.classList.add('active');
});

btns4[1].addEventListener('click', function () {
    image4.src = '../imagini/decor11.webp';
    for (btn4 of btns4) {
        btn4.classList.remove('active');
    }
    this.classList.add('active');
});

btns4[2].addEventListener('click', function () {
    image4.src = '../imagini/decor10.webp';
    for (btn4 of btns4) {
        btn4.classList.remove('active');
    }
    this.classList.add('active');
});

// Scroll to Products section
function scrollToDecorInfoSection() {
    var decorInfoSection = document.getElementById('decor-info-section');
    decorInfoSection.scrollIntoView({ behavior: 'smooth' });
}