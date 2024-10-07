const btn = document.getElementById ("mainButton");
const backgroundPage = document.body 
console.log(backgroundPage);
btn.addEventListener("click", function(){
    backgroundPage.style.backgroundColor = "yellow"
});

// btn.style.backgroundColor = ("green")

const idtoggleThemeSite = document.getElementById("idtoggleThemeSite");

idtoggleThemeSite.addEventListener("click", function(){
    console.log(backgroundPage.classList);
    backgroundPage.classList.toggle("light-theme");
    backgroundPage.classList.toggle("dark-theme");

    idtoggleThemeSite.textContent = "Светлая тема";
    })