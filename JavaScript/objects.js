let store = new Store

store.fetchProducts()

document.querySelectorAll('.js-add-to-cart')
    .forEach(btn => {
        btn.addEventListener('click', function(){
            console.log(this.dataset.productId)
            store.getCart().add()
        })
    })