export class Card {
    constructor({data, handleImageOpenPopup, handleRemoveCard}, cardSelector) {
        this._data = data;
        this._handleRemoveCard = handleRemoveCard;
        this._handleImageOpenPopup = handleImageOpenPopup;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        return document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    }

    getElement(){
      
        this._element = this._getTemplate();
    
        const cardName = this._element.querySelector('.card__name');
        const cardImage = this._element.querySelector('.card__image');
        const cardHP = this._element.querySelector('.card__hp');
    
    
        cardName.innerHTML = this._data.name;
        cardImage.src = this._data.img;
        cardHP.textContent = this._data.hp;
    
        cardImage.addEventListener('click', () => this._handleImageOpenPopup(this._data));
        cardName.addEventListener('click', () => this._handleRemoveCard(this._element));
        return this._element;
    }
    
}