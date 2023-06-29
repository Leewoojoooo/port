//header
const header = document.querySelector("#header");
const sub = document.querySelectorAll("#container > div");
console.log(header);

window.onscroll = function() {
  let scTop = window.scrollY;

  // 스크롤 위치가 0보다 크고 sub[0]에 도달하기 전까지 header에 "on" 클래스를 추가
  if (scTop > 0 && scTop < sub[0].offsetTop) {
    header.classList.add("on");
  } else {
    // 그 외의 경우에는 "on" 클래스를 제거
    header.classList.remove("on");
  }
};