let store = new Store
store.fetchProducts()

let prodList = document.getElementsByClassName('products')[0]

let products = store.getCatalog().showAll()

products.forEach((product) => {
    prodList.innerHTML += prodCard(product)
})