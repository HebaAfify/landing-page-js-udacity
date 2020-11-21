/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Define Global Variables

//collect all sections in allSec variable 
const allSec = document.querySelectorAll('section');

//create mainUl variable to add elements to navigation bar  
const mainUl = document.getElementById('navbar__list');

//create document fragment to make high performance
const newFragment = document.createDocumentFragment();

//collect all links in allLinks variable
let allLinks = document.querySelectorAll('a');



let activeSection;
// build the nav

allSec.forEach((section)=>{
    let newLinkName = section.getAttribute('data-nav');
    let newLi = document.createElement('li');
    let newLink = document.createElement('a');
    let textNode = document.createTextNode(newLinkName);
    //Add event listner to scroll to section when link clicked
    newLink.addEventListener('click', function(event){
        event.preventDefault();
        section.scrollIntoView({behavior:'smooth'});
    });
    //append elements
    newLink.appendChild(textNode);
    newLi.appendChild(newLink);
    newFragment.appendChild(newLi);
})

//append elements in fragment to Ul
mainUl.appendChild(newFragment);

// start a scroll button 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// end scroll button




function activeLink(activeSection){

  window.addEventListener("scroll", function(){
    let links = document.querySelectorAll('a');
    let active__link = activeSection.getAttribute('data-nav');
    links.forEach((link) => {
      link.querySelectorAll('a');
      link.classList.remove('active__link');
    })
    links.forEach((link) => {
      if (link.textContent === active__link){
        link.querySelectorAll('a');
        link.classList.add('active__link');
      }
    })
  })
  }
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function(){
  allSec.forEach(section => {
    section.querySelectorAll('section');
    section.classList.remove('your-active-class');
  })
    allSec.forEach((section)=>{
      section.querySelectorAll('section');
      let coordinates = section.getBoundingClientRect();
      if(coordinates.top >= 0 && coordinates.bottom < window.innerHeight ){
        section.classList.add('your-active-class');
        activeLink(section);
      } 
    })
});

// Scroll to anchor ID using scrollTO event


// Build menu 



// Set sections as active


