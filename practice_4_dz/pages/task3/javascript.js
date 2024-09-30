
let pictures;
const gallery = document.getElementById('gallery');
for ( let n = 1; n < 17; n++ ){
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src='img/'+n+'.avif';
    gallery.appendChild(figure);
    figure.appendChild(img);
    let txt = document.createElement('figcaption');
    txt.innerHTML = 'Сдесь могла быть Ваша реклама, а так только имя файла '+n+".avif";
    figure.appendChild(txt);
}