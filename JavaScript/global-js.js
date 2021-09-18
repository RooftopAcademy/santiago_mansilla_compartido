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

