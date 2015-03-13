$(document).ready(function() {
  
  $("#pictures").owlCarousel({
    margin: 20,
    loop: true,
    center: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    items: 3
  });
  
  $("#pictures-sm").owlCarousel({
    margin: 15,
    loop: true,
    center: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1000,
    items: 3
  });
});