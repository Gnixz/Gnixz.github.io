// Preloader
$(window).on("load", function (event) {
  $(".preloader").delay(500).fadeOut(500);
});

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

// Modal //
var modalBtns = Array.from(document.querySelectorAll(".icon__search"));
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    document.querySelector("body").classList.add("hidden-scroll-y");
    document.querySelector("body").classList.add("p-r-17");
    document.getElementById("header").classList.add("p-r-17");

    var closeButton = Array.from(document.querySelectorAll(".closes"));
    closeButton.forEach(function (btn) {
      btn.onclick = function () {
        var modal = btn.closest(".modal");
        modal.style.display = "none";
        document.querySelector("body").classList.remove("hidden-scroll-y");
        document.querySelector("body").classList.remove("p-r-17");
        document.getElementById("header").classList.remove("p-r-17");
      };
    });
    var closeBtns = Array.from(document.querySelectorAll(".close-top"));
    closeBtns.forEach(function (btn) {
      btn.onclick = function () {
        var modal = btn.closest(".modal");
        modal.style.display = "none";
        document.querySelector("body").classList.remove("hidden-scroll-y");
        document.querySelector("body").classList.remove("p-r-17");
        document.getElementById("header").classList.remove("p-r-17");
      };
    });
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
    document.querySelector("body").classList.remove("hidden-scroll-y");
    document.querySelector("body").classList.remove("p-r-17");
    document.getElementById("header").classList.remove("p-r-17");
  }
};

// Owl Carousel //
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-banner").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});
$(".owl-boxes").owlCarousel({
  items: 1,
  dots: false,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
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
$(".owl-logos").owlCarousel({
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
  },
});
$(".owl-consulting").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  margin: 0,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

var $owl = $(".owl-services");
console.log(this);
$owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});
$(".owl-services").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  dots: false,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    575: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$(document).on("click", ".owl-item>.services__box", function () {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300; // in ms
  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});

// var $owl = $(".owl-testimonials");
// console.log(this);
// $owl.children().each(function (index) {
//   $(this).attr("data-position", index); // NB: .attr() instead of .data()
// });
$(".owl-testimonials").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  dots: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 3,
      dots: true,
    },
  },
});
// $(document).on("click", ".owl-item>.testimonials__box", function () {
//   // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
//   var $speed = 300; // in ms
//   $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
// });

$(".owl-pricing").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  dots: false,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
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



// Number auto run
const counters = document.querySelectorAll(".counters");
console.log(counters);
const speed = 100; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Button active
$(document).ready(function () {
  $(".pricing__button .pricing__button-item").click(function () {
    $(".pricing__button-item").removeClass("active");
    $(this).addClass("active");
  });
});
