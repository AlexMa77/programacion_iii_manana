let edadCliente: number = 25;
let nombreCliente: string = 'Gabriel';
let tieneContrato: boolean = true;
let cantidadHabitaciones: any = 3;

if (edadCliente >= 18 && tieneContrato){
    console.log('Cliente apto para alquilar');
} else {
    console.log('Cliente no apto para alquilar');
}

let propiedades: string[] = ['Depa A', 'Depa B', 'Depa C'];
for (let i=0; i<propiedades.length; i++){
    console.log('Propiedad disponible:', propiedades[i]);
}

enum EstadoContrato {
    Pendiente,
    Firmado,
    Finalizado
}

console.log('Estados posibles del contrato:', EstadoContrato);
console.log('Estado actual:', EstadoContrato.Firmado);
