class Product{
    constructor(){
        this.id = Number
        this.name = String
        this.price = Number
        this.description = String
        this.stock = Number
        this.image = String
        this.category = String
    }

    setId(i){
        if (typeof i === 'number'){
            this.id = i
        }    
        else {
            throw new Error('El id del producto debe ser un número')
        }
    }
    setName(n){
        if (typeof n === 'string'){
            this.name = n
        }    
        else {
            throw new Error('El nombre del producto debe ser una cadena de texto')
        }
    }
    setPrice(p){
        if (typeof p === 'number'){
            this.price = p
        }    
        else {
            throw new Error('El precio del producto debe ser un numero')
        }
    }
    setDescrip(d){
        if (typeof d === 'string'){
            this.description = d
        }    
        else {
            throw new Error('La descripcion del producto debe ser una cadena de texto')
        }
    }
    setStock(s){
        if (typeof s === 'number'){
            this.stock = s
        }    
        else {
            throw new Error('El stock del producto debe ser un numero')
        }
    }
    setImage(i){
        if (typeof i === 'string'){
            this.image = i
        }    
        else {
            throw new Error('La imagen del producto debe ser una cadena de texto')
        }
    }
    setCategory(c){
        if (typeof c === 'string'){
            this.category = c
        }    
        else {
            throw new Error('La categoria del producto debe ser una cadena de texto')
        }
    }

    getId(){
        return this.id
    }
    getName() {
        return this.name
    }
    getPrice() {
        return this.price
    }
    getDescription() {
        return this.description
    }
    getImg() {
        return this.image
    }
    getStock() {
        return this.stock
    }
    getCategory() {
        return this.category
    }
}
