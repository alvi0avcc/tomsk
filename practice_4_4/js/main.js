const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const burgerBars = document.querySelectorAll('.burger-bar');

console.log(burgerMenu);
console.log(nav);
console.log(burgerBars);

let isOpenMenu = false;

burgerMenu.addEventListener('click', function(){
    // полная запись
    // if ( isOpenMenu === false ){
    //     isOpenMenu = true;
    // } else {
    //     isOpenMenu = false;
    // }

    // Сокращенная запись
    isOpenMenu = !isOpenMenu;

    if ( isOpenMenu ) {
        burgerBars[0].style.transform = 'rotate(45deg)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg)';

        nav.style.display = 'flex';

    } else {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
    }

});

