
let womanList = [
    {
        title:"세미 시스루 홀터넥 탑",
        price:"49,900 원",
        img:"../img/woman/sub3_list1.jpg",
    },
    {
        title:"",
        price:"",
        img:"../img/woman/sub3_list2.jpg",
    },
    {
        title:"",
        price:"",
        img:"../img/woman/sub3_list3.jpg",
    },
    {
        title:"크롭트 봄버 재킷",
        price:"89,900 원",
        img:"../img/woman/sub3_list4.jpg",
    },
    {
        title:"암 워머 콤비 크롭탑",
        price:"49,900 원",
        img:"../img/woman/sub3_list5.jpg",
    },
    {
        title:"",
        price:"",
        img:"../img/woman/sub3_list6.jpg",
    },
    {
        title:"",
        price:"",
        img:"../img/woman/sub3_list8.jpg",
    },
    {
        title:"실버 크롭 점퍼",
        price:"59,900 원",
        img:"../img/woman/sub3_list7.jpg",
    },
    {
        title:"체인 새틴 원피스",
        price:"79,900 원",
        img:"../img/woman/sub3_list9.jpg",
    },
    {
        title:"",
        price:"",
        img:"../img/woman/sub3_list10.jpg",
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
            </div>`
});

document.querySelector(".sub3 .center .womanlist").innerHTML = list;