
let womanList = [
    {
        title:"힐 에나멜 뮬",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list1.jpg",
    },
    {
        title:"힐 메탈릭 뮬",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list2.jpg",
    },
    {
        title:"레더 힐 뮬",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list3.jpg",
    },
    {
        title:"메탈릭 레더 매듭 샌들",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list4.jpg",
    },
    {
        title:"메탈릭 파인 스트랩 샌들",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list5.jpg",
    },
    {
        title:"글리터 청키힐 샌들",
        price:"89,900 원",
        img:"../img/woman/woman_shoes/list6.jpg",
    },
    {
        title:"플랫폼 레더 샌들",
        price:"109,900원",
        img:"../img/woman/woman_shoes/list7.jpg",
    },
    {
        title:"플랫폼 레더 샌들",
        price:"109,900원",
        img:"../img/woman/woman_shoes/list8.jpg",
    },
    {
        title:"플랫폼 레더 샌들",
        price:"109,900원",
        img:"../img/woman/woman_shoes/list9.jpg",
    },
    {
        title:"레더 플랫 샌들",
        price:"59,900원",
        img:"../img/woman/woman_shoes/list10.jpg",
    },
    {
        title:"청키힐 레더 샌들",
        price:"89,900원",
        img:"../img/woman/woman_shoes/list11.jpg",
    },
    {
        title:"스트랩 힐 레더 샌들",
        price:"89,900원",
        img:"../img/woman/woman_shoes/list12.jpg",
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