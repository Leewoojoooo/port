
let womanList = [
    {
        title:"파라슈트 팬츠",
        price:"59,900 원",
        img:"../img/woman/woman_pants/list1.jpg",
    },
    {
        title:"와이드 린넨 팬츠",
        price:"79,900 원",
        img:"../img/woman/woman_pants/list2.jpg",
    },
    {
        title:"리넨 블랜드 카고 팬츠",
        price:"89,900 원",
        img:"../img/woman/woman_pants/list3.jpg",
    },
    {
        title:"나일론 블렌드 파라슈트 팬츠",
        price:"59,900 원",
        img:"../img/woman/woman_pants/list4.jpg",
    },
    {
        title:"패턴팬츠",
        price:"79,900 원",
        img:"../img/woman/woman_pants/list5.jpg",
    },
    {
        title:"린넨 스트레이트 팬츠",
        price:"59,900 원",
        img:"../img/woman/woman_pants/list6.jpg",
    },
    {
        title:"스트레이트 하이웨스트 팬츠",
        price:"59,900원",
        img:"../img/woman/woman_pants/list7.jpg",
    },
    {
        title:"링클 이펙트 와이드 팬츠",
        price:"59,900원",
        img:"../img/woman/woman_pants/list8.jpg",
    },
    {
        title:"포켓 디테일 코튼 팬츠",
        price:"59,900원",
        img:"../img/woman/woman_pants/list9.jpg",
    },
    {
        title:"플루이드 와이드 팬츠",
        price:"49,900원",
        img:"../img/woman/woman_pants/list10.jpg",
    },
    {
        title:"스트레이트 하이웨스트 팬츠",
        price:"59,900원",
        img:"../img/woman/woman_pants/list11.jpg",
    },
    {
        title:"린넨 자수 팬츠",
        price:"89,900원",
        img:"../img/woman/woman_pants/list12.jpg",
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