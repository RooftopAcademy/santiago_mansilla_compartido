function myCart(){
  return`
    <li>
      <img class="image-cart" src="Image/${product.image}">
      <h1 class="name-cart">$${product.name}</h1>
    </li>
  `
}