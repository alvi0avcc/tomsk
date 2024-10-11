window.addEventListener('resize' , function (){
    const small = 540;
    const medium = 820;

    const currentSize = window.innerWidth;

    // console.log(currentSize);
    
    const left = document.getElementById('aside-left');
    const right = document.getElementById('aside-right');
    const main = document.getElementById('main');

    // switch ( true ) {
    //     case ( currentSize > 820 ) :
    //         left.style.display = '';
    //         right.style.display = '';

    //     break;
        
    //     case ( currentSize > 540 ):
    //         left.style.display = 'none';
    //         right.style.display = '';
    //     break;
           
    //     default:
    //         left.style.display = 'none';
    //         right.style.display = 'none';
    //     break;
    // }
});

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