// setTimeout((userName) => {
//     console.log('Hello world!',userName);
    
// }, 3000, 'Alex');

// setInterval((userName) => {
//     console.log('Hello, ' + userName);
    
// }, 1000, 'spcae');

// function exampleFunc(){
//     return 'exampleFunc';
// }

// const exampleFunc2 = function(){
//     return 'exampleFunc2';
// }

// const exampleFunc3 = () => {
//     return 'exampleFunc3';
// }

// document.body.addEventListener('click', function(){
//     alert('Callback function');
// })

// document.body.addEventListener('click', ()=> {
//     alert('Callback function');
// })

// document.body.addEventListener('click', exampleFunc);

// function getLog(message, func){
//     func(message);
// }

// getLog('SyntaxError', console.error);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });