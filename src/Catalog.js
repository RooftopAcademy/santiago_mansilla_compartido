class Catalog{
    constructor(){
        this.Product=[]
    }

    findById(id){
        return this.Product.find(p => {
            return p.id ==id
        })
    }
}

