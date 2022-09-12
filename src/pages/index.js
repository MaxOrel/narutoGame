import { Card } from "../components/Card";
import { PopupWithForm } from "../components/PopupWithForm";
import { PopupWithImage } from "../components/PopupWithImage";
import { Section } from "../components/Section";
const formElement = document.querySelector('.addCard');

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

function handleRemoveCard(node){
	node.remove();
	node = null;
}

function handleImageOpenPopup(data) {
	popupImageCard.open(data);
	//методы попапа
}

function createCard(dataCard){
	const newCard = new Card({data: dataCard, handleImageOpenPopup, handleRemoveCard}, '#card-tempate');
	return newCard.getElement();
}

function handleFormSubmit(formDataObject) {
	console.log(formDataObject);
	section.addItem(createCard(formDataObject), 'before')
}


const section = new Section('.playground', (dataItem) => {
	section.addItem(createCard(dataItem), 'after')
})

const popupSelectorsAdd = {
	popupClass: 'popup_type_add',
	popupActiveClass: 'popup_opened',
	popupForm: '.popup__form'
}

const popupSelectorsImage = {
	popupClass: 'popup_type_image',
	popupActiveClass: 'popup_opened',
}

const popupAddCard = new PopupWithForm(popupSelectorsAdd, handleFormSubmit);
popupAddCard.setEventListeners();

// popupAddCard.open();

const popupImageCard = new PopupWithImage(popupSelectorsImage);
popupImageCard.setEventListeners();

section.renderItems(ninjaData);


