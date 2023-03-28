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

$(function () {
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
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true
      },
      loop: true,
      // Responsive breakpoints
      breakpoints: {
        //      // when window width is >= 320px
        //      320: {
        //        slidesPerView: 2,
        //        spaceBetween: 20
        //      },
        //      // when window width is >= 480px
        //      480: {
        //        slidesPerView: 3,
        //        spaceBetween: 30
        //      },
        //      // when window width is >= 640px
        //      640: {
        //        slidesPerView: 4,
        //        spaceBetween: 40
        //      }
      }
    });
  }
  //Gallery Swiper
  if ($("#gallery1").length > 0) {
      const swiper = new Swiper('.swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        loop: true,
      });
    $("#gallery1 a.madhus_gallery_2").click(function () {
        $("#gallery_region1").fadeIn();
        var indexlength = $(this).index();
      swiper.slideTo(indexlength+1, 0);
        return false;
    });
      $("#closes").click(function(){
          $("#gallery_region1").fadeOut();
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
    document.addEventListener("fullscreenchange", function () {
      if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {

      } else {
        $("#closescrn").css("display", "none");
        $("#fullscrn, #closes, .madhus_pgmargin").css("display", "block");
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
