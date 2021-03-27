$(function () {
  //===== WOW JS =====//
  new WOW().init();

  // loader
  $(window).on("load", function (event) {
    $(".loader").delay(500).fadeOut(500);
  });

  //===== Owl Carousel =====//
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(".owl-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    // nav: true,
    // navText: [
    //   "<i class='fa fa-chevron-left'></i>",
    //   "<i class='fa fa-chevron-right'></i>",
    // ],
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
  });
  $(".owl-team").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".owl-clients").owlCarousel({
    loop: true,
    items: 2,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
  $(".owl-testimonials").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 30,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  });
  $(".owl-portfolio").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //===== Menu Active =====//
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
  var hash = window.location.hash.substr(1);
  if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {
    //$("nav .navbar-nav > li:first-child").addClass("active");
  } else {
    $(".sidebar__menu-list li").each(function () {
      $(this).removeClass("active");
    });
    if (hash != "")
      $(".sidebar__menu-list li a[href*='" + hash + "']")
        .parents("li")
        .addClass("active");
    else
      $(".sidebar__menu-list li a[href*='" + curpage + "']")
        .parents("li")
        .addClass("active");
  }

  //===== Click Show Menu =====//
  let button = document.querySelector(".header__button");
  let sidebar = document.querySelector(".header__sidebar");
  let overlay = document.querySelector(".header__overlay");
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    sidebar.classList.toggle("show");
  });
  overlay.addEventListener("click", () => {
    button.classList.remove("active");
    sidebar.classList.remove("show");
  });

  //===== Isotope =====//
  var $grid = $(".grid").imagesLoaded(function () {
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      gutter: 0,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-sizer",
      },
    });
  });
  //===== Isotope click function =====//
  $(".iso-nav a").click(function () {
    $(".iso-nav a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".grid").isotope({
      filter: selector,
    });
    return false;
  });

  //===== Back to Top =====//
  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
});
