export function createFuncBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav .menu');
    const burgerBars = document.querySelectorAll('.burger-bar');

    let isOpenMenu = false;

    burgerMenu.addEventListener('click', function () {
        isOpenMenu = !isOpenMenu

        toggleMenu();
    });

    // Функция, которая переключает состояние меню в зависимости от флага isOpenMenu

    function toggleMenu() {
        if (isOpenMenu) {
            // Если меню открыто, применяем стили "крестика" для бургер-меню и показываем мобильное меню
            adaptiveMenuOpen();
            showMobileMenu();
        } else {
            // Если меню закрыто, возращаем бургер меню в исходное положение и скрываем мобильное меню
            adaptiveMenuClose();
            hideMobileMenu();
        }
    }

    function adaptiveMenuOpen() {
        burgerBars[0].style.transform = 'rotate(45deg) translateY(12.5px)';
        burgerBars[1].style.opacity = '0';
        burgerBars[2].style.transform = 'rotate(-45deg) translateY(-12.5px)';
    };


    function adaptiveMenuClose() {
        burgerBars[0].style.transform = 'rotate(0deg)';
        burgerBars[1].style.opacity = '1';
        burgerBars[2].style.transform = 'rotate(0deg)';
    };

    function showMobileMenu() {
        navMenu.classList.remove('menu');
        navMenu.classList.add('navigation-adaptive');
    }

    function hideMobileMenu() {
        navMenu.classList.remove('navigation-adaptive');
        navMenu.classList.add('menu');
    }

    window.addEventListener('resize', () => {
        const isDesctop = window.matchMedia('(min-width: 720px)').matches;

        if (isDesctop) {
            resetToDesctop();
        } else if (isOpenMenu) {
            adaptiveMenuOpen();
            showMobileMenu();
        }
    });

    function resetToDesctop() {
        hideMobileMenu();
        if (!isOpenMenu) {
            adaptiveMenuClose();
        }
    }
}


