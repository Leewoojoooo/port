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
const imgtopshow = document.querySelectorAll (".topshow");
const imgbotshow = document.querySelectorAll (".botshow");
const fix = document.querySelector (".fix");

console.log(imgtopshow);
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


    if(scTop>= conts[3].offsetTop){
        for(let i=0; i<imgtopshow.length; i++){
            imgtopshow[i].classList.add("on");
        }
    }
    else{
        for(let i=0; i<imgtopshow.length; i++){
            imgtopshow[i].classList.remove("on");
        }
    }

    if(scTop>= conts[3].offsetTop){
        for(let i=0; i<imgbotshow.length; i++){
            imgbotshow[i].classList.add("on");
        }
    }
    else{
        for(let i=0; i<imgbotshow.length; i++){
            imgbotshow[i].classList.remove("on");
        }
    }


    if(scTop >= conts[4].offsetTop){
        fix.classList.add("on");
    }
    else{
        fix.classList.remove("on");
    }
}


//위로 올라가기
fix.onclick = function(e){
    e.preventDefault;
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


//top typing

let text = "#MIXING RATIO";
    let serveText = "";
    let i = 0;
    const typing = document.querySelector(".top .title .typing");

    let autoTyping = setInterval(function(){
      startTyping();
    }, 200);

    function startTyping(){
      serveText = text[i];
      i += 1;
      typing.innerText += serveText;

      if(i > text.length - 1){
        clearInterval(autoTyping);
        setTimeout(function(){
          typing.innerText = "";
          i = 0;
          autoTyping = setInterval(function(){
            startTyping();
          }, 100);
        }, 2000);
      }
    }

//top typing

let text2 = "#STTRAIGHT BLAZER";
let serveText2 = "";
let i2 = 0;
const typing2 = document.querySelector(".bot .title .typing");

let autoTyping2 = setInterval(function(){
  startTyping2();
}, 200);

function startTyping2(){
  serveText2 = text2[i2];
  i2 += 1;
  typing2.innerText += serveText2;

  if(i2 > text2.length - 1){
    clearInterval(autoTyping2);
    setTimeout(function(){
      typing2.innerText = "";
      i2 = 0;
      autoTyping2 = setInterval(function(){
        startTyping2();
      }, 100);
    }, 1500);
  }
}
