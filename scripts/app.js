// slider
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active');
    }
}


setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 3000)


// FAQ cards
const faqCols = document.querySelectorAll('.col-faq');
 faqCols.forEach(function(faqCol) {
   faqCol.addEventListener('click', function(e) {
     // console.log('working');
     currentCol = e.currentTarget.querySelector('p');

     if (currentCol.classList.contains('active')) {
       currentCol.classList.remove("active");
     }
     else {
       currentCol.classList.add("active");
     }
   })
 });
