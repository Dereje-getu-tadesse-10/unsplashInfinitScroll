

export class Selector {
    constructor(select) {
        this.select = document.querySelector(select);
    }

    getSelect() {
        return this.select;
    }

    event(type, callback) {
        this.select.addEventListener(type, callback);
    }
}