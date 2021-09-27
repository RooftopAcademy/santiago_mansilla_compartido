let hder = document.getElementsByClassName('header')[0]
hder.innerHTML += headerBar()
let fter = document.getElementsByClassName('footer')[0]
fter.innerHTML += footerBar()


function headerBar() {
  return `
    <nav class="nav">
        <div class="logo-block">
            <a class="afro-word logo-size hover-bar" href="index.html">
                <img class="logo-icon" src="C:/Projects/santiago_mansilla_compartido/Image/Crown.png">
                <p class="afro-word">AFRODITA</p>
            </a>
        </div>
        <button class="btn-color nav-btn ">
            <img class="bar-icon logo-size hover-btn" src="file:///C:/Projects/santiago_mansilla_compartido/Image/bar-icon.png">
        </button>
        <ol class="nav-menu">
            <li class="menu-item">
                <a href="index.html" class="menu-link link">HOME</a>
            </li>
            <li class="menu-item">
                <a href="products.html" class="menu-link link">CATÁLOGO</a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link link">MI CARRITO</a>
            </li>
            <li class="menu-item">
                <a href="#" class="menu-link link">CERRAR SESION</a>
            </li>
        </ol>
    </nav>
  `
}

function footerBar() {
  return `
    <div class="hover-bar">
        <a class="afro-word" href="https://www.instagram.com/afroditastorebrk/?hl=es-la" target="_blank">
            <p class="afro-word">Instagram</p>
        </a>
    </div>
    <div class="logo-icon">
        <img class="logo-icon" src="C:/Projects/santiago_mansilla_compartido/Image/Crown.png">
    </div>
    <div class="hover-bar">
        <a class="afro-word" href="https://www.instagram.com/afroditastorebrk/?hl=es-la" target="_blank">
            <p class="afro-word">Gmail</p>
        </a>
    </div>
  `
}


const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navBtn.setAttribute("aria-label", "Cerrar menú");
  } else {
    navBtn.setAttribute("aria-label", "Abrir menú");
  }
});