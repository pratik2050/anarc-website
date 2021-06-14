//Menu Button

let isMenuOpen = false;
const menuBtn = document.querySelector('.menu-btn');
const menu =document.querySelector('.nav-b');
menuBtn.addEventListener("click",() => {
    menu.classList.toggle('change');
 isMenuOpen = !isMenuOpen;
 if(isMenuOpen){
     menuBtn.classList.add('open');
     menu.classList.add('menu-open');
 }else{
    menuBtn.classList.remove('open');
    menu.classList.remove('menu-open');
 }
});


//Active navigation on scroll

const sections = document.querySelectorAll("section");
const nava = document.querySelectorAll(".nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop);
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight/7) {
      current = section.getAttribute("id");
    }
  });

  nava.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});
// Notification
// function showNotification()
// {
//   const notification = new Notification("New message from ANARC",{
//     body:"Hey, How R U",
//     icon:"https://media-exp1.licdn.com/dms/image/C4D0BAQGLrNTd9UJz7w/company-logo_200_200/0/1609912928597?e=2159024400&v=beta&t=mXoVE4fPFv7zuU2ZZP4jY7xSSBL1U-s2mgsK5O0AqSo"
//   });
// }
// console.log(Notification.permission);

// if(Notification.permission==="granted")
// {
//   showNotification();
// }
// else if(Notification.permission!=="denied")
// {
//   Notification.requestPermission().then(permission => {
//     showNotification();
//   });
// }
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('.nav-b ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navdrop').toggle();
      // Close one dropdown when selecting another
      $('.navdrop').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navdrop').hide();
    });
  }); // end DOM ready
})(jQuery); // end jQuery
