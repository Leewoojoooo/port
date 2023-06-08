//header
const header = document.querySelector("#header");
const sub = document.querySelectorAll("#container > div");

window.onscroll = function() {
  let scTop = window.scrollY;

  // 스크롤 위치가 0보다 크고 sub[1]에 도달하기 전까지 header에 "on" 클래스를 추가
  if (scTop > 0 && scTop < sub[1].offsetTop) {
    header.classList.add("on");
  } else {
     // 그 외의 경우에는 "on" 클래스를 제거
    header.classList.remove("on");
  }
};



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