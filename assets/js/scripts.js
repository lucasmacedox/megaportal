// Global variable to track the current slide
var slideItem = 0;
// Variable to store the interval for automatic slide transition
var slideInterval;

/**
 * Function executed when the page is loaded.
 * Initializes the slide and sets the slide sizes.
 */
window.onload = function () {
    startSlideInterval();

    // Get the width of the slideshow element
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    // Set the width of each slide based on the slideshow width
    var objs = document.getElementsByClassName("slide");
    for (var i = 0; i < objs.length; i++) {
        objs[i].style.width = slidewidth + "px";
    }
};

/**
 * Starts the interval for automatic slide transition.
 */
function startSlideInterval() {
    slideInterval = setInterval(function () {
        slidePass(); // Move to the next slide
        updateSlideCircle(); // Update the active slide indicator
    }, 2000); // 2-second interval for automatic transition
}

/**
 * Moves to the next slide.
 */
function slidePass() {
    // Get the width of the slideshow element
    var slidewidth = document.getElementById("slideshow").offsetWidth;

    if (slideItem >= 3) {
        slideItem = 0;
    } else {
        slideItem++;
    }

    // Apply negative left margin to show the next slide
    document.getElementsByClassName("slideshow-container")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

/**
 * Changes the slide based on the received index.
 * @param {number} pos - Index of the slide to display.
 */
function changerSlide(pos) {
    slideItem = pos;
    updateSlideCircle(); // Update the active slide indicator

    // Get the width of the slideshow element
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    // Apply negative left margin to show the selected slide
    document.getElementsByClassName("slideshow-container")[0].style.marginLeft = "-" + (slidewidth * slideItem) + "px";
}

/**
 * Updates the active slide indicator.
 */
function updateSlideCircle() {
    // Select all elements with the 'slide-circle' class
    var slideCircles = document.querySelectorAll('.slide-circle');

    // Remove the 'active' class from all elements
    slideCircles.forEach(function (circle, index) {
        if (index === slideItem) {
            circle.classList.add('active'); // Add the 'active' class to the current slide
        } else {
            circle.classList.remove('active'); // Remove the 'active' class from other slides
        }
    });
}

/**
 * Toggles the menu display.
 */
function toggleMenu() {
    var menu = document.getElementById("menu");

    // Check if the menu is hidden or visible
    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = "block"; // Display the menu
    } else {
        menu.style.display = "none"; // Hide the menu
    }
}
