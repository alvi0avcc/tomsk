// Menu button -left
const leftMenuButton = document.getElementById('left-menu-button');
leftMenuButton.addEventListener('click', ()=>{
    const leftMenu = document.getElementById('aside-left');
    leftMenu.classList.toggle('side-menu-show');
    const leftMenuBtn = document.getElementById('left-menu-button');
    leftMenuBtn.classList.toggle('left-menu-button-pos');
    leftMenuBtn.classList.toggle('left-menu-button-pos::before');
});

// Menu button -right
const rightMenuButton = document.getElementById('right-menu-button');
rightMenuButton.addEventListener('click', ()=>{
    const rightMenu = document.getElementById('aside-right');
    rightMenu.classList.toggle('side-menu-show');
    const rightMenuBtn = document.getElementById('right-menu-button');
    rightMenuBtn.classList.toggle('right-menu-button-pos');
    rightMenuBtn.classList.toggle('right-menu-button-pos::before');

});


// Swiper function for include into site
function SwiperImgLoading( parentElementId = '', imgPath = '', quantity = 0) {

  let result ={
    parentElementId : parentElementId,
    imgPath: imgPath,
    quantity: quantity,
    message : '',
  };

  if (parentElementId == '') {
    result.message += `parentElementId (${parentElementId}) - incorrect. `;
  };
  if (imgPath == '') {
    result.message += `imgPath (${imgPath}) - incorrect. `;
  }
  if ( typeof quantity != 'number'|| quantity <= 0 ){
    result.message += `quantity (${quantity}) - incorrect. `;
  }

  if (result.message != '') return result;

  const parentElement = document.getElementById(parentElementId);
  for (i=0; i<quantity; i++){
    const slider = document.createElement('div');
    slider.classList.add('swiper-slide');
    const img = document.createElement('img');
    img.src = imgPath+i+'.png';
    img.alt = `Slide ${i}`;
    slider.appendChild(img);
    parentElement.appendChild(slider);
  }
  return result;
}

let message = ''; //message for result of loading images (if needed)

// loading images for elevators swiper
message = SwiperImgLoading( 'swiper-elevator', 'img/elevators/small/', 13);
// console.log( 'elevator swiper - ', message );

// loading images for draft-survey swiper
message = SwiperImgLoading( 'swiper-draft', 'img/draft/small/', 1);
// console.log( 'draft-survey swiper - ', message );

// loading images for Bunker Survey swiper
message = SwiperImgLoading( 'swiper-bunker', 'img/bunker/small/', 1);
// console.log( 'draft-survey swiper - ', message );


// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    centeredSlides: true,

    //adoptation qtn slides for width of screen
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