var ypos, image1, image2;
function parallax(){
  ypos = window.pageYOffset;
  image1 = document.getElementById('image1');
  image1.style.top = ypos * .4 + "px"
}
window.addEventListener('scroll', parallax);
