let mainUl=document.querySelector('.mainNav__list');
let li=mainUl.querySelectorAll('li');
let headerUl=document.querySelector('.mainHeader__social__list');
let headerLi=headerUl.querySelectorAll('li');




window.addEventListener('load',function(){


  headerLi.forEach((li,i)=>{
  
    li.style.animation=`li 1s linear forwards  ${i/6+1}s`
    
  })
  
  
  
  })



window.addEventListener('load',function(){


li.forEach((li,i)=>{

  li.style.animation=`li 1s linear forwards  ${i/6+2}s`
  
})



})

let list=document.querySelector('.mainNav__list');
let nav=document.querySelector('.mainNav')
let asideSocial=document.querySelector('.asideSocial');

window.addEventListener('scroll',function(){

const offset=window.pageYOffset;
if(offset > 75){
  nav.classList.add('activeNav')
  
  asideSocial.classList.add('socialActive')
}else{
  nav.classList.remove('activeNav')
  asideSocial.classList.remove('socialActive')
  
}

})
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
 
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  loop:true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});


// let zorrroLine=document.querySelector('.zorrro__line');
// let zorro=document.querySelector('.zorrro');
// butter.init()





$("html").easeScroll()

 
 $("html").easeScroll({
    
      frameRate: 60,
    
      animationTime: 2000,
    
      stepSize: 120,  
    
      pulseAlgorithm: 1,
    
      pulseScale: 8,
    
      pulseNormalize: 1,
    
      accelerationDelta: 20,
    
      accelerationMax: 1,
    
      keyboardSupport:true,
    
      arrowScroll: 50,
    
      touchpadSupport:true,
    
      fixedBackground:true
    
    });
let sectionVideo = document.querySelector('.plain__video');
let video = document.querySelector('video');
let videoPosition = sectionVideo.getBoundingClientRect().top

window.addEventListener('scroll', function () {
  console.log( window.pageYOffset,videoPosition  )
  if (window.pageYOffset >= videoPosition/2) {
    video.play()
     video.volume = 0;
    video.loop = true;
    
  } else {
    
    video.play()
    video.volume = 0;
   video.loop=true


 }


})
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:51.406692 , lng:-0.754540 },
    zoom: 8,
  });
}