/*
  Closing the responsive menu when we use jump linking
------------------------------------------------------------------------*/
$(document).ready(function() {
  $(document).on('click', '.header__content--mobile a[href*="#"]', function() {
      $('.header__content--mobile ').css('display', 'none'); 
      $('.pf4_site_header').removeClass('active'); 
      $('.hamburger.hidden--desktop').removeClass('hamburger--opened'); 
  });
});


$( document ).ready(function() {

    $( "body" ).on( "click", 'a[href="#two-step"]', function() {
        $('#two-step').addClass('modal--open');
        $('html').addClass('stop-scroll--html');
        $('body').addClass('stop-scroll--body');
    });
    
    $( "body" ).on( "click", '#two-step .close-x', function() {
        $('#two-step').removeClass('modal--open');
        $('html').removeClass('stop-scroll--html');
        $('body').removeClass('stop-scroll--body');
    });
});


//Responsive Menu
jQuery(document).ready(function ($) {
  "use strict";

  var ph1_responsive_menu = $(".responsive-menu");

  $('body').on("click", 'a.responsive-menu-hand', function () {
    if ($(".responsive-menu").hasClass('active')) {
      $(".responsive-menu").slideUp();
      $(".responsive-menu").removeClass('active');
      $("body").removeClass('mobile-menu-active');
    } else {
      $(".responsive-menu").slideDown();
      $(".responsive-menu").addClass('active');
      $("body").addClass('mobile-menu-active');
    }
    return false;
  });

  $('body').on("click", 'a.responsive-menu-close', function () {
    $(".responsive-menu").slideUp();
    $(".responsive-menu").removeClass('active');
    $("body").removeClass('mobile-menu-active');
  });
});

jQuery(window).scroll(function () {
  "use strict";

  var sa_body_scroll = jQuery(document).scrollTop();

  if (sa_body_scroll > 50) {
    jQuery('.header').addClass('active');
  } else if (sa_body_scroll < 50) {
    jQuery('.header').removeClass('active');
  }
});



// Slider 5
jQuery(document).ready(function ($) {
  "use strict";
  $('.jcy4_slider').slick({
    slidesToShow: 1,
  });
});


/*
  Full Left BG
-------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  
  function pf4_full_left_bg2(){
    var window_width = $(window).width();
    
    $( ".full-left-bg" ).each(function( ) {
      var site_width_id = $(this).attr('r-site-width');
      var content_width_id = $(this).attr('r-content-width');
      
      var site_width = $(site_width_id).outerWidth();
      var content_width = $(content_width_id).outerWidth();
      
      var bg_width =  ((window_width - site_width) / 2) + content_width;
      var left_margin =  ((window_width - site_width) / 2);
      
      $(this).css('width', bg_width);
      $(this).css("margin-left", "-"+left_margin+"px");
    });
  }
  
  pf4_full_left_bg2();
  
  $( window ).resize(function() {
    pf4_full_left_bg2();
  });
  
  $('.full-left-bg').addClass('active');
});




/*
  Full Right BG
-------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  
  function pf4_full_right_bg2(){
    var window_width = $(window).width();
    
    $( ".full-right-bg" ).each(function( ) {
      
      var site_width_id = $(this).attr('r-site-width');
      var content_width_id = $(this).attr('r-content-width');
      
      var site_width = $(site_width_id).outerWidth();
      var content_width = $(content_width_id).outerWidth();
      
      var bg_width =  ((window_width - site_width) / 2) + content_width;
      var right_margin =  ((window_width - site_width) / 2);
      $(this).css('width', bg_width);
      $(this).css("margin-right", "-"+right_margin+"px");
    });
  }
  
  pf4_full_right_bg2();
  
  $( window ).resize(function() {
    pf4_full_right_bg2();
  });
  
  $('.full-right-bg').addClass('active');
});



/*
  Full Left & Right BG
-------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  
  function pf4_full_left_bg_mobile(){
    var window_width = $(window).width();
    
    $( '.full-bg-mobile' ).each(function( ) {
      var site_width_id = $(this).attr('r-site-width');
      
      var site_width = $(site_width_id).outerWidth();
      var bg_width =  window_width;
      var left_margin =  ((window_width - site_width) / 2);
      
      $(this).css('width', bg_width);
      $(this).css("margin-left", "-"+left_margin+"px");
    });

  }
  
  pf4_full_left_bg_mobile();
  
  $( window ).resize(function() {
    pf4_full_left_bg_mobile();
  });
  
  $('.full-bg-mobile').addClass('active');
});

/*
	Counter Up
-------------------------------*/
jQuery(document).ready(function($) {
	"use strict";
	
	$('.counterUp').each(function() {
        let $this = $(this);
        let delay = $this.data('delay') || 10; // Default value if data attribute is not set
        let time = $this.data('time') || 2000; // Default value if data attribute is not set
    
        $this.counterUp({
            delay: delay,
            time: time
        });
    });
});

