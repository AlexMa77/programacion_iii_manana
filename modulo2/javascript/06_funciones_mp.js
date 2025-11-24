console.log("FUNCIONES");

console.log("FORMA CLÁSICA");
function mensajeMAC() {
    console.log("Bienvenido a Inmobiliaria MAC");
}
mensajeMAC();

console.log("FORMA CON PARÁMETROS Y RETORNO");
function calcularComision(precio, porcentaje) {
    return precio * (porcentaje / 100);
}
let comision = calcularComision(50000, 5);
console.log("La comisión es:", comision);

console.log("FUNCIONES FLECHA");
const restaCostos = (a, b) => {
    return a - b;
}
let restaResultado = restaCostos(90000, 50000);
console.log("Diferencia de precios:", restaResultado);

console.log("FUNCION RETORNO DIRECTO");
const impuesto = x => x * 0.15;
console.log("Impuesto del valor 50000:", impuesto(50000));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludoCliente(nombre, saludo = "Bienvenido") {
    return saludo + " " + nombre + " a MAC";
}
let s1 = saludoCliente("Alex");
let s2 = saludoCliente("Gabriel", "Buenos días");
console.log(s1);
console.log(s2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let piso = 7;
if (esPar(piso)) {
    console.log("El piso", piso, "es par");
} else {
    console.log("El piso", piso, "es impar");
}
let piso2 = 4;
if (esPar(piso2)) {
    console.log("El piso", piso2, "es par");
} else {
    console.log("El piso2", piso2, "es impar");
}

function calcularAreaTerreno(base, altura) {
    return (base * altura) / 2;
}
let terreno1 = calcularAreaTerreno(20, 30);
console.log("Área del terreno:", terreno1);
let terreno2 = calcularAreaTerreno(15, 40);
console.log("Área del terreno:", terreno2);
