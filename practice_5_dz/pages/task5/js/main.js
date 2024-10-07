const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav .menu');
const burgerBars = document.querySelectorAll('.burger-bar');

// console.log(burgerMenu);
// console.log(nav);
// console.log(burgerBars);

let isOpenMenu = false;

function BurgerMenu( open = false){
    if (open) {
        burgerBars[0].style.transform = 'translateY(9px)';
        burgerBars[1].style.opacity = '0';

        burgerBars[2].style.transform = 'translateY(-9px)';

        setTimeout(
            ()=>{
                burgerBars[0].style.transform = 'translateY(9px) rotate(45deg)';
                burgerBars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
            },500);

        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.flexDirection = 'column';
        nav.style.top = "50px";
        nav.style.right = "55px";
        nav.style.backgroundColor = "#444";
    } else {
        nav.style.display = "none";
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
    };
};


burgerMenu.addEventListener('click', function () {
    // Полная запись переключения состояния флага
    // if (isOpenMenu === false) {
    //     isOpenMenu = true
    // } else {
    //     isOpenMenu = false;
    // }

    // Сокращенная запись переключения состояния флага
    isOpenMenu = !isOpenMenu;

    BurgerMenu(isOpenMenu);    

});

// проверка именения размера экрана и корректировка отображения меню
window.addEventListener('resize', function(){
    isOpenMenu = false;
    BurgerMenu(isOpenMenu);
    let w = window.innerWidth;
    if ( w > 768) {
        burgerMenu.style.display = 'none';
        nav.style.display = 'flex';
    } else {
        burgerMenu.style.display = 'flex';
        nav.style.display = 'none';
        nav.style.position = "";
        nav.style.flexDirection = '';
        nav.style.backgroundColor = "";
    }
});
