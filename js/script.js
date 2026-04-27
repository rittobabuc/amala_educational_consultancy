(function ($) {
  'use strict';

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  // window.load = function () {
  // 	document.getElementById('preloader').style.display = 'none';
  // }

  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  
  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 65) {
      //console.log('a');
      $('.navigation').addClass('sticky-header');
      $('#highlight-active').addClass('highlight-active-black');
      $('#highlight-active').removeClass('highlight-active-white');
      if($(window).width()>990)
      {
        $('.active').find('.nav-link').attr('style','color:white');
      }
    } else {
      //console.log('a');
      $('.navigation').removeClass('sticky-header');
      $('#highlight-active').addClass('highlight-active-white');
      $('#highlight-active').removeClass('highlight-active-black');
      $('.active').find('.nav-link').attr('style','color:#0e699e');
    }
  });

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */

    // filter
    setTimeout(function(){
      var containerEl = document.querySelector('.filtr-container');
      var filterizd;
      if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
      }
    }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */

  //Init the slider
  $('.testimonial-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */

  //Init the slider
  $('.clients-logo-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1
  });




  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $('.company-gallery').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1
  });


  /* ========================================================================= */
  /*   Contact Form Validating
  /* ========================================================================= */

  $('#contact-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 4
        },
        email: {
          required: true,
          email: true
        },
        mobileno: {
          required: true
        },
        subject: {
          required: false
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Come on, you have a name don\'t you?',
          minlength: 'Your name must consist of at least 4 characters'
        },
        email: {
          required: 'Please put your email address'
        },
        mobileno: {
          required: 'Please put your mobile no'
        },
        message: {
          required: 'Put some messages here?',
          minlength: 'Your message must consist of at least 2 characters'
        }
      },
      submitHandler: function (form) {
        // Show loading state
        $('#contact-submit').prop('disabled', true).val('Sending...');
        
        // Use iframe submission to bypass CORS
        var $form = $(form);
        var iframe = $('<iframe name="contact-iframe" style="display:none;"></iframe>');
        $('body').append(iframe);
        
        // Set form target to iframe
        $form.attr('target', 'contact-iframe');
        $form.attr('action', 'https://script.google.com/macros/s/AKfycbxSojhqjznxhy-jUCw3IQKchDuLpi3xy7cpRVDVJOU7Fk4KH0PauBNoaouUr_ZfAP1FrA/exec');
        $form.attr('method', 'POST');
        
        // Handle iframe load event
        iframe.on('load', function() {
          setTimeout(function() {
            $('#contact-form #success').fadeIn();
            clearContactForm();
            $('#contact-submit').prop('disabled', false).val('Submit');
            iframe.remove();
            $form.removeAttr('target');
          }, 1000);
        });
        
        // Submit form normally (will submit to iframe)
        form.submit();
        
        // Prevent default jQuery validation submission
        return false;
      }
    }

  );
function clearContactForm()
{
  $('#name').val("");
  $('#email').val("");
  $('#mobileno').val("");
  $('#whatsappno').val("");
  $('#subject').val("");
  $('#message').val("");
}
  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    if ($('.counter').length !== 0) {
      var oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();
    animateOnScroll();
  });

  // -----------------------------
  //  Scroll-triggered Animate.css
  // -----------------------------
  function animateOnScroll() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $('.animate-on-scroll').each(function () {
      var elemTop = $(this).offset().top;
      if (elemTop < windowBottom - 60) {
        var animation = $(this).data('animation') || 'fadeInUp';
        $(this).addClass('animated ' + animation);
      }
    });
  }

  // Run once on page load for elements already in view
  animateOnScroll();

})(jQuery);
