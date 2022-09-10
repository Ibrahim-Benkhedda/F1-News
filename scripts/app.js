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




// slider [1]
function slider() {
  // gets the images by class img-slider
  let imgSlier = document.getElementsByClassName('img-slider');
  let index = 0;
  // numbers of images
  let n = imgSlier.length;

  // removes the active image
  function removeActiveImgs() {
    // iterates through all all the array of images
      for(let i = 0 ; i < n ; i++) {
          imgSlier[i].classList.remove('active');
      }
  }

  setInterval(function() {
      index++;
      // if the current index is bigger than or equals the number of the images of the array
      if(index >= n) {
          // sets the index to 0
          index = 0;
      }
      removeActiveImgs();
      // adds class active to the image
      imgSlier[index].classList.add('active');
  }, 2750)
}


window.onload = function() {
  // checks if the user url is on the schedule or news page to call the slider function [10]
  if((window.location.href.indexOf('schedule.html') > -1) || (window.location.href.indexOf('news.html') > -1) ) {
    // console.log('schedule');
    slider();
  }
}


// FAQ cards [4]
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
