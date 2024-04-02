let slideIndex = 0; // start with first slide

// function to move to the next or previous slide
function moveSlide(step) {
    showSlide(slideIndex += step);
}

// function to show specific slide
function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName('img');

    if (n >= slides.length) slideIndex = 0; // loop back to the first slide if reached the end

    if (n < 0) slideIndex = slides.length - 1;

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show the current slide
    slides[slideIndex].style.display = "block";
}

// autoplay functionality

function autoPlay() {
    moveSlide(1);
    setTimeout(autoPlay, 3000);  // change slide every 3 seconds
}

showSlide(slideIndex);
autoPlay(); 