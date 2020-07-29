$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:3,
              nav:true,
          },
          1000:{
              items:4,
              nav:true,
          }
      }
  });
  
});

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })