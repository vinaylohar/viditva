webpackJsonp([3],{2:function(n,e,r){n.exports=r("3DYk")},"3DYk":function(n,e,r){r("KF6U")(r("Q6wr"))},KF6U:function(n,e){n.exports=function(n){try{"undefined"!=typeof eval?eval.call(null,n):"undefined"!=typeof execScript?execScript(n):console.error("[Script Loader] EvalError: No eval function available")}catch(n){console.error("[Script Loader] ",n.message)}}},Q6wr:function(n,e){n.exports="jQuery(document).ready(function( $ ) {\r\n  // Preloader\r\n   $(window).on('load', function() {\r\n            $('#preloader').delay(2000).fadeOut('slow',function(){$(this).remove();});\r\n   });\r\n\r\n   //Need to remove timeout\r\n  setTimeout(\r\n    function()\r\n    {\r\n\r\n          // Hero rotating texts\r\n          $(\"#hero .rotating\").Morphext({\r\n            animation: \"flipInX\",\r\n            separator: \",\",\r\n            speed: 3000\r\n          });\r\n\r\n          // Initiate the wowjs\r\n          new WOW().init();\r\n\r\n          // Initiate superfish on nav menu\r\n          $('.nav-menu').superfish({\r\n            animation: {opacity:'show'},\r\n            speed: 400\r\n          });\r\n\r\n          // Mobile Navigation\r\n          if( $('#nav-menu-container').length ) {\r\n              var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});\r\n              $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });\r\n              $('body').append( $mobile_nav );\r\n              $('body').prepend( '<button type=\"button\" id=\"mobile-nav-toggle\"><i class=\"fa fa-bars\"></i></button>' );\r\n              $('body').append( '<div id=\"mobile-body-overly\"></div>' );\r\n              $('#mobile-nav').find('.menu-has-children').prepend('<i class=\"fa fa-chevron-down\"></i>');\r\n\r\n              $(document).on('click', '.menu-has-children i', function(e){\r\n                  $(this).next().toggleClass('menu-item-active');\r\n                  $(this).nextAll('ul').eq(0).slideToggle();\r\n                  $(this).toggleClass(\"fa-chevron-up fa-chevron-down\");\r\n              });\r\n\r\n              $(document).on('click', '#mobile-nav-toggle', function(e){\r\n                  $('body').toggleClass('mobile-nav-active');\r\n                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');\r\n                  $('#mobile-body-overly').toggle();\r\n              });\r\n\r\n              $(document).click(function (e) {\r\n                  var container = $(\"#mobile-nav, #mobile-nav-toggle\");\r\n                  if (!container.is(e.target) && container.has(e.target).length === 0) {\r\n                     if ( $('body').hasClass('mobile-nav-active') ) {\r\n                          $('body').removeClass('mobile-nav-active');\r\n                          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');\r\n                          $('#mobile-body-overly').fadeOut();\r\n                      }\r\n                  }\r\n              });\r\n          } else if ( $(\"#mobile-nav, #mobile-nav-toggle\").length ) {\r\n              $(\"#mobile-nav, #mobile-nav-toggle\").hide();\r\n          }\r\n\r\n          // Stick the header at top on scroll\r\n          $(\"#header\").sticky({topSpacing:0, zIndex: '50'});\r\n\r\n          // Smoth scroll on page hash links\r\n          $('a[href*=\"#\"]:not([href=\"#\"])').on('click', function() {\r\n              if (location.pathname.replace(/^\\//,'') == this.pathname.replace(/^\\//,'') && location.hostname == this.hostname) {\r\n                  var target = $(this.hash);\r\n                  if (target.length) {\r\n\r\n                      var top_space = 0;\r\n\r\n                      if( $('#header').length ) {\r\n                        top_space = $('#header').outerHeight();\r\n                      }\r\n\r\n                      $('html, body').animate({\r\n                          scrollTop: target.offset().top - top_space\r\n                      }, 1500, 'easeInOutExpo');\r\n\r\n                      if ( $(this).parents('.nav-menu').length ) {\r\n                        $('.nav-menu .menu-active').removeClass('menu-active');\r\n                        $(this).closest('li').addClass('menu-active');\r\n                      }\r\n\r\n                      if ( $('body').hasClass('mobile-nav-active') ) {\r\n                          $('body').removeClass('mobile-nav-active');\r\n                          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');\r\n                          $('#mobile-body-overly').fadeOut();\r\n                      }\r\n\r\n                      return false;\r\n                  }\r\n              }\r\n          });\r\n\r\n          // Back to top button\r\n          $(window).scroll(function() {\r\n\r\n              if ($(this).scrollTop() > 100) {\r\n                  $('.back-to-top').fadeIn('slow');\r\n              } else {\r\n                  $('.back-to-top').fadeOut('slow');\r\n              }\r\n\r\n          });\r\n\r\n          $('.back-to-top').click(function(){\r\n              $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');\r\n              return false;\r\n          });\r\n\r\n    }, 1000);\r\n\r\n\r\n});\r\n"}},[2]);