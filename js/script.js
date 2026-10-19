/* ===== Común a todas las páginas: menú móvil ===== */
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__lista--movil");

  if (!boton || !menu) return;

  boton.addEventListener("click", function () {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
  });
});
