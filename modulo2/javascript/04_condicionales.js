let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
}

password = "pass123";

if (password === "pass12345") {
    console.log("Usuario logueado");
} else {
    console.log("Acceso denegado");
}

let nota = 7 ;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {   
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tienen_licencia = true;
if (edad >= 18) {
    if (tienen_licencia) {
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

//Estrucura switch
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        default:
        console.log("Dia Normal");
        break;
}

let numero1 = 110;
let numero2 = 89;
let numero3 = 101;
let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}
console.log("El numero mayor es:", mayor);

let a = 30;
let b = 40;
let c = 50;
mayor=0
if (a > b) {
    mayor = a;
} if (c > mayor) {
    mayor = c;
}
console.log("El numero mayor es:", mayor);