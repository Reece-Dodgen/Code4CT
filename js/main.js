    // Hamburger nav bar
function myFunction() {
    var x = document.getElementById("myMainNav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}

    // Slideshow
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){slideIndex = 1}
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); //Allows image to change every 2 seconds
}

var slideIndex = 0;
showSlides();
    

    //variable object for progress bar start angle, value and colour
    var progressBarOptions = {
        startAngle: -1.55,
        value: 0.85,
        fill: {
            color: '#e38f84'
        }
    }
    // jQuery styling of progress bars
    $('.timer').mouseover(function() {
      $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
      });
    // jQuery styling of progress bars
     $('#circle-b').circleProgress({
        value : 0.80,
        fill: {
          color: '#e38f84'
        }
      });
    // jQuery styling of progress bars
     $('#circle-c').circleProgress({
        value : 0.90,
        fill: {
          color: '#e38f84'
        }
      });
    // jQuery styling of progress bars
     $('#circle-d').circleProgress({
        value : 0.97,
        fill: {
          color: '#e38f84'
        }
      });
    });