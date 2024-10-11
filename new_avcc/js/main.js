
const leftMenuButton = document.getElementById('left-menu-button');
leftMenuButton.addEventListener('click', ()=>{
    const leftMenu = document.getElementById('aside-left');
    leftMenu.classList.toggle('side-menu-show');

});

const rightMenuButton = document.getElementById('right-menu-button');
rightMenuButton.addEventListener('click', ()=>{
    const rightMenu = document.getElementById('aside-right');
    rightMenu.classList.toggle('side-menu-show');

});


// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 5,

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