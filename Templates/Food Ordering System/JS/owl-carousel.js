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

