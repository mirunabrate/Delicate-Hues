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
const image = document.getElementById('productImg');
const btns = document.querySelectorAll('.btn');

btns[0].addEventListener('click', function () {
    image.src = '../imagini/tableware5.webp';
    for (btn of btns) {
        btn.classList.remove('active');
    }
    this.classList.add('active');
});

btns[1].addEventListener('click', function () {
    image.src = '../imagini/tableware6.webp';
    for (btn of btns) {
        btn.classList.remove('active');
    }
    this.classList.add('active');
});

btns[2].addEventListener('click', function () {
    image.src = '../imagini/tableware7.webp';
    for (btn of btns) {
        btn.classList.remove('active');
    }
    this.classList.add('active');
});

// Product 2
const image2 = document.getElementById('productImg2');
const btns2 = document.querySelectorAll('.btn2');

btns2[0].addEventListener('click', function () {
    image2.src = '../imagini/tableware8.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

btns2[1].addEventListener('click', function () {
    image2.src = '../imagini/tableware9.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

btns2[2].addEventListener('click', function () {
    image2.src = '../imagini/tableware10.webp';
    for (btn2 of btns2) {
        btn2.classList.remove('active');
    }
    this.classList.add('active');
});

// Product 3
const image3 = document.getElementById('productImg3');
const btns3 = document.querySelectorAll('.btn3');

btns3[0].addEventListener('click', function () {
    image3.src = '../imagini/tableware12.webp';
    for (btn3 of btns3) {
        btn3.classList.remove('active');
    }
    this.classList.add('active');
});

btns3[1].addEventListener('click', function () {
    image3.src = '../imagini/tableware11.webp';
    for (btn3 of btns3) {
        btn3.classList.remove('active');
    }
    this.classList.add('active');
});


// Product 4
const image4 = document.getElementById('productImg4');
const btns4 = document.querySelectorAll('.btn4');

btns4[0].addEventListener('click', function () {
    image4.src = '../imagini/tableware13.webp';
    for (btn4 of btns4) {
        btn4.classList.remove('active');
    }
    this.classList.add('active');
});

btns4[1].addEventListener('click', function () {
    image4.src = '../imagini/tableware14.webp';
    for (btn4 of btns4) {
        btn4.classList.remove('active');
    }
    this.classList.add('active');
});

btns4[2].addEventListener('click', function () {
    image4.src = '../imagini/tableware15.webp';
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