console.log("FUNCIONES");

console.log("FORMA CLÁSICA");
function saludar() {
    console.log("Hola desde una funcion clásica");
}
saludar();
console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 10);
console.log("El resultado de la suma es:", resultado);

console.log("FUNCIONES FLECHA");
const resta = (a, b) => {
    return a - b;
}
let resultadoResta = resta(9, 5);
console.log("El resultado de la resta es:", resultadoResta);

console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x =>x*x;
console.log("El cuadrado de 5 es:", cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludar="Hola") {
    return saludar + " " + nombre;
}
let saludo1 = saludar("Alex");
let saludo2 = saludar("Gabriel", "Buenos dias");
console.log(saludo1);
console.log(saludo2);


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let numero = 7;
if (esPar(numero)) {
    console.log("El numero", numero, "es par");
} else {
    console.log("El numero", numero, "es impar");
}
let numero2 = 4;
if (esPar(numero2)) {
    console.log("El numero", numero2, "es par");
} else {
    console.log("El numero", numero2, "es impar");
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
let area1 = areaTriangulo(5, 10);
console.log("El area del triangulo es:", area1);
let area2 = areaTriangulo(7, 12);
console.log("El area del triangulo es:", area2);





