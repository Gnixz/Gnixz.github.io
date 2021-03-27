$(function () {
  let button = document.querySelectorAll(".menu-block");
  button.forEach(function (item) {
    item.addEventListener("click", function () {
      let target = item.getAttribute("data-target");
      $(".home__content").removeClass("show");
      document.getElementById(target).classList.add("show");
      $(".header").addClass("show");
      $(".home__menu").addClass("hide");
      $(".home__name").addClass("reverse");
      $(".home__name-content").addClass("reverse");
    });
  });
  let menuItem = document.querySelectorAll(".header__list-item");
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      $(".header__list-item").addClass("active");
      $(".header__list-item").not(this).removeClass("active");
      let target = item.getAttribute("data-target");
      $(".home__content").removeClass("show");
      document.getElementById(target).classList.add("show");
      $(".header").addClass("show");
      $(".home__menu").addClass("hide");
      $(".home__name").addClass("reverse");
      $(".home__name-content").addClass("reverse");
    });
  });
  $("#close").click(function () {
    $(".home__content").removeClass("show");
    $(".header").removeClass("show");
    $(".home__menu").removeClass("hide");
    $(".home__name").removeClass("reverse");
    $(".home__name-content").removeClass("reverse");
  });

  let project = document.querySelectorAll(".open-project");
  project.forEach(function (item) {
    item.addEventListener("click", function () {
      let target = item.getAttribute("data-target");
      $(".home__modal").removeClass("show");
      document.getElementById(target).classList.add("show");
      $(".header").removeClass("show");
      $(".home__menu").addClass("hide");
      $(".home__name").addClass("reverse");
      $(".home__name-content").addClass("reverse");
    });
  });
  $(".close-pop").each(function () {
    $(this).click(function () {
      $(".home__modal").removeClass("show");
      $(".header").addClass("show");
    });
  });

  var $container = $("#portfolio__box");
  $container.isotope({
    masonry: {
      columnWidth: ".portfolio__box-item",
    },
    itemSelector: ".portfolio__box-item",
  });
  $("#filters").on("click", "li", function () {
    $("#filters li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
  });

  // //===== Isotope =====//
  // var $grid = $(".grid").imagesLoaded(function () {
  //   // init Isotope after all images have loaded
  //   $grid.isotope({
  //     itemSelector: ".grid-item",
  //     percentPosition: true,
  //     gutter: 0,
  //     masonry: {
  //       // use outer width of grid-sizer for columnWidth
  //       columnWidth: ".grid-sizer",
  //     },
  //   });
  // });
  // //===== Isotope click function =====//
  // $(".iso-nav a").click(function () {
  //   $(".iso-nav a").removeClass("active");
  //   $(this).addClass("active");

  //   var selector = $(this).attr("data-filter");
  //   console.log(selector);
  //   $(".grid").isotope({
  //     filter: selector,
  //   });
  //   return false;
  // });

  document.querySelectorAll(".star-toggle").forEach((toggle) => {
    let input = toggle.querySelector("input");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      if (toggle.classList.contains("animated")) {
        return;
      }
      toggle.classList.add("animated");

      gsap.to(toggle, {
        keyframes: [
          {
            "--y": "-48px",
            duration: 0.3,
            ease: "power2.out",
          },
          {
            "--y": "68px",
            "--scale": 0.4,
            duration: 0.325,
            onStart() {
              toggle.classList.add("star-round");
            },
          },
          {
            "--y": "-80px",
            "--scale": 1,
            duration: 0.45,
            ease: "power2.out",
            onStart() {
              input.checked = !input.checked;
              setTimeout(() => toggle.classList.remove("star-round"), 100);
            },
          },
          {
            "--y": "0px",
            duration: 0.45,
            ease: "power2.in",
            onComplete() {
              toggle.classList.add("star-bottom");
              setTimeout(() => toggle.classList.remove("star-bottom"), 200);
            },
          },
          {
            "--toggle-y": "3px",
            duration: 0.2,
          },
          {
            "--toggle-y": "0px",
            "--face-scale": input.checked ? 1 : 0.4,
            "--face-tear-o": input.checked ? 1 : 0,
            "--face-tear-y": input.checked ? "0px" : 0,
            "--face-tear-s": input.checked ? 1.5 : 1,
            duration: 0.125,
          },
          {
            "--face-scale": 1,
            "--face-tear-o": 0,
            "--face-tear-y": input.checked ? "4px" : 0,
            "--face-tear-s": input.checked ? 2.5 : 1,
            duration: 0.15,
          },
        ],
        clearProps: true,
        onComplete() {
          toggle.classList.remove("animated");
        },
      });

      gsap.to(toggle, {
        keyframes: [
          {
            "--hole-scale": 0.8,
            duration: 0.5,
            ease: "elastic.out(1, .75)",
          },
          {
            "--hole-scale": 0,
            duration: 0.2,
            delay: 0.2,
          },
        ],
      });

      gsap.to(toggle, {
        "--rotate": "360deg",
        duration: 1.55,
        clearProps: true,
      });
    });
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
