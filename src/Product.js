class Product{
    constructor(){
        this._name = String
        this._precio = Number
        this._description = String
        this._stock = Number
        this._image = String
        this._category = String
    }

    set Name(){
        this._name = "name"
    }

    get Name(){
        return this._name
    }
}
