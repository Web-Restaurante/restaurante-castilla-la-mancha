/* ===== Solo index.html: slider de imágenes ===== */
const carrusel = document.querySelector(".slider__imagenes");
const puntos = document.querySelectorAll(".slider__punto");
const anterior = document.querySelector(".slider__flecha--anterior");
const siguiente = document.querySelector(".slider__flecha--siguiente");

let indiceActual = 0;

/* Marca el punto activo */
function actualizarIndicador(index) {
  puntos.forEach((punto, posicion) => {
    punto.classList.toggle("activo", posicion === index);
  });
}

/* Va a una imagen concreta */
function irAImagen(index) {
  indiceActual = index;

  carrusel.scrollTo({
    left: carrusel.clientWidth * indiceActual,
    behavior: "smooth",
  });

  actualizarIndicador(indiceActual);
}

if (carrusel) {
  /* Puntos inferiores */
  puntos.forEach((punto, index) => {
    punto.addEventListener("click", (event) => {
      event.preventDefault();
      irAImagen(index);
    });
  });

  /* Flechas (circulares: de la última se vuelve a la primera) */
  anterior.addEventListener("click", () => {
    irAImagen((indiceActual - 1 + puntos.length) % puntos.length);
  });

  siguiente.addEventListener("click", () => {
    irAImagen((indiceActual + 1) % puntos.length);
  });

  actualizarIndicador(indiceActual);
}
