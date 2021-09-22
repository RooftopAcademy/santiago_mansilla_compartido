function prodCard(product) {
    return `
    <article class="item">
        <a class="card text-sty" data-product-id="${product.id}" href="details.html">
            
            <img class="photo" src="Image/${product.image}">
            
            <div class="text-pos">
                <p class="text-size">${product.name}</p>
                <h3 class="text-sty">${product.description}</h3>
            </div>
        </a>
    </article>
    `
}