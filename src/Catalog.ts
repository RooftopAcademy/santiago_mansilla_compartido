class catalog{
    _products:[]
    constructor(){
        this._products
    }

    async findById(id: number) {
        let prod:object = this._products.find(p => {
            if(p._id==id){
                return p._id
            }
        })
        await prod.get Comments()
        return prod
    }

    addProd(prod: object){
        this._products.push(prod)
    }

    getAll(){
        return this._products
    }
}