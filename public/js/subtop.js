
let womanList = [
    {
        num:0,
        title:"세미 시스루 홀터넥 탑",
        price:"49,900 원",
        img:"../img/woman/sub3_list1.jpg",
        link:"/subtopDetail/0"
    },
    {
        num:1,
        title:"",
        price:"",
        img:"../img/woman/sub3_list2.jpg",
        link:"/subtopDetail/0"
    },
    {
        num:2,
        title:"",
        price:"",
        img:"../img/woman/sub3_list3.jpg",
        link:"/subtopDetail/1"
    },
    {   num:3,
        title:"크롭트 봄버 재킷",
        price:"89,900 원",
        img:"../img/woman/sub3_list4.jpg",
        link:"/subtopDetail/1"
    },
    {   num:4,
        title:"암 워머 콤비 크롭탑",
        price:"49,900 원",
        img:"../img/woman/sub3_list5.jpg",
        link:"/subtopDetail/2"
    },
    {   num:5,
        title:"",
        price:"",
        img:"../img/woman/sub3_list6.jpg",
        link:"/subtopDetail/2"
    },
    {   num:6,
        title:"",
        price:"",
        img:"../img/woman/sub3_list8.jpg",
        link:"/subtopDetail/3"
    },
    {   num:7,
        title:"실버 크롭 점퍼",
        price:"59,900 원",
        img:"../img/woman/sub3_list7.jpg",
        link:"/subtopDetail/3"
    },
    {   num:8,
        title:"체인 새틴 원피스",
        price:"79,900 원",
        img:"../img/woman/sub3_list9.jpg",
        link:"/subtopDetail/4"
    },
    {   num:9,
        title:"",
        price:"",
        img:"../img/woman/sub3_list10.jpg",
        link:"/subtopDetail/4"
    },
];

let list = "";

womanList.forEach(function(ele){
    list += `<div class="list">
                <img src="${ele.img}">
                <div class="title">
                    <p>${ele.title}</p>
                    <p>${ele.price}</p>
                </div>
                <a href="${ele.link}">상세화면으로</a>
            </div>`
});

document.querySelector(".sub3 .center .womanlist").innerHTML = list;


