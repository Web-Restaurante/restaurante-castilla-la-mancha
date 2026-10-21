
const hora = document.getElementById("hora");
const personas = document.getElementById("personas");

// Crear las opciones de personas
for (let i = 1; i <= 4; i++) {
    const opcion = document.createElement("option");

    opcion.value = i;
    opcion.textContent = i;

    personas.appendChild(opcion);
}

// Crear las horas cada 30 minutos
for (let h = 13; h <= 22; h++) {
    for (let m = 0; m < 60; m += 30) {

        const opcion = document.createElement("option");

        const minutos = m === 0 ? "00" : "30";
        const horaCompleta = h + ":" + minutos;

        opcion.value = horaCompleta;
        opcion.textContent = horaCompleta;

        hora.appendChild(opcion);
    }
}


// Seleccionar los campos
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");

// Validar el nombre
nombre.addEventListener("input", function () {
    nombre.setCustomValidity("");

    const regexNombre = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñÀ-ÿ' -]+$/;

    if (nombre.value !== "" && !regexNombre.test(nombre.value)) {
        nombre.setCustomValidity(
            "El nombre solo puede contener letras, espacios y guiones."
        );
    }
});

// Validar el teléfono
telefono.addEventListener("input", function () {
    telefono.setCustomValidity("");

    const regexTelefono = /^[0-9]{9}$/;

    if (telefono.value !== "" && !regexTelefono.test(telefono.value)) {
        telefono.setCustomValidity(
            "El teléfono debe tener exactamente 9 dígitos."
        );
    }
});

//Validar Fecha
const fecha = document.getElementById("fecha");
const hoy = new Date();
const anio = hoy.getFullYear();

const fechaMinima = anio + "-" +
    String(hoy.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoy.getDate()).padStart(2, "0");

const fechaMaxima = anio + "-12-31";

fecha.min = fechaMinima;
fecha.max = fechaMaxima;

//Mensaje confirmacion

const formularioReserva = document.querySelector(".main--reserva .formulario");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

formularioReserva.addEventListener("submit", function (event) {
    event.preventDefault();

    mensajeConfirmacion.hidden = false;
});
