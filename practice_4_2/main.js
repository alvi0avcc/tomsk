let el = document.querySelectorAll('.getDescriptionTypeData');

el.forEach( (element, key) => {
    element.style.backgroundColor = `hsl( ${key*50}deg, ${key*100}%, 50%)`;
})

// for ( const element of el ) {
//     element.addEventListener('click', function() {
//         alert('Наш первый обработчик событий');
//     });
// }

document.getElementById('buttonString').addEventListener(
    'click', function (){
        alert("Строки представляют текстовые данные. Они могут бть заключены в одинарные ( ' ' ), двойные ( \" \" ), или обратные кавычки (шаблонные строки, ` `).");
    }
)

// let cached = null
// window.addEventListener('mousemove', event => {
//     if (!cached) {
//         setTimeout(() => {
//             //предыдущее событие доступно через переменную cached
//             console.log(cached.clientX, cached.clientY)
//             cached = null
//             }, 100)
//     }
//     cached = event
// })


b = document.getElementById('test');

let c = document.createElement('div');
c.style.width = '15px';
c.style.height = '15px';

for ( let i = 0; i < 3600; i++){
    let child = c.cloneNode(false);
    child.style.backgroundColor = `hsl( ${i/10}deg, 100%, 50%)`;
    b.appendChild(child);
};