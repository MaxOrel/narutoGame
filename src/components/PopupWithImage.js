import { Popup } from "./popup.js";

export class PopupWithImage extends Popup{

    open({img}){
        this._popup.querySelector('.popup__image').src = img;
        
        super.open()
    }


}