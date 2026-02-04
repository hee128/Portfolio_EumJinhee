new fullpage('#fullpage', {
    // 옵션 설정
    sectionsColor: ['black'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    scrollingSpeed: 1000
});


const aboutBtn = document.querySelector('.about_btn');
const about2 = document.querySelector('#about');
aboutBtn.addEventListener('click',() => {
   about2.classList.add('open')
})


const xBtn = document.querySelector('.x_btn');
const about = document.querySelector('.about');

xBtn.addEventListener('click',() => {
   about.classList.remove('open')
})




