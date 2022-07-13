var owl1 = $('.owl-1');
  owl1.owlCarousel({
      items:4,
      loop:true,
      margin:0,
      nav: false,
      dots: false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      smartSpeed: 1000,
      animateIn: 'linear',
      animateOut: 'linear',
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });
  $('.play').on('click',function(){
      owl1.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function(){
      owl1.trigger('stop.owl.autoplay')
});


const nextIcon = '<i class="fa-solid fa-angle-right"></i>';
const prevIcon = '<i class="fa-solid fa-angle-left"></i>';

var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:30,
      nav: true,
      dots: false,
      autoplay:true,
      autoplayTimeout:6000,
      autoplayHoverPause:true,
      smartSpeed: 1000,
      animateIn: 'linear',
      animateOut: 'linear',
      navText: [
        prevIcon,
        nextIcon
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[6000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
});
