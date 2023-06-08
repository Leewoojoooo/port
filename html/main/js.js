//header typing



// main1 슬라이더
const slideView = document.querySelectorAll("#container .main1 .center .slider .view > div");

let sNumber = 0;

let autoSlide = setInterval(function(){
    nextCheck();
    slideStart();
},2000);

function nextCheck() {
    if(sNumber == slideView.length-1) {
        sNumber = 0;
    } else {
        sNumber++;
    }
}

function slideStart() {
    for(let i = 0; i < slideView.length; i++) {
        slideView[i].style.opacity = 0;
        slideView[i].style.zIndex = 2;
    }
    slideView[sNumber].style.opacity = 1;
    slideView[sNumber].style.zIndex = 3;
}











//main2,3 이미지 등장 효과
const conts = document.querySelectorAll ("#container > div ");
const main2_show = document.querySelectorAll (".main2_show");
const main3_show = document.querySelectorAll (".main3_show")
const fix = document.querySelector (".fix");

window.onscroll = function(){
  let scTop = window.scrollY;

  if(scTop > conts[1].offsetTop){
      for(let i=0; i<main2_show.length; i++){
        main2_show[i].classList.add("on");
          
      }
  }
  else{
      for(let i=0; i<main2_show.length; i++){
        main2_show[i].classList.remove("on");
      }
  }
  if(scTop >= conts[2].offsetTop){
    for(let i=0; i<main3_show.length; i++){
        main3_show[i].classList.add("on");
        
    }
    }
    else{
        for(let i=0; i<main3_show.length; i++){
            main3_show[i].classList.remove("on");
        }
    }
    if(scTop >= conts[4].offsetTop){
        fix.classList.add("on");
    }
    else{
        fix.classList.remove("on");
    }
}
fix.onclick = function(e){
    e.preventDefault;
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
