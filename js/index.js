(function ($) {
  $(".w-90-p").animate(
    {
      width: "90%",
    },
    2500
  );
  $(".w-90-p").animate(
    {
      width: "90%",
    },
    2500
  );
  $(".w-86-p").animate(
    {
      width: "86%",
    },
    2500
  );
  $(".w-40-p").animate(
    {
      width: "40%",
    },
    2500
  );
  $(".w-60-p").animate(
    {
      width: "60%",
    },
    2500
  );
  $(".w-100-p").animate(
    {
      width: "100%",
    },
    2500
  );
  $(".w-55-p").animate(
    {
      width: "55%",
    },
    2500
  );
  $(".w-87-p").animate(
    {
      width: "87%",
    },
    2500
  );
  $(".w-93-p").animate(
    {
      width: "93%",
    },
    2500
  );
  $(".w-50-p").animate(
    {
      width: "50%",
    },
    2500
  );
  $(".counter").counterUp();
})(jQuery);

(function ($) {
  $(".home-qualification .inner h4").animate(
    {
      marginTop: "40px",
    },
    2000
  );
})(jQuery);

(function ($) {
  "use strict";
  var $grid = $(".filter-items").isotope();
  $(".filter ul").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);

(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      // navText: "<>",
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
        },
        600: {
          items: 3,
          nav: false,
          dots: true,
        },
        1000: {
          items: 6,
          //   nav: false,
          dots: true,
          loop: false,
        },
      },
    });
  });
})(jQuery);

(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".client-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      // navText: "<>",
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
        },
        600: {
          items: 3,
          nav: false,
          dots: true,
        },
        1000: {
          items: 4,
          nav: false,
          dots: true,
          loop: false,
        },
      },
    });
  });
})(jQuery);



(function ($) {

  $('.home-blog .col-md-4 .item img').animate({
    with: "100%",
  }, 10000);

  $(window).on('load', function () {
    $('#preloader_inner').fadeOut(2000);
    $('#preloader').fadeOut(2000);
    $(body).css({
      'overflow': 'visible'
    });

  });


  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').on('click', function () {
    $('html,body').animate({
      scrollTop: "0"
    }, 1000);

    return false;
  });
})(jQuery);