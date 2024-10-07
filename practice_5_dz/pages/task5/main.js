const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav .menu');
const burgerBars = document.querySelectorAll('.burger-bar');

console.log(burgerMenu);
console.log(nav);
console.log(burgerBars);

let isOpenMenu = false;

burgerMenu.addEventListener('click', function () {
    // Полная запись переключения состояния флага
    if (isOpenMenu === false) {
        isOpenMenu = true
    } else {
        isOpenMenu = false;
    }

    // Сокращенная запись переключения состояния флага
    // isOpenMenu = !isOpenMenu;

    if (isOpenMenu) {
        burgerBars[0].style.transform = 'rotate(45deg)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg)';

        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "100px";
        nav.style.left = "0px";
        nav.style.backgroundColor = "#ccc";
    } else {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';

        nav.style.display = "none";

    }


})