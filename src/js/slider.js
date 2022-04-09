var slides  = document.querySelectorAll('.container-project_content');
var prev = document.querySelector('.icon-arrow_left');
var next = document.querySelector('.icon-arrow_right')

var currentSlide = 0;

function nextSlide() {
  changeSlide(currentSlide+1);
}
function prevSlide(){
  changeSlide(currentSlide-1);
}

function changeSlide(n){
  slides[currentSlide].className = 'hide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'container-project_content show';
}

next.onclick = function(){
  nextSlide();
}
prev.onclick = function(){
  prevSlide();
}