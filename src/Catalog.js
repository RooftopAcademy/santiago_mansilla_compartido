class Catalog{
    constructor(){
        this.Product=[]
    }

    findById(id){
        let product = this.Product.find(prod => {
            return prod.id == id
        })

        return product
    }

    addProd(p) {
        this.Product.push(p)
    }

    getAll() {
        return this.Product
    }
}

