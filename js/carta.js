/* ===== Carta: carga de data.json y filtro por categoría ===== */

/* Ajustes: cambia estos números y la carta se adapta sola */
const URL_DATOS = "data.json";
const ANCHO_ESCRITORIO = 1024;

/* Platos en la opción "Todos" (por cada categoría) */
const TODOS_MOVIL = 1;
const TODOS_ESCRITORIO = 2;

/* Platos cuando se elige una sola categoría */
const UNA_MOVIL = 2;
const UNA_ESCRITORIO = 4;

const contenedorCarta = document.querySelector("#carta");
const botonesCategoria = document.querySelectorAll(".carta-filtros__boton");

/* Aquí se guardan los datos una vez descargados */
let datos = null;

/* Aquí se guarda qué botón está elegido ahora */
let categoriaActual = "todos";

/* 1. Descargar el JSON (con manejo de errores) */
async function cargarDatos() {
  try {
    const respuesta = await fetch(URL_DATOS);

    if (!respuesta.ok) {
      throw new Error("No se pudo leer " + URL_DATOS);
    }

    datos = await respuesta.json();
    mostrarCategoria("todos");
  } catch (error) {
    console.error(error);
    contenedorCarta.innerHTML =
      '<p class="carta__error">No se pudo cargar la carta. Inténtalo de nuevo más tarde.</p>';
  }
}

/* 2. Saber si estamos en escritorio */
function esEscritorio() {
  if (window.innerWidth >= ANCHO_ESCRITORIO) {
    return true;
  }
  return false;
}

/* 3. Convertir el precio 9.5 en "9,50 €" */
function formatearPrecio(precio) {
  return precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

/* 4. HTML de un plato */
function crearPlato(plato) {
  let descripcion = plato.descripcion_corta;
  let alergenos = "";

  /* Si un plato no tiene descripción corta, se usa la larga */
  if (!descripcion) {
    descripcion = plato.descripcion;
  }

  /* Los alérgenos solo se ponen si hay alguno */
  if (plato.alergenos.length > 0) {
    alergenos = '<p class="plato__alergenos">Alérgenos: ' + plato.alergenos.join(", ") + "</p>";
  }

  let html = "";
  html = html + '<article class="plato">';
  html = html + "<h3>" + plato.nombre + "</h3>";
  html = html + '<p class="plato__descripcion">' + descripcion + "</p>";
  html = html + alergenos;
  html = html + '<p class="plato__precio">' + formatearPrecio(plato.precio) + "</p>";
  html = html + "</article>";

  return html;
}

/* 5. Sacar la lista de platos de una categoría del JSON */
function obtenerPlatos(idCategoria) {
  let platos = [];

  if (idCategoria === "entrantes") {
    platos = datos.menu.entrantes;
  } else if (idCategoria === "principales") {
    platos = datos.menu.platos_principales;
  } else if (idCategoria === "postres") {
    platos = datos.menu.postres;
  } else if (idCategoria === "bodega") {
    /* La bodega junta los vinos y las bebidas */
    platos = datos.menu.vinos.concat(datos.menu.bebidas);
  }

  return platos;
}

/* 6. Nombre de cada categoría */
function obtenerNombre(idCategoria) {
  if (idCategoria === "entrantes") {
    return "Entrantes";
  }
  if (idCategoria === "principales") {
    return "Principales";
  }
  if (idCategoria === "postres") {
    return "Postres";
  }
  return "Bodega";
}

/* 7. Foto de cada categoría (una por categoría) */
function obtenerImagen(idCategoria) {
  if (idCategoria === "entrantes") {
    return "img/carta/entrante1.jpg";
  }
  if (idCategoria === "principales") {
    return "img/carta/principal1.jpg";
  }
  if (idCategoria === "postres") {
    return "img/carta/postre1.jpg";
  }
  return "img/carta/vino1.jpg";
}

/* 8. HTML de una categoría: título + foto a la izquierda + lista de platos a la derecha */
function crearCategoria(idCategoria, limite) {
  const platos = obtenerPlatos(idCategoria);
  let htmlPlatos = "";

  /* Recorremos los platos hasta llegar al límite */
  for (let i = 0; i < platos.length; i++) {
    if (i < limite) {
      htmlPlatos = htmlPlatos + crearPlato(platos[i]);
    }
  }

  let html = "";
  html = html + '<section class="categoria">';
  html = html + '<h2 class="categoria__titulo">' + obtenerNombre(idCategoria) + "</h2>";
  html = html + '<div class="categoria__contenido">';
  html = html + '<img class="categoria__imagen" src="' + obtenerImagen(idCategoria) + '" alt="' + obtenerNombre(idCategoria) + ' de Raíz Culinaria">';
  html = html + '<div class="categoria__lista">' + htmlPlatos + "</div>";
  html = html + "</div>";
  html = html + "</section>";

  return html;
}

/* 9. Marcar el botón activo del menú */
function marcarBotonActivo(idCategoria) {
  for (let i = 0; i < botonesCategoria.length; i++) {
    const boton = botonesCategoria[i];

    if (boton.getAttribute("data-categoria") === idCategoria) {
      boton.classList.add("activo");
    } else {
      boton.classList.remove("activo");
    }
  }
}

/* 10. Pintar la carta según la opción elegida */
function mostrarCategoria(idCategoria) {
  let html = "";
  let limite = 0;

  categoriaActual = idCategoria;

  if (idCategoria === "todos") {
    /* Todos: entrantes y principales */
    if (esEscritorio()) {
      limite = TODOS_ESCRITORIO;
    } else {
      limite = TODOS_MOVIL;
    }

    html = crearCategoria("entrantes", limite) + crearCategoria("principales", limite);
  } else {
    /* Una sola categoría */
    if (esEscritorio()) {
      limite = UNA_ESCRITORIO;
    } else {
      limite = UNA_MOVIL;
    }

    html = crearCategoria(idCategoria, limite);
  }

  contenedorCarta.innerHTML = html;
  marcarBotonActivo(idCategoria);
}

/* 11. Eventos: al pulsar un botón se vuelve a pintar (sin recargar la página) */
for (let i = 0; i < botonesCategoria.length; i++) {
  botonesCategoria[i].addEventListener("click", function () {
    mostrarCategoria(this.getAttribute("data-categoria"));
  });
}

/* 12. Si se cambia el tamaño de la ventana, se vuelve a pintar */
window.addEventListener("resize", function () {
  if (datos !== null) {
    mostrarCategoria(categoriaActual);
  }
});

/* Inicio */
cargarDatos();