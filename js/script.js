/* Boton */

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".button-toggle");
  const menuLinks = document.querySelector(".menu-nav-mobile");

  boton.addEventListener("click", function () {
    menuLinks.classList.toggle("open");
  });
});

/* // Carrusel
const carrusel = document.querySelector(".images");
const botones = document.querySelectorAll(".btn-navegacion-secundario a");

const anterior = document.querySelector(".flecha-anterior");
const siguiente = document.querySelector(".flecha-siguiente");
 */
/* // Navegacion Secundaria
botones.forEach((boton, index) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();

        carrusel.scrollTo({
            left: carrusel.clientWidth * index,
            behavior: "smooth"
        });
    });
});


// Navegacion Primario
// Flecha izquierda
anterior.addEventListener("click", () => {
    carrusel.scrollBy({
        left: -carrusel.clientWidth,
        behavior: "smooth"
    });
});

// Flecha derecha
siguiente.addEventListener("click", () => {
    carrusel.scrollBy({
        left: carrusel.clientWidth,
        behavior: "smooth"
    });
});

 */


/* Carrusel */
const carrusel = document.querySelector(".contenedor-imagenes");
const botones = document.querySelectorAll(".btn-navegacion-secundario a");

const anterior = document.querySelector(".flecha-anterior");
const siguiente = document.querySelector(".flecha-siguiente");

let indiceActual = 0;

/* Actualizar el indicador activo */
function actualizarIndicador(index) {
    botones.forEach((boton, posicion) => {
        boton.classList.toggle("activo", posicion === index);
    });
}

/* Ir a una imagen concreta */
function irAImagen(index) {
    indiceActual = index;

    carrusel.scrollTo({
        left: carrusel.clientWidth * indiceActual,
        behavior: "smooth"
    });

    actualizarIndicador(indiceActual);
}

/* Indicadores inferiores */
botones.forEach((boton, index) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        irAImagen(index);
    });
});

/* Flecha izquierda */
anterior.addEventListener("click", () => {
    const totalImagenes = botones.length;

    indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;

    irAImagen(indiceActual);
});

/* Flecha derecha */
siguiente.addEventListener("click", () => {
    const totalImagenes = botones.length;

    indiceActual = (indiceActual + 1) % totalImagenes;

    irAImagen(indiceActual);
});

/* Estado inicial */
actualizarIndicador(indiceActual);

