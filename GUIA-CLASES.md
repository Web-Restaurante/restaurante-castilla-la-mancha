# Guía de clases y CSS — Raíz Culinaria

## Convención (BEM en español)

| Patrón | Significado | Ejemplo |
|---|---|---|
| `bloque` | Componente reutilizable | `.boton`, `.formulario`, `.slider` |
| `bloque__elemento` | Pieza que solo existe dentro de un bloque | `.formulario__campo`, `.pie__logo` |
| `bloque--modificador` | Variante; se usa **junto** a la base | `class="boton boton--enviar"` |
| `.activo`, `.abierto` | Estado que pone JavaScript | `.carta-filtros__boton.activo` |

**Reglas**
1. Si se usa en más de una página → `style.css`, y el nombre **no** lleva el de una página (`.boton`, no `.boton-carta`).
2. Si solo existe en una página → su CSS (`inicio.css`, `carta.css`…), con el nombre de la página como prefijo (`.carta-filtros`, `.contacto__dato`).
3. Nada de números en clases (`plato1`): usa un modificador.
4. `header`, `main` y `footer` se estilizan por etiqueta (solo hay uno por página).
5. Los `id` solo para anclas (`#slide-1`) y para JS (`#carta`).

## Qué hay en cada archivo

| Archivo | Contenido |
|---|---|
| `css/style.css` | Reset, variables, tipografía, cabecera/nav, **hero y sus variantes**, `.boton` (+`--enviar`), `.etiqueta`, `.linea-decorativa`, `.bloque-texto`, `.formulario*`, pie, y sus media queries |
| `css/inicio.css` | `.boton--reserva`, `.slider*`, `.entrantes*`, `.vinos*`, `.patrocinadores`, `.logo-patrocinador*` |
| `css/carta.css` | `.hero--carta`, `.carta-filtros*`, `.carta`, `.categoria*`, `.plato*`, `.carta-fondo`, `.carta-vinos`, `.boton--carta` |
| `css/contacto.css` | `.contacto*`, `.cta`, maquetación en 2 columnas del `.formulario` |
| `css/reserva.css`, `sobre-nosotros.css` | Vacíos, para tus compañeros |
| `js/script.js` | Solo menú móvil (todas las páginas) |
| `js/slider.js` | Solo `index.html` |
| `js/carta.js` | Solo `carta.html` |

⚠ **Cada HTML carga `style.css` y después su CSS de página.** Ese orden importa: una regla de página gana a una de `style.css` con la misma especificidad. Por eso `.hero--contacto` se quedó en `style.css`: el `@media` de escritorio redefine `.hero` después, y moverla habría cambiado cómo se ve la portada de Contacto.

## Mapa de renombrado

### Cabecera y navegación

| Antes | Ahora |
|---|---|
| `.logo-negro` | `.logo--negro` |
| `.logo-blanco` | `.logo--blanco` |
| `.desktop` | `.nav--escritorio` |
| `.mobile` | `.nav--movil` |
| `.menu-nav-desktop` | `.nav__lista--escritorio` |
| `.menu-nav-mobile` | `.nav__lista--movil` |
| `.button-toggle` | `.nav__toggle` |

### Botones y bloque de texto

| Antes | Ahora |
|---|---|
| `.button` | `.boton` |
| `.btn-carta` | `.boton--carta` |
| `.boton-enviar` | `.boton--enviar` |
| `.contenedor-texto` | `.bloque-texto` |
| `.contenedor-texto-secundario` | `.bloque-texto--secundario` |
| `.horizontal-line` | `.linea-decorativa` |

### Hero y contenedores

| Antes | Ahora |
|---|---|
| `.hero-carta` | `.hero--carta` |
| `.hero-contacto` | `.hero--contacto` |
| `.contenedor-index` | `.contenedor--inicio` |
| `.contenedor-contacto` | `.contenedor--contacto` |

### Inicio

