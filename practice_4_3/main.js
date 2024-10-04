// mainButton.style.color = 'red';
// document.getElementById("mainButton").style.color = 'lime';
// document.querySelector('#mainButton').style.color = 'blue';
let btn = document.getElementById("mainButton");
let backgroundPage = document.body;
btn.style.backgroundColor = 'green';
console.log(btn);
console.dir(mainButton);
// alert(btn);

btn.addEventListener( 'click', ()=>{ backgroundPage.style.backgroundColor = 'lime'; } );

// btn.addEventListener( 'click', ()=>{ btn.remove(); } );

// const idtoggleThemeSite = document.getElementById('idtoggleThemeSite');

idtoggleThemeSite.addEventListener("click", function(){
    console.log(backgroundPage.classList);
    backgroundPage.classList.toggle('light-theme');
    backgroundPage.classList.toggle('dark-theme');
    console.dir(idtoggleThemeSite);
    idtoggleThemeSite.innerText = 'Поменять на светлую тему';
});


