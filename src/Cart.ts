export default class cart{
    _products:object[]
    constructor(){
        this._products=[]
    }

    set addProd(p:object){
        this._products.push(p);
    }

    get showProd(){
        return this._products
    }
}