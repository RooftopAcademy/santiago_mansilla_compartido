export default class Store {
    _catalog:object
    _cart:object
    constructor() {
        this._catalog = new catalog
        this._cart = new cart
    }
}