import { Popup } from "./popup";

export class PopupWithForm extends Popup {
    constructor(selectors, submitHandler = null) {
        super(selectors);

        this._form = this._popup.querySelector(selectors.popupForm);
        this._submitHandler = submitHandler;
       
    }

    _getInputValues(){
        const formDataObject = {};

        const inputElements = this._form.querySelectorAll('.input');
        [...inputElements].forEach( (input) => {
            formDataObject[input.name] = input.value;
        })

        return formDataObject;

    } 
    // setSubmitAction(action){
    //     this._submitHandler = action;
    // }

    setEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._getInputValues())

            this.close();
        })

        super.setEventListeners();
    }
    
    close() {
        this._form.reset();

        super.close();
    }
}