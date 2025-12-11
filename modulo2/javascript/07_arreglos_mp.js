console.log("ARRAYS - INMOBILIARIA MAC");

let precios = [120000, 85000, 200000, 95000];
let listaVacia = new Array();
let listaVacia2 = [];

console.log("Listado original de precios:", precios);
console.log(listaVacia);
console.log(listaVacia2);

console.log("Acceso a elementos del array");
console.log(precios[0]);
console.log(precios[3]);

console.log("Modificar elemento del array");
precios[0] = 150000;
console.log(precios);

console.log("Agregar elemento al array");
precios.push(300000);
console.log(precios);

console.log("Agregar elemento al inicio del array");
precios.unshift(50000);
console.log(precios);

console.log("Eliminar el último elemento del array");
precios.pop();
console.log(precios);

console.log("Eliminar el primer elemento del array");
precios.shift();
console.log(precios);

console.log("Iteración con While");
let indice = 0;
while (indice < precios.length) {
    console.log("Precio", indice, ":", precios[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i = 0; i < precios.length; i++) {
    console.log(precios[i]);
}

console.log("Iteración con For...of");
for (let precio of precios) {
    console.log(precio);
}

console.log("Iteración con forEach");
precios.forEach(function (valor, indice) {
    console.log(indice, valor);
});
