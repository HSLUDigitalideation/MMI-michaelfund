// Scroll slow down //

$(document).ready(function(){
  // Add smooth scrolling to all links
 "use strict"; $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




// stick navbar to top //


$(document).ready(function() {
 
 "use strict";  $(window).scroll(function () { 
// console.log to find out where i want to scroll to
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 1067) {
      $('.three-titles2').addClass('three-titles2-fixed');
    }

    if ($(window).scrollTop() < 1067) {
      $('.three-titles2').removeClass('three-titles2-fixed');
    }
  });
});