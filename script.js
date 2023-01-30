
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
