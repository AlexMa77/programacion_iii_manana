var edadCliente = 25;
var nombreCliente = 'Gabriel';
var tieneContrato = true;
var cantidadHabitaciones = 3;
if (edadCliente >= 18 && tieneContrato) {
    console.log('Cliente apto para alquilar');
}
else {
    console.log('Cliente no apto para alquilar');
}
var propiedades = ['Depa A', 'Depa B', 'Depa C'];
for (var i = 0; i < propiedades.length; i++) {
    console.log('Propiedad disponible:', propiedades[i]);
}
var EstadoContrato;
(function (EstadoContrato) {
    EstadoContrato[EstadoContrato["Pendiente"] = 0] = "Pendiente";
    EstadoContrato[EstadoContrato["Firmado"] = 1] = "Firmado";
    EstadoContrato[EstadoContrato["Finalizado"] = 2] = "Finalizado";
})(EstadoContrato || (EstadoContrato = {}));
console.log('Estados posibles del contrato:', EstadoContrato);
console.log('Estado actual:', EstadoContrato.Firmado);
