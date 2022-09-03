// nav bar
// based on https://www.youtube.com/watch?v=gXkqy0b4M5g

// when the mouse is clicked on the burger
// set class to active and translate it to the left
function slideNav() {
  // get the burger and the nav bar links and store them in variables
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  // gets all nav links
  const navLinks = document.querySelectorAll('.nav-links a');


  burger.addEventListener('click', function(){
    // toggle nav bar
    nav.classList.toggle('nav-active');

    // animates the links of the nav bar with the index of the list
    navLinks.forEach(function(link, index){
      if (link.style.animation) {
        // set it to null
        ''
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`
      }
    })
  })



}

// calls the function
slideNav();




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
