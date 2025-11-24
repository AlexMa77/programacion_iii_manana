function saludarCliente(nombre?: string): string {
    return `Bienvenido a Inmobiliaria MAC, ${nombre}`;
}

console.log(saludarCliente('Gabriel'));

const calcularAlquiler = (precioBase: number, meses: number): number => {
    return precioBase * meses;
}

console.log('Precio total del alquiler:', calcularAlquiler(500, 12));

function mostrarDisponibilidad(): void {
    console.log('Las propiedades están disponibles para visitar');
}

mostrarDisponibilidad();
