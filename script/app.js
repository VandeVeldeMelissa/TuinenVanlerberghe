document.addEventListener("DOMContentLoaded", function() {
    /* ---- SLIDESHOW ---- */
    currentSlide(1);
})

/* ------------------- MOBILE NAV  -------------------*/


function openMobileNav() {
    console.log('open');
    document.body.classList.add("has-mobile-nav");
    //document.querySelector("c-page").style.overflow = "hidden";
    document.getElementById("page").style.overflow = "hidden";
}

function closeMobileNav() {
    console.log('close');
    document.body.classList.remove("has-mobile-nav");
    //document.querySelector("c-page").style.overflow = "visible";
    document.getElementById("page").style.overflow = "visible";
    scrollToTop();
}

/* ------------------- SLIDESHOW  -------------------*/

var slideIndex = 0;
showSlides();
//add the global timer variable
var slides,dots,timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("c-slides");
    dots = document.getElementsByClassName("c-slides--dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" c-slide--active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " c-slide--active";
    //put the timeout in the timer variable
    timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    //clear/stop the timer
    console.log("next");
    clearTimeout(timer);
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" c-slide--active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " c-slide--active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" c-slide--active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " c-slide--active";
    //create a new timer
    timer = setTimeout(showSlides, 4000);
}

/* ------------------- IMAGES GALLERY  -------------------*/

// Open the Modal
function openModal() {
    document.querySelector('.c-modal').style.display = "flex";
    document.body.style.overflow = "hidden";
    scrollToTop();
}
  
// Close the Modal
function closeModal() {
    document.querySelector('.c-modal').style.display = "none";
    document.body.style.overflow = "visible";
}
  
var slideIndexGallery = 1;
showSlidesGallery(slideIndexGallery);
  
// Next/previous controls
function plusSlidesGallery(n) {
    showSlidesGallery(slideIndexGallery += n);
}
  
// Thumbnail image controls
function currentSlideGallery(n) {
    showSlidesGallery(slideIndexGallery = n);
}

function showSlidesGallery(n) {
    var i;
    var slides = document.getElementsByClassName("c-slides-gallery");
    if (n > slides.length) {slideIndexGallery = 1}
    if (n < 1) {slideIndexGallery = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndexGallery-1].style.display = "block";
}

/* -------- SCROLL TO TOP ------- */
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

/* -------- FOCUS DROPDOWN --------- */

function showDropdownOnderhoud() {
    console.log('focus');
    document.getElementById("onderhoud-dropdown").style.display = "block";
}

function showDropdownAanleg() {
    console.log('focus');
    document.getElementById("aanleg-dropdown").style.display = "block";
}

function hideDropdowns() {
    document.getElementById("onderhoud-dropdown").style.display = "none";
    document.getElementById("aanleg-dropdown").style.display = "none";
}