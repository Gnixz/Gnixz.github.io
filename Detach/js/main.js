// Sticky Menu //
var header = {
  init: function () {
    this.stickyMenu();
  },
  stickyMenu: function () {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("#header");
      header.classList.toggle("sticky", window.scrollY > 120);
    });
  },
};
header.init();

// Scroll Hidden Menu //
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

//Responsive Menu //
// var button = document.querySelector(".header__menu-button");
// console.log(button);
// var menuList = document.querySelector(".header__menu-list");
// var menuFixed = document.querySelector(".header");

// button.addEventListener("click", function () {
//   menuList.classList.toggle("responsive");
//   menuFixed.classList.toggle("active");
// });

// Click show SubMenu //
// let listItem = Array.from(document.querySelectorAll(".list__item-link"));
// let submenu = Array.from(document.querySelectorAll(".submenu"));

// listItem.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log(this.nextElementSibling);
//     this.nextElementSibling.classList.toggle("show");
//     submenu.not(this).nextElementSibling.classList.remove("show");
//   });
// });

// Modal //
var modalBtns = Array.from(document.querySelectorAll(".icon__search"));
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    document.getElementById("body").classList.add("hidden-scroll-y");
    document.getElementById("body").classList.add("p-r-17");
    document.getElementById("header").classList.add("p-r-17");
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.getElementById("body").classList.remove("hidden-scroll-y");
    document.getElementById("body").classList.remove("p-r-17");
    document.getElementById("header").classList.remove("p-r-17");
  }
};

var closeBtns = Array.from(document.querySelectorAll(".closes"));
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    modal.style.display = "none";
    document.getElementById("body").classList.remove("hidden-scroll-y");
    document.getElementById("body").classList.remove("p-r-17");
    document.getElementById("header").classList.remove("p-r-17");
  };
});
var closeBtns = Array.from(document.querySelectorAll(".close-top"));
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    modal.style.display = "none";
    document.getElementById("body").classList.remove("hidden-scroll-y");
    document.getElementById("body").classList.remove("p-r-17");
    document.getElementById("header").classList.remove("p-r-17");
  };
});

// Owl Carousel //
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-service").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    992: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$(".owl-clients").owlCarousel({
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
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});
$(".owl-testimonial").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

// Isotope //
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

// Isotope click function
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

// Back to Top //
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

//===== Mobile Menu

$(".header__menu-button").on("click", function () {
  $(".header__menu-list").toggleClass("responsive");
});
(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $(".header__menu-list li a:not(:only-child)").click(function (e) {
      $(this).siblings(".submenu").toggleClass("show");
      // Close one dropdown when selecting another
      $(".submenu").not($(this).siblings()).removeClass("show");
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".submenu").css("display", "");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
