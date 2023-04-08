// Madhus and Madhus Advertising - JavaScript Document
function numscrolls() {
  $(".counter").each(function () {
    $counters = $(this).text();
    $countnum = $counters.replace(",", "");
    //    console.log($countnum);
    $(this).easy_number_animate({
      start_value: 0,
      end_value: $countnum,
      duration: 2000,
      delimiter: ','
    });
  });
}
//fullscreen
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

function photoslide(obj1, obj2, obj3) {
  const swiper = new Swiper(obj1, {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'fraction',
    },
    loop: true,
    zoom: {
      maxRatio: 5,
    },
  });
  swiper.slideTo(obj2 + 1, 0);
  //zoom
  $zooms = obj3;
  $(".swiper-slide").dblclick(function () {
    if ($(".swiper-slide.swiper-slide-active.swiper-slide-zoomed").length < 1) {
      $zooms = 0;
      swiper.allowTouchMove = true;
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      $(".eicon-zoom-in-bold, .eicon-zoom-out-bold, .swiper-button-next, .swiper-button-prev").toggle();
    } else {
      $zooms = -1;
      swiper.allowTouchMove = false;
      swiper.allowSlideNext = false;
      swiper.allowSlidePrev = false;
      $(".eicon-zoom-in-bold, .eicon-zoom-out-bold, .swiper-button-next, .swiper-button-prev").toggle();
    }
  });
  $("#zoom").click(function () {
    $zooms++;
    if ($zooms == 1) {
      swiper.zoom.in(5);
      swiper.allowTouchMove = false;
      swiper.allowSlideNext = false;
      swiper.allowSlidePrev = false;
    } else {
      swiper.zoom.out();
      swiper.allowTouchMove = true;
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      $zooms = 0;
    }
    $(".eicon-zoom-in-bold, .eicon-zoom-out-bold, .swiper-button-next, .swiper-button-prev").toggle();
  });
  $(".swiper-slide img").each(function () {
    $(this).attr("title", "Double Click to Zoom in and out.");
    $caption = $(this).attr("alt");
    $(this).next("span.swiper-caption").html($caption);
  });
  $("#closes").click(function () {
    $("#gallery_region1").fadeOut();
    //		swiper.destroy(true, false);
  });
  document.addEventListener("fullscreenchange", function () {
    if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {

    } else {
      $("#closescrn").css("display", "none");
      $("#fullscrn, #closes, .madhus_pgmargin").css("display", "block");
    }
  });
  $("#fullscrn").click(function () {
    openFullscreen();
    $(this).toggle();
    $("#closescrn, #closes, .madhus_pgmargin").toggle();
  });
  $("#closescrn").click(function () {
    closeFullscreen();
    $(this).toggle();
    $("#fullscrn, #closes, .madhus_pgmargin").toggle();
  });


  $("#share").on("click", async () => {
    $photourl = $(".swiper-slide.swiper-slide-active img").attr("src");
    $phototitle = $(".swiper-slide.swiper-slide-active img").attr("alt") + " - Madhus Advertising";
    $phototext = $(".swiper-slide.swiper-slide-active img").attr("alt") + " - Madhus Advertising";
    try {
      await navigator.share({
        text: $phototext,
        title: $phototitle,
        url: $photourl,
      });
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  });
}

$(function () {
  $("main").addClass("show");
  $("#madhusbtn1").click(function () {
    $("header").toggleClass("madhusgrey");
  });
  //anim AOS
  AOS.init({
    duration: 1200,
    once: true
  });
  //Swiper
  if ($(".madhus_clients_1").length > 0) {
    const swiper = new Swiper('.madhus_clients_1', {
      slidesPerView: 3,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true
      },
      loop: true,
    });
  }
  //Gallery Swiper
  if ($("#gallery1").length > 0) {

    $("#gallery1 a.madhus_gallery_2").click(function () {
      $("#gallery_region1").fadeIn();
      $ob1 = "#gallery_region1_1 .swiper";
      $ob2 = $(this).index();
      $ob3 = 0;
      $.ajax({
        url: "gallery_1.txt",
        dataType: "html",
        success: function (data) {
          $("#gallery_region1_1").html(data);
          photoslide($ob1, $ob2, $ob3);
        }
      });
      return false;
    });
    $("#gallery2 a.madhus_gallery2_1").click(function () {
      $("#gallery_region1").fadeIn();
      $ob1 = "#gallery_region1_1 .swiper";
      $ob2 = $(this).index();
      $ob3 = 0;
      $.ajax({
        url: "gallery_2.txt",
        dataType: "html",
        success: function (data) {
          $("#gallery_region1_1").html(data);
          photoslide($ob1, $ob2, $ob3);
        }
      });
      return false;
    });

    $(".madhus_gallery_2 span img, .madhus_gallery2_1 span img, #gallery3 .swiper-slide img").each(function () {
      $captions = $(this).attr("alt");
      $(this).next("span.madhus_caption").html($captions);
    });

  }
  if ($("#gallery3").length > 0) {
    var styleswiper = new Swiper("#gallery3 .swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: false,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      loopedSlides: 3,
      pagination: false,
      navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      }
    });
  }

  //Products
  if ($("#madhus_products").length > 0) {
    var swiper = new Swiper(".swiper", {
      spaceBetween: 21,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 1,
        }
      }
    });
  }
  // client counter
  if ($(".counter").length > 0) {
    $count = 0;
    $(window).scroll(function () {
      $scrolltop = $(document).scrollTop();
      $targetpos = $("#numspeaks").offset().top;
      $winht = $(window).height();
      $reqtarget = $targetpos - $winht + 25;
      if ($scrolltop > $reqtarget) {
        if ($count == 0) {
          $count++;
          numscrolls();
        }
      }
    });
  }
  if ($(".needs-validation").length > 0) {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
})
