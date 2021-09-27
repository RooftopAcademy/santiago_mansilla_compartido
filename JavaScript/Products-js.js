let store = new Store
store.fetchProducts()

let prodList = document.getElementsByClassName('products')[0]
let products = store.getCatalog().getAll()

if(window.location.pathname== '/C:/Projects/santiago_mansilla_compartido/products.html'){
    products.forEach((product) => {
        prodList.innerHTML += prodCard(product)
    })
}

let detailsBtn = Array.from(document.getElementsByClassName('item'))
detailsBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        sessionStorage.setItem('currentProduct', item.dataset.prodId)
        window.location.pathname = '/C:/Projects/santiago_mansilla_compartido/details.html'
    })
})

const getCurrentProd = async () => {
    let currentProduct = await store.getCatalog().findById(sessionStorage.currentProduct)
    document.getElementsByClassName('prodDetail')[0].innerHTML = productDetail(currentProduct)
}

if (window.location.pathname == '/C:/Projects/santiago_mansilla_compartido/details.html') {
    getCurrentProd()
}