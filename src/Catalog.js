class Catalog{
    constructor(){
        this.Product=[]
    }

    findById(id, ){
        let product = this.Product.find(prod => {
            return prod.id == id
        })

        return product
    }

    addProd(p) {
        this.Product.push(p)
    }

    showAll() {
        return this.Product
    }
}

