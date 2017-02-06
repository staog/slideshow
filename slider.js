//Declaring global variables

var slide = document.getElementsByTagName('img')[1];
var text = document.getElementsByTagName('p')[0];
var images = ['images/alesund.jpg', 'images/grandturk.jpg', 'images/mazatlan.jpg',
 'images/puertovallarta.jpg', 'images/princesscays.jpg'];
var slider = setInterval(slideShow, 3000);
var sliderActive = true;
var timer = 0;

//Main slider function

function slideShow() {

  if (sliderActive == false){
    sliderActive = true;
  }
  timer++;

  if (timer == images.length) {
  timer = 0;
  }
  slide.setAttribute('src', images[timer]);
}

//Function for stoping slider and starting it again via mouse click

function startStop() {

  if (sliderActive == true) {
    clearInterval(slider);
    text.innerHTML = 'Click again to restart it.'
    sliderActive = false;
  } else {
    slider = setInterval(slideShow, 3000);
    text.innerHTML = 'Click on the image to stop slideshow.';
  }
}

slide.addEventListener('click', startStop);
