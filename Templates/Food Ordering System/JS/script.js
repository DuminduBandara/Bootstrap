const topHeader = document.querySelector(".top-header");
// const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = topHeader.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    topHeader.classList.add('fixed-top-header');
  }
  else{
    topHeader.classList.remove('fixed-top-header');
  }

  // if(scrollHeight > navHeight){
  //   topLink.classList.add('show-link');
  // }
  // else{
  //   topLink.classList.remove('show-link');
  // }
});


// owl-carousel
