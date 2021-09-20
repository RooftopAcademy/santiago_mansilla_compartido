class Catalog{
    constructor(){
        this.products=[]
    }

    add(p){
        if(p instanceof Product){
            this.products.push(p)
        }
        else{
            throw new Error('El parametro 1 debe se de tipo product')
        }
    }
}