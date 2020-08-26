// AOS INIT
         AOS.init();
         
         // SCROLLABLE NAVBAR
         $(document).scroll(function() {
          var scrl = $(this).scrollTop();
          if (scrl > 450) {
            $('.navbar').addClass('navbar__scroll');
          } else {
            $('.navbar').removeClass('navbar__scroll');
          }
          if (scrl < 451) {
            $('.navbar__home').addClass('active');
          } else {
            $('.navbar__home').removeClass('active');
          }
          if (scrl > 450 && scrl < 1601) {
            $('.navbar__about').addClass('active');
          } else {
            $('.navbar__about').removeClass('active');
          }
          if (scrl > 1600 && scrl < 2200) {
            $('.navbar__projects').addClass('active');
          } else {
            $('.navbar__projects').removeClass('active');
          }
          if (scrl > 2200) {
            $('.navbar__contact').addClass('active');
          } else {
            $('.navbar__contact').removeClass('active');
          }
         });
         
         // MOBILE NAV
         $('.hamburger').click(function() {
          $('.sidenav').toggleClass('sidenav--open');
         });
         
         // CHANGE AVATAR
         $('.primary').mouseover(function() {
          $('.primary').css('display', 'none');
          $('.secondary').css('display', 'block');
         });
         $('.secondary').mouseout(function() {
          $('.primary').css('display', 'block');
          $('.secondary').css('display', 'none');
         });
         
         // PROJECT'S OPACITY
         $('.bg-tl').mouseover(function() {
          $('.link-tl').css('opacity', '1');
         });
         $('.bg-tl').mouseout(function() {
          $('.link-tl').css('opacity', '0');
         });
         $('.bg-cm').mouseover(function() {
          $('.link-cm').css('opacity', '1');
         });
         $('.bg-cm').mouseout(function() {
          $('.link-cm').css('opacity', '0');
         });
         $('.bg-pp').mouseover(function() {
          $('.link-pp').css('opacity', '1');
         });
         $('.bg-pp').mouseout(function() {
          $('.link-pp').css('opacity', '0');
         });
         $('.bg-sch').mouseover(function() {
          $('.link-sch').css('opacity', '1');
         });
         $('.bg-sch').mouseout(function() {
          $('.link-sch').css('opacity', '0');
         });
         $('.bg-dj').mouseover(function() {
          $('.link-dj').css('opacity', '1');
         });
         $('.bg-dj').mouseout(function() {
          $('.link-dj').css('opacity', '0');
         });
         $('.bg-cz5p').mouseover(function() {
          $('.link-cz5p').css('opacity', '1');
         });
         $('.bg-cz5p').mouseout(function() {
          $('.link-cz5p').css('opacity', '0');
         });
         $('.bg-pt').mouseover(function() {
          $('.link-pt').css('opacity', '1');
         });
         $('.bg-pt').mouseout(function() {
          $('.link-pt').css('opacity', '0');
         });
         
         // OPEN PROJECTS
         $('.bg-tl').click(function() {
          window.open('#');
         });
         $('.bg-cm').click(function() {
          window.open('#');
         });
         $('.bg-cz5p').click(function() {
          window.open(
            '#'
          );
         });
         $('.bg-sch').click(function() {
          window.open('#');
         });
         $('.bg-dj').click(function() {
          window.open('#');
         });
         $('.bg-pt').click(function() {
          window.open('#');
         });
         
         // SCALE PROJECTS
         $('.bg-sch-img').hover(function() {
          $('.bg-sch').toggleClass('scale');
         });
         $('.bg-tl-img').hover(function() {
          $('.bg-tl').toggleClass('scale');
         });
         $('.bg-cm-img').hover(function() {
          $('.bg-cm').toggleClass('scale');
         });
         $('.bg-dj-img').hover(function() {
          $('.bg-dj').toggleClass('scale');
         });
         $('.bg-cz5p-img').hover(function() {
          $('.bg-cz5p').toggleClass('scale');
         });
         $('.bg-pt-img').hover(function() {
          $('.bg-pt').toggleClass('scale');
         });
         
         $('.hamburger').click(function() {
          $('.icon').toggleClass('close');
         });
        