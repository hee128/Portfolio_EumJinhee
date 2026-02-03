new fullpage('#fullpage', {
    // 옵션 설정
    sectionsColor: ['black'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    scrollingSpeed: 1000
});

// 반응형 모드
        const toggleBtn1 = document.querySelector(".toggleBtn1");
        const pic1 = document.querySelector(".pic1");
        const pic2 = document.querySelector(".pic2");

        toggleBtn1.addEventListener("click", ()=>{
            pic1.classList.toggle("active"); /*active가 없으면 추가해주고*/
            pic2.classList.toggle("active"); /*active가 있다면 빼준다*/
        })

        const toggleBtn2 = document.querySelector(".toggleBtn2");
        const pic3 = document.querySelector(".pic3");
        const pic4 = document.querySelector(".pic4");

        toggleBtn2.addEventListener("click", ()=>{
            pic3.classList.toggle("active"); /*active가 없으면 추가해주고*/
            pic4.classList.toggle("active"); /*active가 있다면 빼준다*/
        })
        

