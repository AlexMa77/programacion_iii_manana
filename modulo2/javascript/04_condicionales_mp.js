let temperaturaOficina = 35;

if (temperaturaOficina > 30) {
    console.log("La oficina de MAC está caliente");
    escribirSalida("La oficina de MAC está caliente");
}

let passwordAdmin = "mac2025";

if (passwordAdmin === "macAdmin2025") {
    console.log("Administrador autenticado");
    escribirSalida("Administrador autenticado");
} else {
    console.log("Acceso denegado");
    escribirSalida("Acceso denegado");
}

let valoracion = 7;

if (valoracion >= 9) {
    console.log("Propiedad: Excelente");
    escribirSalida("Propiedad: Excelente");
} else if (valoracion >= 6) {
    console.log("Propiedad: Buena");
    escribirSalida("Propiedad: Buena");
} else {
    console.log("Propiedad: Mala");
    escribirSalida("Propiedad: Mala");
}

let edadSolicitante = 20;
let tieneContrato = true;

if (edadSolicitante >= 18) {
    if (tieneContrato) {
        console.log("Solicitante apto para alquilar (MAC)");
        escribirSalida("Solicitante apto para alquilar (MAC)");
    } else {
        console.log("Solicitante necesita contrato para alquilar");
        escribirSalida("Solicitante necesita contrato para alquilar");
    }
} else {
    console.log("Solicitante es menor de edad");
    escribirSalida("Solicitante es menor de edad");
}

let diaAtencion = "lunes";

switch (diaAtencion) {
    case "lunes":
        console.log("MAC: Inicio de atención semanal");
        escribirSalida("MAC: Inicio de atención semanal");
        break;
    case "viernes":
        console.log("MAC: Último día de atención de la semana");
        escribirSalida("MAC: Último día de atención de la semana");
        break;
    default:
        console.log("MAC: Día normal de atención");
        escribirSalida("MAC: Día normal de atención");
        break;
}

let precio1 = 110000;
let precio2 = 89000;
let precio3 = 101000;
let precioMayor;

if (precio1 >= precio2 && precio1 >= precio3) {
    precioMayor = precio1;
} else if (precio2 >= precio1 && precio2 >= precio3) {
    precioMayor = precio2;
} else {
    precioMayor = precio3;
}

console.log("El precio mayor es:", precioMayor);
escribirSalida("El precio mayor es: " + precioMayor);

let habitacionesA = 3;
let habitacionesB = 4;
let habitacionesC = 5;
let mayor = 0;

if (habitacionesA > habitacionesB) {
    mayor = habitacionesA;
}
if (habitacionesC > mayor) {
    mayor = habitacionesC;
}

console.log("La mayor cantidad de habitaciones es:", mayor);
escribirSalida("La mayor cantidad de habitaciones es: " + mayor);

function escribirSalida(texto) {
    console.log(texto);
}
