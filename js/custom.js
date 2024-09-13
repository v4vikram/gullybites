window.addEventListener('resize', function() {
    // document.querySelector('.triangle').style.borderBottom = window.innerHeight + 'px solid #3498db';
  });


  $('.projects').owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:40,
    nav:true,
    autoplay:false,
    dots:false,
    URLhashListener:false,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

  $('.menu').owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    dots:true,
    URLhashListener:false,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  $('.social').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:true,
    URLhashListener:false,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1350:{
            items:3
        }
    }
  })

  $('.foodies_slide').owlCarousel({
    // stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:false,
    URLhashListener:false,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  $(document).ready(function(){
    $(".popup-trigger").click(function () {
        $(".popup-body").fadeIn(500);
        $('body').addClass('body-scroll')
      });
      $(".close").click(function () {
        $(".popup-body").fadeOut(500);
        $('body').removeClass('body-scroll')
      });
      
  })