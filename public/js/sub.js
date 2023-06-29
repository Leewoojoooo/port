//header
const header = document.querySelector("#header");
const sub = document.querySelectorAll("#container > div");



window.addEventListener("scroll",()=>{
  let scTop = window.scrollY;
  // 스크롤 위치가 0보다 크고 sub[0]에 도달하기 전까지 header에 "on" 클래스를 추가
  if (scTop > 0) {
    header.classList.add("on");
    
  } else {
    // 그 외의 경우에는 "on" 클래스를 제거
    header.classList.remove("on");
  }
})
  



let text = "SUNLIGHT";
    let serveText = "";
    let i = 0;
    const typing = document.querySelector(" .title .typing");

    let autoTyping = setInterval(function(){
      startTyping();
    }, 100);

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

//sub3


// // let sub = "";
// // sub2Data.forEach(function(ele){
// //     sub += `<div class="sub2">
// //     <div class="center">
// //         <div class="top">
// //             <img src="${ele.top}">
// //         </div>
// //         <div class="bot">
// //             <img src="${ele.bot}">
// //         </div>
// //     </div>
// // </div>
// // <div class="sub3">
// //     <div class="center">
// //         <div class="womanlist"></div>
// //     </div>
// // </div>`;
// // });
// // // document.querySelector("#container").innerHTML += sub;


// // // womanlist 데이터 처리
// // let womanLists = "";

// // womanListData.forEach(function(ele) {
// //     womanLists += `<div class="list">
// //                         <img src="${ele.img}">
// //                         <div class="title">
// //                             <p>${ele.title}</p>
// //                             <p>${ele.price}</p>
// //                         </div>
// //                     </div>`;
// // });

// // const womanList = document.querySelector(".sub3 .womanlist");
// // womanList.innerHTML = womanLists;


// //sub2Data 배열
// let sub2Data = [
//     {
//         top: "../img/woman/sub2_banner1.jpg",
//         bot: "../img/woman/sub2_banner2.jpg"
//     },
//     {
//         top: "../img/woman/sub2_banner3.jpg",
//         bot: "../img/woman/sub2_banner4.jpg"
//     },
//     {
//         top: "../img/woman/sub2_banner5.jpg",
//         bot: "../img/woman/sub2_banner6.jpg"
//     },
//     {
//         top: "../img/woman/sub2_banner1.jpg",
//         bot: "../img/woman/sub2_banner2.jpg"
//     }
// ];

// let sub = ""; // sub2랑 sub3 포함 시키는 코드 문자열

// //배열을 반복해서 sub2랑 sub3 생성
// sub2Data.forEach(function(ele) {
//     let womanListData = [
//         {
//             img: "../img/woman/sub3_list1.jpg",
//             title: "dddd",
//             price: "dddd"
//         },
//         {
//             img: "../img/woman/sub3_list2.jpg",
//             title: "eeee",
//             price: "eeee"
//         },
//         {
//             img: "../img/woman/sub3_list3.jpg",
//             title: "ffff",
//             price: "ffff"
//         },
//         {
//             img: "../img/woman/sub3_list4.jpg",
//             title: "gggg",
//             price: "gggg"
//         },
//         {
//             img: "../img/woman/sub3_list5.jpg",
//             title: "gggg",
//             price: "gggg"
//         },
//         {
//             img: "../img/woman/sub3_list6.jpg",
//             title: "gggg",
//             price: "gggg"
//         },
//         {
//             img: "../img/woman/sub3_list5.jpg",
//             title: "gggg",
//             price: "gggg"
//         },
//         {
//             img: "../img/woman/sub3_list5.jpg",
//             title: "gggg",
//             price: "gggg"
//         },
//     ];

    
//     let womanLists = "";

//     //배열을 반복하여 list를 생성
//     womanListData.forEach(function(ele) {
//         womanLists += `<div class="list">
//                             <img src="${ele.img}">
//                             <div class="title">
//                                 <p>${ele.title}</p>
//                                 <p>${ele.price}</p>
//                             </div>
//                         </div>`;
//     });

//     // sub변수에 sub2,sub3 추가 <div class="allsub"></div>
//     sub += `<div class="allsub">
//                 <div class="sub2">
//                     <div class="center">
//                         <div class="top">
//                             <img src="${ele.top}">
//                         </div>
//                         <div class="bot">
//                             <img src="${ele.bot}">
//                         </div>
//                     </div>
//                 </div>
//                 <div class="sub3">
//                     <div class="center">
//                         <div class="womanlist">${womanLists}</div>
//                     </div>
//                 </div>
//             </div>`
// });

// // container에 sub 변수에 저장된 HTML 추가
// document.querySelector("#container").innerHTML += sub;




const moreBtn = document.querySelector(".more1");
const moreBtn2 = document.querySelector(".more2");
const box = document.querySelectorAll(".sub2_3 .center .best > div");


let start = 4;
let start2 = 4;

moreBtn.onclick = function(){
  for( let i= start; i< start + 4; i++ ){
    box[i].style.display = "block";
  }
  start = start +4;
  if(start >= box.length){
    moreBtn.style.display = "none";
    moreBtn2.style.display = "block";
  }
}


moreBtn2.onclick = function(){
  for(let i= box.length-1; i>= start2; i--){
    box[i].style.display = "none";
  }
  moreBtn2.style.display = "none";
  moreBtn.style.display = "inline-block";
  start = start2;

  window.scrollTo({
    top: 3148,
    behavior: "smooth"
  });
}






// const fix = document.querySelector (".fix");
// console.log(fix);

// fix.onclick = function(e){
//   e.preventDefault;
//   window.scrollTo({
//       top:0,
//       behavior:"smooth"
//   });
// }


document.querySelector('.woman .top').addEventListener('click', function() {
  // 새로운 페이지로 이동할 URL 설정
  let url = 'http://localhost:3300/sub/top';

  // 페이지 이동
  window.location.href = url;
});

document.querySelector('.woman .pants').addEventListener('click', function() {
  // 새로운 페이지로 이동할 URL 설정
  let url = 'http://localhost:3300/sub/pants';

  // 페이지 이동
  window.location.href = url;
});

document.querySelector('.woman .shoes').addEventListener('click', function() {
  // 새로운 페이지로 이동할 URL 설정
  let url = 'http://localhost:3300/sub/shoes';

  // 페이지 이동
  window.location.href = url;
});

document.querySelector('.woman .Accessories').addEventListener('click', function() {
  // 새로운 페이지로 이동할 URL 설정
  let url = 'http://localhost:3300/sub/Accessories';

  // 페이지 이동
  window.location.href = url;
});