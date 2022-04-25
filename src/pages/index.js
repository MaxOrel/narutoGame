import Card from "../components/Card.js";

const ninjaData = [{
		name: 'Naruto',
		type: 'unknown',
		hp: 564,
		img: 'https://res.cloudinary.com/digaox5o1/image/upload/v1611014924/naruto_jrwlvd.png',
		attacks: [{
				name: "Clone Lasso",
				maxDamage: 40,
				minDamage: 20,
				maxCount: 100,
			},
			{
				name: "Rasengan",
				maxDamage: 60,
				minDamage: 45,
				maxCount: 6,
			},
			{
				name: "Rasenshuriken",
				maxDamage: 75,
				minDamage: 60,
				maxCount: 4,
			},
			{
				name: "Twin Rasenshuriken",
				maxDamage: 160,
				minDamage: 130,
				maxCount: 2,
			}
		]
	},
	{
		img: 'https://res.cloudinary.com/digaox5o1/image/upload/v1611014890/gaara_pnzqeo.png',
		name: 'Gaara',
		type: 'unknown',
		hp: 282,
		attacks: [{
				name: "Sand Shield",
				maxDamage: 40,
				minDamage: 20,
				maxCount: 100,
			},
			{
				name: "Sand Swords",
				maxDamage: 60,
				minDamage: 45,
				maxCount: 6,
			},
			{
				name: "Sand Shuriken",
				maxDamage: 75,
				minDamage: 60,
				maxCount: 4,
			},
			{
				name: "Sand Clone",
				maxDamage: 130,
				minDamage: 110,
				maxCount: 2,
			}
		]
	}
]

const containerCard = document.querySelector('.playground');

// function handlerActiveClassToggle(evt) {
// 	// console.log('evt.currentTarget', evt.currentTarget);
// 	// console.log('evt.target', evt.target);
// 	evt.currentTarget.classList.toggle('active');
// }

// function handlerCardImageOpen(data) {
// 	console.log(data);


// 	// const elementDelete = evt.target.closest('.card');

// 	// const cardName = elementDelete.querySelector('.card__name');
// 	// const cardImage = elementDelete.querySelector('.card__image');

// 	// cardImage.removeEventListener('click', handlerCardDelete);
// 	// cardName.removeEventListener('click', handlerActiveClassToggle);

// 	// elementDelete.remove();
// 	// elementDelete = null;
// }


// function createCard(dataRender){
// 	// console.log(dataRender);
// 	const cardTempate = document.querySelector('#card-tempate').content;
// 	const cardElement = cardTempate.querySelector('.card').cloneNode(true);

// 	const cardName = cardElement.querySelector('.card__name');
// 	const cardImage = cardElement.querySelector('.card__image');
// 	const cardHP = cardElement.querySelector('.card__hp');


// 	cardName.innerHTML = dataRender.name;
// 	cardImage.src = dataRender.img;
// 	cardHP.textContent = dataRender.hp;

// 	cardImage.addEventListener('click', () => handlerCardImageOpen(dataRender));

// 	cardName.addEventListener('click', handlerActiveClassToggle);
// 	return cardElement;
// }

function handleImageOpenPopup(data) {
	console.log('Функция переданная извне', data);
	//работа с попапом используя data
}

function createCard(dataRender) {
	return new Card(dataRender, '#card-tempate', handleImageOpenPopup).getElement();
}

// createCard(ninjaData[0])

ninjaData.forEach((ninja) => {
	const newCard = createCard(ninja);
	containerCard.append(newCard);
});

console.log(123);