// smooth marquee
$(document).ready(function () {
  "use strict";

  $('.s4_textslider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10500,
    pauseOnHover: false,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});









(function ($) {
  $(function() {

    // Slick slider for prev/next thumbnails images
    $('.slideshow__slides').slick({
      dots: true,
      slidesToShow: 1,
      autoplay: false
    });
    setTimeout(function() {
      $('.slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><span>&#60;</span></div><div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
      $('.slick-next').append('<div class="next-slick-arrow arrow-icon"><span>&#62;</span></div><div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
      get_prev_slick_img();
      get_next_slick_img();
    }, 500);

    $('.slideshow__slides').on('click', '.slick-prev', function() {
      get_prev_slick_img();
    });
    $('.slideshow__slides').on('click', '.slick-next', function() {
      get_next_slick_img();
    });
    $('.slideshow__slides').on('swipe', function(event, slick, direction) {
      if (direction == 'left') {
        get_prev_slick_img();
      }
      else {
        get_next_slick_img();
      }
    });
    $('.slick-dots').on('click', 'li button', function() {
      var li_no = $(this).parent('li').index();
      if ($(this).parent('li').index() > li_no) {
        get_prev_slick_img()
      }
      else {
        get_next_slick_img()
      }
    });
    function get_prev_slick_img() {
      // For prev img
      var prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
      $('.prev-slick-img img').attr('src', prev_slick_img);
      $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
      // For next img
      var prev_next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
      $('.next-slick-img img').attr('src', prev_next_slick_img);
      $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
    }
    function get_next_slick_img() {
      // For next img
      var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
      $('.next-slick-img img').attr('src', next_slick_img);
      $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
      // For prev img
      var next_prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
      $('.prev-slick-img img').attr('src', next_prev_slick_img);
      $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
    }
    // End
  })
})(jQuery);

function fnBrowserDetect(){
                 
         let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }
         
          //document.querySelector("h1").innerText="You are using "+ browserName +" browser";
           document.body.classList.add(browserName);
		 }
fnBrowserDetect();




gsap.registerPlugin(ScrollTrigger);
    // Select all elements with the class .smooth_scroll_movement
    document.querySelectorAll('.smooth_scroll_movement').forEach((element) => {
      gsap.to(element, {
        y: () => -window.innerHeight * 0.2, // Adjust multiplier for smoothness
        ease: 'power2.inOut', // Smoother easing
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
          //markers: true // Set to true for debugging
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counterup_n');

            const startCounter = (counter) => {
                const value = parseInt(counter.getAttribute('data-value'), 10); // Get the target value as a number
                const duration = 2000; // Duration in milliseconds
                let start = 0; // Start value
                const step = value / (duration / 16); // Increment step (16ms ~ 60FPS)

                const updateCounter = () => {
                    start += step; // Increment the value
                    if (start < value) {
                        counter.textContent = Math.floor(start); // Update content
                        requestAnimationFrame(updateCounter); // Call the next frame
                    } else {
                        counter.textContent = value; // Ensure the final value is accurate
                    }
                };

                updateCounter();
            };

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            startCounter(entry.target);
                            observer.unobserve(entry.target); // Stop observing once started
                        }
                    });
                },
                { threshold: 1.0 } // Trigger when the whole element is in view
            );

            counters.forEach(counter => {
                observer.observe(counter);
            });
        });