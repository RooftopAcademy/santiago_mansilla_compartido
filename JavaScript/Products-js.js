let store = new Store
store.fetchProducts()

let productList = document.getElementsByClassName('products')[0]

let products = store.getCatalog().showAll()

products.forEach((product) => {
    productList.innerHTML += prodCard(product)
})
