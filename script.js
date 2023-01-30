//toggle navbar on mobile responsive
const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]
 
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
//toggle navbar active 
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    localStorage.setItem('activeNavItem', this.getAttribute('href'));
  });
});
const activeNavItem = localStorage.getItem('activeNavItem');
if (activeNavItem) {
  const activeItem = document.querySelector(`[href="${activeNavItem}"]`);
  if (activeItem) {
    navItems.forEach(item => item.classList.remove('active'));
    activeItem.classList.add('active');
  }
}
//toggle section redirect on venue, travel, acc and sightseeing button
$(document).ready(function() {
  $("#button1").click(function() {
      $("html, body").animate({ scrollTop: $("#section1").offset().top }, 1000);
  });
  $("#button2").click(function() {
      $("html, body").animate({ scrollTop: $("#section2").offset().top }, 1000);
  });
  $("#button3").click(function() {
      $("html, body").animate({ scrollTop: $("#section3").offset().top }, 1000);
  });
  $("#button4").click(function() {
      $("html, body").animate({ scrollTop: $("#section4").offset().top }, 1000);
  });
});

//toggle 2 slideshow at the same page 
var slideIndex = [1,1];
var slideId = ["mySlides", "mySlides1"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
//auto slide at 5 sec
setInterval(function() {
  for (var i = 0; i < 2; i++) {
    plusSlides(1, i);
  }
  }, 5000);

