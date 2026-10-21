
# 🌾 Raíz Culinaria

> *La memoria del territorio manchego, reinterpretada en cada bocado.*

Sitio web del restaurante **Raíz Culinaria**, una propuesta de cocina de Castilla-La Mancha que une la tradición rural con una mirada contemporánea: producto local, escabeches, caza, cereales y mucho sabor de la tierra.

👉 **Míralo en vivo:** [web-restaurante.github.io/restaurante-castilla-la-mancha](https://web-restaurante.github.io/restaurante-castilla-la-mancha/)

---

## ✨ ¿Qué encontrarás en la web?

| Página | Qué hay en ella |
|---|---|
| 🏠 **Inicio** | Presentación del restaurante, carrusel de platos, historias con foto y los patrocinadores. |
| 🍽️ **Carta** | Entrantes, principales, postres y bodega. Se filtra por categoría sin recargar la página. |
| 📅 **Reserva** | Formulario para reservar mesa: nombre, teléfono, fecha, hora, personas y comentarios. |
| 📖 **Sobre nosotros** | La historia del restaurante, su paisaje, sus vinos y su parrilla. |
| ✉️ **Contacto** | Datos de contacto, formulario de mensaje y enlace a Google Maps. |

---

## 🛠️ Tecnologías

El proyecto está hecho **a mano, sin frameworks ni librerías**, con las tres tecnologías base de la web:

- **HTML5**: estructura semántica (`header`, `nav`, `main`, `section`, `footer`) y textos alternativos en las imágenes.
- **CSS3**: variables CSS para colores y tipografías, Flexbox y Grid para la maquetación, y *media queries* para adaptar el diseño.
- **JavaScript (vanilla)**: menú móvil y la carta dinámica, usando `fetch` con `async/await`, funciones, condicionales y bucles.
- **JSON**: `data.json` guarda todos los platos, precios y alérgenos, así que cambiar la carta no requiere tocar el código.
- **Adobe Fonts**: tipografías *Brandon Grotesque* (títulos) y *Baskerville Display PT* (textos).
- **GitHub Pages**: para publicar la web de forma gratuita.

---

## 📱 Diseño responsive

La web se diseñó pensando primero en el **móvil** y crece a pantallas más grandes:

| Pantalla | Qué cambia |
|---|---|
| **Móvil** (hasta 599 px) | Menú desplegable con el botón ☰ y platos en una sola columna. |
| **Tablet** (desde 600 px) | Tipografías más grandes y fotos de la carta más amplias. |
| **Escritorio** (desde 1024 px) | Menú horizontal sobre la portada y entrantes y principales lado a lado. |

---

## 🍴 La carta dinámica

La carta se construye con JavaScript a partir de `data.json`. Cada plato tiene este formato:

```json
{
  "nombre": "Pisto manchego",
  "precio": 9.50,
  "descripcion": "Descripción larga del plato…",
  "descripcion_corta": "Tomate, pimiento, calabacín y cebolla cocinados despacio.",
  "alergenos": []
}
```

Cuántos platos se muestran depende de la pantalla:

| | Móvil | Escritorio |
|---|---|---|
| **Todos** | 1 entrante + 1 principal | 2 entrantes + 2 principales |
| **Una categoría** | 2 platos | 4 platos |

Estos números se cambian en las primeras líneas de `js/carta.js`.

**¿Quieres añadir o cambiar un plato?** Solo edita `data.json`: añade un bloque con el mismo formato dentro de la categoría que corresponda y la web lo mostrará sola.

---

## 🎨 Estilo visual

Una paleta cálida inspirada en la tierra manchega:

| Color | Uso | Código |
|---|---|---|
| 🟠 Naranja | Botones, detalles y botón activo | `#e57b3d` |
| 🟡 Amarillo | Acentos y pie de página | `#d9aa59` |
| 🟢 Verde | Fondos suaves | `#828363` |
| 🔵 Azul grisáceo | Textos secundarios y alérgenos | `#696c71` |

---

## 📁 Estructura del proyecto

```
restaurante-castilla-la-mancha/
├── index.html              ← Inicio
├── carta.html              ← Carta
├── reserva.html            ← Reserva
├── sobre-nosotros.html     ← Sobre nosotros
├── contacto.html           ← Contacto
├── data.json               ← Platos, precios y alérgenos
├── css/
│   ├── style.css           ← Estilos comunes (variables, cabecera, footer…)
│   └── carta.css …         ← Un CSS para cada página
├── js/
│   ├── script.js           ← Funciones comunes (menú móvil…)
│   └── carta.js            ← Carga y filtro de la carta
└── img/
    ├── home/  carta/  reserva/  sobre/  contacto/
    ├── logos/  iconos/  fondos-raiz/
```

---

## 🚀 Cómo probarlo en tu ordenador

1. **Descarga el proyecto**
   ```bash
   git clone https://github.com/Web-Restaurante/restaurante-castilla-la-mancha.git
   ```
2. **Ábrelo en VS Code.**
3. **Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** y pulsa *Go Live* sobre `index.html`.

> ⚠️ **Importante:** no abras `carta.html` con doble clic. La carta lee `data.json` con `fetch`, y los navegadores bloquean eso al abrir archivos directamente. Con Live Server funciona sin problema.

---

## 💡 Consejos si tocas el proyecto

- Los nombres de los archivos de imagen van **en minúsculas, sin espacios ni tildes** (`festin-mediterraneo.png`, no `Festín mediterráneo.png`). Así funcionan igual en tu ordenador y en GitHub Pages.
- Si cambias una imagen o un CSS y no ves el cambio, recarga con **Ctrl + F5** para limpiar la caché.
- Si una imagen no aparece, pulsa **F12 → Network → Img** y busca las que salen en rojo (error 404): te muestran la ruta exacta que falla.

---

## 🌱 Ideas para seguir mejorando

- Conectar los formularios de reserva y contacto a un servicio que envíe los mensajes por email.
- Añadir una foto para cada plato de la carta.
- Rellenar las páginas legales del pie (privacidad, aviso legal…).
- Optimizar las imágenes grandes (convertirlas a `.webp`) para que la web cargue más rápido.

---

## 👩‍🍳 Créditos

Proyecto creado por el equipo de [Web-Restaurante](https://github.com/Web-Restaurante).

Inspirado en la gastronomía y los paisajes de **Castilla-La Mancha**. 🌾🍷