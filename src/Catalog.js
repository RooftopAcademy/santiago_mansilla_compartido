class Catalog{
    constructor(){
        this.products=[]
    }

    async findById(id) {
        let prod = this.products.find(p=> {
            if(p.id==id){
                return p.id
            }
        })
        await prod.getComments()
        return prod
    }

    addProd(prod) {
        this.products.push(prod)
    }

    getAll() {
        return this.products
    }
}

