function saludarCliente(nombre) {
    return "Bienvenido a Inmobiliaria MAC, ".concat(nombre);
}
console.log(saludarCliente('Gabriel'));
var calcularAlquiler = function (precioBase, meses) {
    return precioBase * meses;
};
console.log('Precio total del alquiler:', calcularAlquiler(500, 12));
function mostrarDisponibilidad() {
    console.log('Las propiedades están disponibles para visitar');
}
mostrarDisponibilidad();
