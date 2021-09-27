export default class catalog{
    _products:object[]
    constructor(){
        this._products=[]
    }

    async findById(id:number) {
        let prod = this._products.find(p=> {
            if(p._id==id){
                return p._id
            }
        })
        await prod.getComments()
        return prod
    }

    addProd(prod:object) {
        this._products.push(prod)
    }

    get getAll() {
        return this._products
    }
}