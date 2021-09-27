export default class product{
    _id: number
    _name: string
    _price: number
    _description: string
    _stock: number
    _image: string
    _category: string
    _comments: []
    
    constructor(){
        this._id=0;
        this._name='';
        this._price=0;
        this._description='';
        this._stock=0;
        this._image='';
        this._category='';
        this._comments=[];
    }

    setId(i:number){
        this._id
    }
    setName(s:string){
        this._name = s
    }
    setPrice(i:number){
        this._price=i
    }
    setDescrip(s:string){
        this._description = s
    }
    setStock(i:number){
        this._stock = i
    }
    setImage(s:string){
        this._image = s
    }
    setCategory(s:string){
        this._category = s
    }
    
    async getComments() {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')
        let json = await res.json()
        this._comments = json.filter(item => item.postId == this._id)
        return this
    }

    get Id(){
        return this._id
    }
    get Name() {
        return this._name
    }
    get Price() {
        return this._price
    }
    get Description() {
        return this._description
    }
    get Img() {
        return this._image
    }
    get Stock() {
        return this._stock
    }
    get Category() {
        return this._category
    }
}