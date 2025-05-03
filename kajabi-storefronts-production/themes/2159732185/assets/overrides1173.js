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

jQuery(document).ready(function ($) {
  "use strict";

  $('.st6-1_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><div class="svg_div"><svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92"><g id="Group_98" data-name="Group 98" transform="translate(1882 6270) rotate(180)"><g id="Ellipse_20" data-name="Ellipse 20" transform="translate(1790 6178)" fill="#f1e8d7" stroke="#c9bdaf" stroke-width="2"><circle cx="46" cy="46" r="46" stroke="none"/><circle cx="46" cy="46" r="45" fill="none"/></g><path id="Path_549" data-name="Path 549" d="M33.78,18.95,24.09,9.26l-1.5,1.5,6.72,6.93H12.87v2.52H29.31l-6.72,6.93,1.5,1.5Z" transform="translate(1812 6204.769)" fill="#c9bdaf"/></g></svg></div></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><div class="svg_div"><svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92">  <g id="Group_97" data-name="Group 97" transform="translate(-1790 -6178)">    <g id="Ellipse_20" data-name="Ellipse 20" transform="translate(1790 6178)" fill="#f1e8d7" stroke="#c9bdaf" stroke-width="2">      <circle cx="46" cy="46" r="46" stroke="none"/>      <circle cx="46" cy="46" r="45" fill="none"/>    </g><path id="Path_548" data-name="Path 548" d="M33.78,18.95,24.09,9.26l-1.5,1.5,6.72,6.93H12.87v2.52H29.31l-6.72,6.93,1.5,1.5Z" transform="translate(1812 6204.769)" fill="#c9bdaf"/></g></svg></div></button>'
  });
  
  
    $( ".st10_item_head" ).click(function() {
      
      
      if(!$(this).hasClass('active')){
          $('.st10_item').removeClass('active');
          $('.st10_item_head em').html('+');
      
          let content_id = "#"+$(this).attr('data-contnt');
          $(this).addClass('active');
          $(content_id).addClass('active');
          $( this ).children('em').html('-');
      }else{
        $('.st10_item').removeClass('active');
        $('.section_12 .kcs_text').removeClass('active');
        $('.section_12_item em').html('+');
      }
      
      
    });

});


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