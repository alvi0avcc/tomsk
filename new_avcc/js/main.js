
const leftMenuButton = document.getElementById('left-menu-button');
leftMenuButton.addEventListener('click', ()=>{
    const leftMenu = document.getElementById('aside-left');
    leftMenu.classList.toggle('side-menu-show');
    const leftMenuBtn = document.getElementById('left-menu-button');
    leftMenuBtn.classList.toggle('left-menu-button-pos');
    leftMenuBtn.classList.toggle('left-menu-button-pos::before');
});

const rightMenuButton = document.getElementById('right-menu-button');
rightMenuButton.addEventListener('click', ()=>{
    const rightMenu = document.getElementById('aside-right');
    rightMenu.classList.toggle('side-menu-show');
    const rightMenuBtn = document.getElementById('right-menu-button');
    rightMenuBtn.classList.toggle('right-menu-button-pos');
    rightMenuBtn.classList.toggle('right-menu-button-pos::before');

});


// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,

    breakpoints: {
      // when window width is >= 1500px
      1500: {
        slidesPerView: 4,
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
    },
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });