
const form = document.querySelector("#form-reservas");
const mensaje = document.querySelector("#mensaje-reserva");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const nombre = form.elements.nombre.value;
  const telefono = form.elements.telefono.value;
  const fecha = form.elements.fecha.value;
  const hora = form.elements.hora.value;
  const personas = form.elements.personas.value;

  mensaje.textContent =
    `Reserva preparada para ${nombre}. ` +
    `Teléfono: ${telefono}. Fecha: ${fecha}. ` +
    `Hora: ${hora}. Personas: ${personas}.`;
});
