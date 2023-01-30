
const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarLinks = document.getElementsByClassName('navbar__links')[0]
 
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

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


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }
var slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
  plusSlides(1);
}, 5000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}