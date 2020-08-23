// Get the current year for copyright
$("#year").text(new Date().getFullYear());


/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () {
  checkScroll();
  $(window).scroll(checkScroll);
});

function checkScroll() {
  if ($(window).scrollTop() >= 300) {
    $('.navigation').addClass('solid');
  } else {
    $('.navigation').removeClass('solid');
  }
}