//Menu Button

let isMenuOpen = false;
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-b');
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('change');
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('menu-open');
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('menu-open');
  }
});


//notifications bell
const nav_bell = document.getElementById('nav-notification');
const notifications = document.querySelector('.notifications');
const mob_nav_bell = document.getElementById('mob-nav-notification');
const mob_notifications = document.querySelector('.mob-notifications');

nav_bell.addEventListener('click', () => {
  notifications.classList.toggle("notifications-active");
  if (notifications.classList.contains("notifications-active")) nav_bell.style.color = "skyblue";
  else nav_bell.style.color = "white";
})
mob_nav_bell.addEventListener('click', () => {
  mob_notifications.classList.toggle("mob-notifications-active");
  if (mob_notifications.classList.contains("mob-notifications-active")) mob_nav_bell.style.color = "skyblue";
  else mob_nav_bell.style.color = "white";
})

document.addEventListener("click", function (evt) {
  let notificationDiv = document.querySelector('.notifications'),
    notificationDiv2 = document.querySelector('.mob-notifications')
  targetElement = evt.target;  // clicked element

  do {
    if (targetElement == notificationDiv || targetElement == nav_bell || targetElement == mob_nav_bell || targetElement == notificationDiv2) {
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);

  // This is a click outside.
  notifications.classList.remove("notifications-active");
  nav_bell.style.color = "white";
  mob_notifications.classList.remove("mob-notifications-active");
  mob_nav_bell.style.color = "white";
});








//Active navigation on scroll

// const sections = document.querySelectorAll("section");
// const nava = document.querySelectorAll(".nav a");
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     console.log(sectionTop);
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 7) {
//       current = section.getAttribute("id");
//     }
//   });

//   nava.forEach((a) => {
//     a.classList.remove("active");
//     if (a.classList.contains(current)) {
//       a.classList.add("active");
//     }
//   });
// });

// Mobile menu dropdown code

(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('.nav-b ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navdrop').toggle();
      // Close one dropdown when selecting another
      $('.navdrop').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.navdrop').hide();
    });
  }); // end DOM ready
})(jQuery); // end jQuery

//Read more and read less 
var i=0;
function read(){
  if(!i){
    document.getElementById("more").style.display="inline";
    document.getElementById("read").innerHTML="Read Less";
    i=1;
  }
  else{
    document.getElementById("more").style.display="none";
    document.getElementById("read").innerHTML="Read More";
    i=0;
  }
}