| Antes | Ahora |
|---|---|
| `.section-slider` | `.slider` |
| `.contenedor-slider` | `.slider__marco` |
| `.contenedor-imagenes` | `.slider__imagenes` |
| `.btn-navegacion-primario` | `.slider__flechas` |
| `.btn-navegacion-secundario` | `.slider__puntos` (cada enlace: `.slider__punto)` |
| `.flecha` | `.slider__flecha` |
| `.flecha-anterior` | `.slider__flecha--anterior` |
| `.flecha-siguiente` | `.slider__flecha--siguiente` |
| `.entrante` | `.entrantes` |
| `.plato1` | `.entrantes__item--1` |
| `.plato2` | `.entrantes__item--2` |
| `.plato3` | `.entrantes__item--3` |
| `.vino` | `.vinos` |
| `.semicirculo-left` | `.vinos__semicirculo--izquierda` |
| `.semicirculo-right` | `.vinos__semicirculo--derecha` |
| `.mobile-logo-vertical` | `.logo-patrocinador--movil` |
| `.desktop-logo-horizontal` | `.logo-patrocinador--escritorio` |

### Contacto y formulario

| Antes | Ahora |
|---|---|
| `.section-contacto` | `.contacto` |
| `.contenedor-formulario` | `.contacto__cuerpo` |
| `.contenedor-info` | `.contacto__datos` |
| `.dato-contacto` | `.contacto__dato` |
| `.info-contacto` | `.contacto__dato-texto` |
| `.formulario-contacto` | `.formulario` |
| `.campo-formulario` | `.formulario__campo` |
| `.campo-nombre` | `.formulario__campo--nombre` |
| `.campo-email` | `.formulario__campo--email` |
| `.campo-asunto` | `.formulario__campo--asunto` |
| `.campo-mensaje` | `.formulario__campo--mensaje` |

### Carta (las 6 últimas las genera carta.js)

| Antes | Ahora |
|---|---|
| `.nav-secundario-carta` | `.carta-filtros__lista` / `.carta-filtros__boton` (ul y button)` |
| `.menu-nav-secundario` | `.carta-filtros__lista` |
| `.bg-image-carta` | `.carta-fondo` |
| `.carta-contenedor-vinos` | `.carta-vinos` |
| `.categoria-titulo` | `.categoria__titulo` |
| `.plato-info` | `.plato__info` |
| `.plato-descripcion` | `.plato__descripcion` |
| `.plato-alergenos` | `.plato__alergenos` |
| `.plato-precio` | `.plato__precio` |
| `.carta-error` | `.carta__error` |

### Pie de página

| Antes | Ahora |
|---|---|
| `.section-primario` | `.pie__principal` |
| `.section-secundario` | `.pie__legal` |
| `.horarios` | `.pie__horarios` |
| `.redes-sociales` | `.pie__redes` |
| `.logo-footer` | `.pie__logo` |
| `.textos-legales` | `.pie__textos-legales` |

Otros: clase de estado `.open` → `.abierto` (menú móvil); ids `#img1/2/3` → `#slide-1/2/3`; `.reserva a` → `.boton--reserva` (ahora el botón ES el enlace).

## Qué cambié, además de los nombres

- **`carta.html` cargaba `script.js` y `carta.js` dos veces** → errores `already been declared` en consola. Ahora una vez.
- **`script.js` rompía en las páginas sin slider** (`null.addEventListener`). El slider está ahora en `slider.js`, solo en Inicio, y el menú comprueba que existe.
- `<button><a>` (inválido) → `<a class="boton boton--reserva">`, apuntando a `reserva.html`.
- Código muerto eliminado: `.boton.enviar`, `.btn`, `.btn span`, `.icon-contacto img` (no coincidían con ningún elemento) y el bloque comentado de `.nav-secundario-carta`. `.contenedor-text p` quedó **comentado** en `contacto.css` con la explicación (era un typo de `.bloque-texto p`).
- `asunto` en Contacto sigue siendo obligatorio (lo había quitado por error en la primera versión) y ahora lleva `*`.
- Accesibilidad: `aria-label` en los puntos del slider, `aria-expanded` en el menú, `aria-current="page"` en el enlace activo, `type="button"`, `©`, `rel="noopener"`, `meta description`.

## Cómo lo verifiqué

Rendericé tus 3 páginas originales y las nuevas con Chromium (390, 700, 1280 y 2200 px; menú abierto, slider, filtros de la carta, hover de botones) y comparé los estilos calculados y las posiciones de cada elemento: **0 diferencias**, salvo los textos que corregí (`@`→`©`, acentos, «Castilla-La Mancha»). También comprobé propiedad a propiedad que todo tu CSS original está en los archivos nuevos. No probé con tus fuentes de Typekit ni tus imágenes reales (usé imágenes de relleno), y `data.json` era uno de prueba.

## Pendiente / conviene revisar (no lo toqué)

1. **Más de 1920 px pierde el diseño de escritorio**: el `@media` es `(min-width:1024px) and (max-width:1920px)`. En un monitor 2K/4K se ve la versión móvil. Si no es intencionado, quita el `and (max-width: 1920px)` en los 4 sitios.
2. **`carta.js`: `URL_DATOS = "../data.json"`** es relativa a la *página*, no al script. Desde `carta.html` en la raíz sube un nivel; funciona en un servidor local raíz, pero fallará en GitHub Pages de proyecto. Probablemente sea `"data.json"`.
3. En escritorio, las reglas `.slider .etiqueta/h3/p` con `grid-area` no hacen nada: esos elementos están dentro de `.bloque-texto`, que es el que participa en el grid.
4. `.vinos__semicirculo--derecha` no se usa en ningún HTML (estaba comentado).
5. Las variables `--color-primary-blue-500…50` tienen valores amarillos (copia de la paleta amarilla); `--font-heady-…` tiene un typo.
6. Datos: Contacto dice «Lunes cerrado» y el pie «Lunes a Viernes»; el email es `@tierraysabor.es`. No hay ningún `h1`; cambiar los `h3` afecta a estilos, así que mejor hacerlo con el CSS delante.
7. Cabecera y pie están copiados en 5 HTML: cualquier cambio hay que hacerlo 5 veces.
