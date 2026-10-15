// Función para cargar y renderizar los datos del JSON
async function cargarMenu() {
  try {
    // 1. Petición para obtener el archivo JSON
    const response = await fetch('data.json');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const { restaurante, menu } = data;

    // 2. Renderizar Información del Restaurante
    document.getElementById('restaurante-nombre').textContent = restaurante.nombre;
    document.getElementById('restaurante-frase').textContent = restaurante.frase;
    document.getElementById('restaurante-descripcion').textContent = restaurante.descripcion;
    document.getElementById('restaurante-direccion').textContent = restaurante.direccion;
    document.getElementById('restaurante-telefono').textContent = restaurante.telefono;

    // Horarios
    const horarioContainer = document.getElementById('restaurante-horario');
    if (horarioContainer) {
      horarioContainer.innerHTML = `
        <p><strong>Lunes:</strong> ${restaurante.horario.lunes}</p>
        <p><strong>Martes a Sábado:</strong> ${restaurante.horario.martes_a_sabado}</p>
        <p><strong>Domingo:</strong> ${restaurante.horario.domingo}</p>
      `;
    }

    // Redes sociales
    const redesContainer = document.getElementById('restaurante-redes');
    if (redesContainer) {
      redesContainer.innerHTML = `
        <a href="${restaurante.redes_sociales.instagram}" target="_blank">Instagram</a> |
        <span>TikTok: ${restaurante.redes_sociales.tiktok}</span> |
        <a href="${restaurante.redes_sociales.twitter}" target="_blank">Twitter</a>
      `;
    }

    // Simbolo de la moneda
    const simboloMoneda = restaurante.configuracion.moneda_simbolo === 'EUR' ? '€' : restaurante.configuracion.moneda_simbolo;

    // 3. Función auxiliar para renderizar cada sección del menú
    const renderizarSeccion = (items, containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = items.map(item => `
        <div class="menu-item">
          <div class="menu-item-header">
            <h3 class="menu-item-titulo">${item.nombre}</h3>
            <span class="menu-item-precio">${item.precio.toFixed(2)} ${simboloMoneda}</span>
          </div>
          <p class="menu-item-descripcion">${item.descripcion}</p>
          ${item.alergenos && item.alergenos.length > 0 
            ? `<p class="menu-item-alergenos"><small><em>Alergenos: ${item.alergenos.join(', ')}</em></small></p>` 
            : ''
          }
        </div>
      `).join('');
    };

    // 4. Renderizar cada categoría del menú
    renderizarSeccion(menu.entrantes, 'seccion-entrantes');
    renderizarSeccion(menu.vinos, 'seccion-vinos');
    renderizarSeccion(menu.bebidas, 'seccion-bebidas');
    renderizarSeccion(menu.postres, 'seccion-postres');

  } catch (error) {
    console.error('Error al cargar la información del menú:', error);
  }
}

// Ejecutar cuando la página haya cargado
document.addEventListener('DOMContentLoaded', cargarMenu);