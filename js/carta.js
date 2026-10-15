/* ===== Carta: carga de data.json y filtro por categoría ===== */

/* Ajustes: cambia estos números y la carta se adapta sola */
const URL_DATOS = "../data.json";
const CATEGORIAS_EN_TODOS = ["entrantes", "principales"];
const PLATOS_EN_TODOS = 1;
const PLATOS_POR_CATEGORIA = 2;

const contenedorCarta = document.querySelector("#carta");
const botonesCategoria = document.querySelectorAll(".menu-nav-secundario button");

/* Aquí se guardan los datos una vez descargados */
let datos = null;

/* 1. Descargar el JSON (con manejo de errores) */
async function cargarDatos() {
  try {
    const respuesta = await fetch(URL_DATOS);

    if (!respuesta.ok) {
      throw new Error("No se pudo leer " + URL_DATOS + " (error " + respuesta.status + ")");
    }

    datos = await respuesta.json();
    mostrarCategoria("todos");
  } catch (error) {
    console.error(error);
    contenedorCarta.innerHTML =
      '<p class="carta-error">No se pudo cargar la carta. Inténtalo de nuevo más tarde.</p>';
  }
}

/* 2. Convertir el precio 9.5 en "9,50 €" */
function formatearPrecio(precio) {
  return precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

/* 3. HTML de un plato */
function crearPlato(plato) {
  let alergenos = "";

  if (plato.alergenos.length > 0) {
    alergenos = '<p class="plato-alergenos">Alérgenos: ' + plato.alergenos.join(", ") + "</p>";
  }

  return `
    <article class="plato">
      <img src="${plato.imagen}" alt="${plato.alt}">
      <div class="plato-info">
        <h3>${plato.nombre}</h3>
        <p class="plato-descripcion">${plato.descripcion}</p>
        ${alergenos}
        <p class="plato-precio">${formatearPrecio(plato.precio)}</p>
      </div>
    </article>
  `;
}

/* 4. HTML de una categoría con sus primeros platos */
function crearCategoria(idCategoria, limite) {
  const categoria = datos.categorias.find((cat) => cat.id === idCategoria);

  const platos = datos.platos
    .filter((plato) => plato.categoria === idCategoria)
    .slice(0, limite);

  return `
    <section class="categoria">
      <h2 class="categoria-titulo">${categoria.nombre}</h2>
      ${platos.map(crearPlato).join("")}
    </section>
  `;
}

/* 5. Marcar el botón activo del menú */
function marcarBotonActivo(idCategoria) {
  botonesCategoria.forEach((boton) => {
    const esActivo = boton.dataset.categoria === idCategoria;
    boton.classList.toggle("activo", esActivo);
    boton.setAttribute("aria-pressed", esActivo);
  });
}

/* 6. Pintar la carta según la opción elegida */
function mostrarCategoria(idCategoria) {
  let html = "";

  if (idCategoria === "todos") {
    html = CATEGORIAS_EN_TODOS.map((id) => crearCategoria(id, PLATOS_EN_TODOS)).join("");
  } else {
    html = crearCategoria(idCategoria, PLATOS_POR_CATEGORIA);
  }

  contenedorCarta.innerHTML = html;
  marcarBotonActivo(idCategoria);
}

/* 7. Eventos: al pulsar un botón se vuelve a pintar (sin recargar la página) */
botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", () => {
    mostrarCategoria(boton.dataset.categoria);
  });
});

/* Inicio */
cargarDatos();