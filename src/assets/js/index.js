$(document).ready(function () {
  $(".navbar-toggler-icon").click(function () {
    $(".navbar-nav").slideToggle(500);
  });
  $(window).resize(function () {
    if ($(window).width() > 768){
      $('.navbar-nav').removeAttr('style');
    }
  });
  $("#submit").click(function (e) {
    e.preventDefault();
    alert("Submit clicked!");
  });
});
