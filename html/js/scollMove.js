$(function(){
            

    const conts = $("#container > div"); // cont1 ~ cont4
    //스크롤 이벤트
    $(window).on("scroll",function(){
        let scTop = $(window).scrollTop(); //스크롤바 위치값
        if(scTop > 0){
            $("#header").addClass("on");
            $(".logo a").attr("href","http://naver.com");
            //$(".logo a").attr("src","img/0" + 변수명 + ".png");
        }
        else{
            $("#header").removeClass("on");
            $(".logo a").attr("href","#");
        }


        //스크롤바의 위치 값이 어느 중간 구역 위치에 도달하느냐에 따라 각 다른기능 동작 수행
        
        //제이쿼리 each문은 해당 태그 갯수 / 배열안에 있는 데이터 갯수만큼 반복횟수 정해짐
        // 매개변수 index(순번) , el(데이터값)
        conts.each(function(index,el){
            if(scTop >= conts.eq(index).offset().top){

                $(el).siblings().removeClass("on");
                $(el).addClass("on"); //반복문이 돌아갈 때 해당 cont 구역에 클래스 on 붙여줌
                $(".menu li a").removeClass("on");
                $(".menu li").eq(index).children("a").addClass("on");
                //왼쪽 동그라미 첫번째 버튼 활성화
            } 
        });
    }); //스크롤 부분

    //동그라미 버튼 클릭시 스크롤바 부드럽게 이동
    $(".menu li").on("click",function(e){
        e.preventDefault();
        // $(this).siblings().children("a").removeClass("on"); //나머지 버튼 비활성화
        // $(this).children("a").addClass("on"); // 클릭한 메뉴만 활성화
        
        //스크롤바 부드럽게 이동
        //클릭한 메뉴의 순번값 담아서 갖고오기

        let clickMenuIndex = $(this).index();
        //클릭한 메뉴의 순번값에 해당하는 중간구역의 시작위치값 가져오기
        let move = conts.eq(clickMenuIndex).offset().top;
        //스크롤바의 위치가 해당 중간구역 시작위치값으로 부드럽게 이동
        $("html,body").animate({"scrollTop":move},500);
    });

    //우측하단 최상단으로 이동 버튼 클릭시 스크롤바 위치값 0으로 변경
    $(".move_top").on("click", function(){

        $(".cont4").removeClass("on");
        // $(window).scrollTop(0);
        $("html,body").animate({"scrollTop":0},500);
    });
});