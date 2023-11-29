function reservarEquipo() {
    // Obtener valores del formulario
    var curso = document.getElementById('curso').value;
    var reservadoPor = document.getElementById('reservadoPor').value;
    var profesor = document.getElementById('profesor').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var equipo = document.getElementById('equipo').value;
    var cantidad = document.getElementById('cantidad').value;

    // Crear un objeto de reserva
    var reserva = {
        curso: curso,
        reservadoPor: reservadoPor,
        profesor: profesor,
        fecha: fecha,
        hora: hora,
        equipo: equipo,
        cantidad: cantidad
    };

    // Agregar la reserva a la lista
    agregarReserva(reserva);

    // Limpiar el formulario
    document.getElementById('reservaForm').reset();
}

function agregarReserva(reserva) {
    // Crear elemento de lista y asignar la información de la reserva
    var lista = document.getElementById('reservaList');
    var item = document.createElement('li');
    item.innerHTML = `<strong>${reserva.curso}</strong> - Reservado por: ${reserva.reservadoPor || 'No especificado'}, Profesor: ${reserva.profesor}, Fecha: ${reserva.fecha}, Hora: ${reserva.hora}, Equipo: ${reserva.equipo}, Cantidad: ${reserva.cantidad}`;

    // Agregar el elemento a la lista
    lista.appendChild(item);
}