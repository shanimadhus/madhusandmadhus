// Madhus and Madhus Advertising - JavaScript Document
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
	if($(".madhus_clients_1").length > 0){
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
	
  if($(".needs-validation").length > 0){
	  var forms = document.getElementsByClassName('needs-validation');
	  var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
})
