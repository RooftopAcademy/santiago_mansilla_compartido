class Store {
    constructor() {
        this.Catalog = new Catalog
        this.Cart = new Cart
    }
    
    getUser() {
        return this.User
    }
    getCatalog() {
        return this.Catalog
    }
    getCart() {
        return this.Cart
    }

    fetchProducts() {

        productList.forEach((p) => {
            let product = new Product

            product.setId(p.id)
            product.setImage(p.image)
            product.setName(p.name)
            product.setDescrip(p.description)
            product.setPrice(p.price)
            product.setCategory(p.category)

            this.Catalog.addProd(product)
        })
    }
}

