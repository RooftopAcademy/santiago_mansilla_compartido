class Store {
    _catalog:object
    _cart:object
    constructor() {
        this._catalog = new catalog
        this._cart = new cart
    }
    getCatalog() {
        return this._catalog
    }
    getCart() {
        return this._cart
    }

    fetchProducts() {

        _productList.forEach((p) => {
            let product = new product

            product.setId(p._id)
            product.setImage(p._image)
            product.setName(p._name)
            product.setDescrip(p._description)
            product.setPrice(p._price)
            product.setCategory(p._category)

            this._catalog.addProd(product)
        })
    }
}