class Catalog{
    constructor(){
        this.Product=[]
    }

    findById(id, ){
        let product = this.products.find(prod => {
            return prod.id == id
        })

        return product
    }

    add(p) {
        this.products.push(p)
    }

    showAll() {
        return this.products
    }
}

