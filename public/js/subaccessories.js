
let womanList = [
    {
        title:"캣아이 선글라스",
        price:"59,900 원",
        img:"../img/woman/woman_accessories/list1.jpg",
    },
    {
        title:"글리터 스타킹",
        price:"79,900 원",
        img:"../img/woman/woman_accessories/list2.jpg",
    },
    {
        title:"셔링 랩 스커트",
        price:"89,900 원",
        img:"../img/woman/woman_accessories/list3.jpg",
    },
    {
        title:"블랙 프레임 선글라스",
        price:"59,900 원",
        img:"../img/woman/woman_accessories/list4.jpg",
    },
    {
        title:"프린지 후드 머플러",
        price:"79,900 원",
        img:"../img/woman/woman_accessories/list5.jpg",
    },
    {
        title:"라피아 스타일 모자",
        price:"59,900 원",
        img:"../img/woman/woman_accessories/list6.jpg",
    },
    {
        title:"브레이드 마감 버킷햇",
        price:"59,900원",
        img:"../img/woman/woman_accessories/list7.jpg",
    },
    {
        title:"타월 이펙트 버킷햇",
        price:"59,900원",
        img:"../img/woman/woman_accessories/list8.jpg",
    },
    {
        title:"펄 캐스케이드 이어커프",
        price:"59,900원",
        img:"../img/woman/woman_accessories/list9.jpg",
    },
    {
        title:"컬러 브레이드 햇",
        price:"49,900원",
        img:"../img/woman/woman_accessories/list10.jpg",
    },
    {
        title:"스트라이프 햇",
        price:"59,900원",
        img:"../img/woman/woman_accessories/list11.jpg",
    },
    {
        title:"새틴 패턴 스카프",
        price:"89,900원",
        img:"../img/woman/woman_accessories/list12.jpg",
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