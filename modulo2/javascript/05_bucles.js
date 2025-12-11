for (let i=1; i<=10; i++) {
    console.log("Iteracion numero:", i);
}
suma=0;
for (let i=1; i<=10; i++) {
    suma += i;
}
console.log("sumatoria indices:", suma);

let nombre = "Alex";
for (let i=0; i<=nombre.length -1; i++) {
    console.log(nombre[i]);
}

let tabla = 4;
console.log("Tabla de multiplicar del:", tabla);
for( let i=1; i<=10; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
}

for (let i=1; i<=10; i++) {
    console.log("Cuadrado de ", i, "es", i**2)
}

console.log("Bucle While");
let i = 1;
while (i <= 6) {
    console.log("Indice ", i)
    i++;
}

let miArreglo = [-2,3,1,2,3];
let indice = 1;
while (indice < miArreglo.length) {
    console.log("Valor ", indice, "es", miArreglo[indice]);
    indice++;
}

let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log("El numero par es", num);
    }
    num++;
}

let x=5;
do {
    console.log("x es:", x);
    x--;
}while (x != 0);

let tabla2 = 5;
let contador = 0;
console.log("Tabla de multiplicar del:", tabla2);
while (contador <= 10) {
    console.log(tabla2, "x", contador, "=", tabla2 * contador);
    contador++;
}

let numeros = [45, 78, 12, 89, 23];
let mayor = numeros[0];
let nu=0;
while (nu < numeros.length) {
    if (numeros[nu] > mayor) {
        mayor = numeros[nu];
    }
    nu++;
}
console.log("El numero mayor es:", mayor);