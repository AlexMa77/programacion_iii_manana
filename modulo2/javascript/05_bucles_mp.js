for (let i = 1; i <= 10; i++) {
    console.log("Revisión número:", i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Suma de precios referenciales:", suma);

let agente = "MAC";
for (let i = 0; i <= agente.length - 1; i++) {
    console.log(agente[i]);
}

let cuota = 4;
console.log("Cálculo de cuotas del:", cuota);
for (let i = 1; i <= 10; i++) {
    console.log(cuota, "x", i, "=", cuota * i);
}

for (let i = 1; i <= 10; i++) {
    console.log("Cuadrado de", i, "es", i ** 2);
}

console.log("Bucle While");
let i = 1;
while (i <= 6) {
    console.log("Visita", i);
    i++;
}

let preciosAlquiler = [300, 450, 500, 600, 750];
let indice = 1;
while (indice < preciosAlquiler.length) {
    console.log("Precio", indice, "es", preciosAlquiler[indice]);
    indice++;
}

let piso = 1;
while (piso <= 10) {
    if (piso % 2 === 0) {
        console.log("Piso par disponible:", piso);
    }
    piso++;
}

let disponibles = 5;
do {
    console.log("Disponibles:", disponibles);
    disponibles--;
} while (disponibles !== 0);

let valorM2 = 5;
let contador = 0;
console.log("Incrementos del valor:", valorM2);
while (contador <= 10) {
    console.log(valorM2, "x", contador, "=", valorM2 * contador);
    contador++;
}

let preciosPropiedades = [45000, 78000, 120000, 89000, 23000];
let mayor = preciosPropiedades[0];
let pos = 0;

while (pos < preciosPropiedades.length) {
    if (preciosPropiedades[pos] > mayor) {
        mayor = preciosPropiedades[pos];
    }
    pos++;
}

console.log("El precio mayor es:", mayor);
