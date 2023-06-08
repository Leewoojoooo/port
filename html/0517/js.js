//header typing




//main1 이미지 등장 효과
const conts = document.querySelectorAll ("#container > div ");
const show = document.querySelectorAll (".show");

window.onscroll = function(){
  let scTop = window.scrollY;

  if(scTop > conts[0].offsetTop){
      for(let i=0; i<show.length; i++){
          show[i].classList.add("on");
          
      }
  }
  else{
      for(let i=0; i<show.length; i++){
          show[i].classList.remove("on");
      }
  }
}