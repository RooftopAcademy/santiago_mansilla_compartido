class Cart {
    constructor() {
        this.products = []
    }

    addProd(p) {
        if (p instanceof Product) this.products.push(p)
        else throw new Error('El dato recibido no es un producto')
    }
}