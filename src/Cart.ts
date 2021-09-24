class cart{
    products:[]
    constructor(){
        this.products=[]
    }

    addProd(p:object){
        if (p instanceof product) this.products.push(p)
        else throw new Error("El dato recibido no es un producto")
    }
}