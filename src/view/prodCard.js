function prodCard(product) {
    return `
    <article class="item">
        <a class="card text-sty" data-prod-id="${product.id}" href="details.html">
            
            <img class="photo" src="Image/${product.image}">
            
            <div class="text-pos">
                <p class="text-size">${product.name}</p>
                <h3 class="text-sty">$${product.price}</h3>
            </div>
        </a>
    </article>
    `
}