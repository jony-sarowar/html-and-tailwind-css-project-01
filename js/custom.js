
// this code for active hamburger icon
// document.addEventListener('DOMContentLoaded', function() {
//   function Menu(e) {
//       let list = document.querySelector("ul");
//       e.name === "menu" ? ((e.name = "close"), list.classList.add("top-[75px]"))
//       : ((e.name = "menu"), list.classList.remove("top-[75px]"));
//   }

  
//   window.Menu = Menu;
// });


// owl carousel function
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
    }

  });
});

// wow scripts
new WOW().init();
      
