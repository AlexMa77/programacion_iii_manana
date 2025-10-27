console.log ("OBJETOS");
let persona = {
    nombre: "Alex",
    edad: 18,
    ciudad: "Quito"
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona["edad"]);

console.log("Modificación del objeto");
persona.nombre = "Gabriel";
console.log(persona);
console.log("Incluir clave al objeto");
persona.direccion = "Tumbaco";
console.log(persona);
console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);
console.log("Recorrer un objeto");
for (let clave in persona) {
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar claves con Object.values");
console.log(Object.values(persona));

console.log("Objetos Anidados");
let estudiante = {
    nombre: "Alex",
    apellido: "Macias",
    contacto: {
        correo: "alex@gmail.com",
        telefono: "02248948",
        celular: "0987654321"
    },
    materias: [
        {
            nombre: "Programacion III", 
            nota: 8
        }, 
        {
            nombre: "Base de Datos II", 
            nota: 9
        }, 
    ]
};
console.log("Estudiante" , estudiante);

