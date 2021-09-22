let store = new Store
store.fetchProducts()

let prodList = document.getElementsByClassName('products')[0]

let products = store.getCatalog().getAll()

if(window.location.pathname== '/C:/Projects/santiago_mansilla_compartido/products.html'){
    products.forEach((product) => {
        prodList.innerHTML += prodCard(product)
    })
}