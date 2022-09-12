export class Section {
    constructor(containerSelector, renderer) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    addItem(node, position = 'before'){
        switch (position) {
            case 'before':
                this._container.prepend(node)
                break;
            case 'after':
                this._container.append(node)
                break;
            default:
                break;
        }
        
    }

    renderItems(dataArray){ // [{name: '', link: ''}, {name: '', link: ''},{name: '', link: ''}]
        dataArray.forEach( dataItem => {
            this._renderer(dataItem);
        });
    }
}