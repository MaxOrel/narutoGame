export class Popup {
    constructor(selectors){
        console.log(selectors);
        this._selectors = selectors;

        this._popup = document.querySelector(`.${this._selectors.popupClass}`)
    }

    _handleEscUp = (evt) => {
        if(evt.key ==='Escape'){
            this.close()
        }
    }

    open() {
        this._popup.classList.add(this._selectors.popupActiveClass);
        document.addEventListener('keyup', this._handleEscUp)
    }

    close() {
        this._popup.classList.remove(this._selectors.popupActiveClass)
        document.removeEventListener('keyup', this._handleEscUp)

    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if(evt.target.classList.contains(this._selectors.popupClass)) {
                this.close()
            }
        })
    }
}