let firstObject = {
    nameUser: 'Alex',
    age: 27,
    email: 'example@mail.com',
    getInfoByUser: function(){
        return `Информация о пользователе: ${this.nameUser}. Возраст пользователя: ${this.age}. Email пользователя: ${this.email}`;
    },
};


const secondObject = JSON.parse(JSON.stringify(firstObject));

// console.log(firstObject.getInfoByUser());

// // let secondObject = firstObject;

// let secondObject = firstObject;

console.log('secondObject = ',secondObject);


// console.log(secondObject.getInfoByUser());

// console.log(this);



const cardData = [
    {
        title: 'Реактивные ранцы',
        description: 'Супер лёгкие и экономичные реактивные ранцы',
        price: 50000,
        bottonText: 'Заказать',
        // colors: ['Белый', 'Синий'],
    },
    {
        title: 'Скафандры',
        description: 'Супер лёгкие и прочные скафандры',
        price: 200000,
        bottonText: 'Купить',
    },
    {
        title: 'Планетоход',
        description: 'Супер проходимый и многофункциональный планетоход',
        price: 4000000,
        bottonText: 'Заказать',
    }
];

const cardContainer = document.getElementById('cardContainer');

for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement('div');

    card.innerHTML = `
        <h2 class='title-card'>${cardData[i].title ??='Нет данных'}</h2>
        <p class='description-card'>${cardData[i].description ??='Нет данных'}</p>
        <p class='price-card'>${cardData[i].price ??='Нет данных'}</p>
        <botton class='button-card'>${cardData[i].bottonText ??='Нет данных'}</button>
    `;

    cardContainer.appendChild(card);
    
}