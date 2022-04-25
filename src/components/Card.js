export default class Card {
    constructor(data, cardSelector, handleImageOpenPopup){
        this._handleImageOpenPopup = handleImageOpenPopup;
        this._data = data,
        this._cardSelector = cardSelector;
        this._setEventListeners = this._setEventListeners.bind(this);
    }

    _getTempate(){
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true)

        return cardElement;
    }

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => this._handleImageOpenPopup(this._data));
        this._cardName.addEventListener('click', () => this._handlerActiveClassToggle('active'));
    }
    _removeEventListeners() {
        this._cardImage.removeEventListener('click', this._handlerCardImageOpen);

    }
    _handlerClassToggle (className) {
        console.log(this._cardSelector);
        evt.currentTarget.classList.toggle(className);
    }

  

    getElement() {
        this._element = this._getTempate();
        this._cardName =  this._element.querySelector('.card__name');
        this._cardImage =  this._element.querySelector('.card__image');
        this._cardHP =  this._element.querySelector('.card__hp');

        this._cardName.innerHTML = this._data.name;
        this._cardImage.src = this._data.img;
        this._cardHP.textContent = this._data.hp;

        this._setEventListeners();

        return this._element;
    }
}