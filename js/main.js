$(document).ready(function () {
  // Toggle navbar on menu icon click
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Handle scroll and load events
  $(window).on("scroll load", function () {
    // Reset menu icon and navbar on scroll
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Add active class to header on scroll
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }

    // Highlight current section in navbar
    $("section").each(function () {
      var top = $(window).scrollTop();
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 200;

      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar")
          .find('[href="#' + id + '"]')
          .addClass("active");
      }
    });
  });
});
