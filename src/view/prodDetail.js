function productDetail(product) {
    console.log(product.id)
    return `
        <div class="img-block">
            <div class="mini">
                <img class="preview" src="Image/${product.image}">
                <img class="preview" src="Image/${product.image}">
                <img class="preview" src="Image/${product.image}">
            </div>

            <div class="img-princ">
                <img class="princ-ph" src="Image/${product.image}">
            </div>
        </div>

        <div class="text-block">
            <div class="text-style">
                <h1 class="title-sty">${product.name}</h1>
                <h1 class="title-sty">${product.price}</h1>
                <h2 class="par-sty">${product.description}</h2>
            </div>

            <a class="btn-size btn-sty">
                <button class="btn-size btn-sty">
                    <p id="boton" class="btn-size btn-sty"  dataProdId="${product.id}">
                        Agregar al carrito
                    </p>
                </button>
            </a>
        </div>
    `

}