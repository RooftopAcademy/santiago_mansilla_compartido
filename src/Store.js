class Store{
    constructor() {
        this.User = new User
        this.Catalog = new Catalog
        this.Cart = new Cart
    }

    getCart(){
        return this.cart
    }

    fetchProducts() {
        this.Catalog.push()
    }

}

