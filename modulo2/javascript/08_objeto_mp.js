console.log("OBJETOS - INMOBILIARIA MAC");

let propiedad = {
    direccion: "Av. Amazonas",
    precio: 120000,
    ciudad: "Quito"
};

console.log(propiedad);
console.log(propiedad.direccion);
console.log(propiedad.precio);
console.log(propiedad.ciudad);
console.log(propiedad["precio"]);

console.log("Modificación del objeto");
propiedad.precio = 135000;
console.log(propiedad);

console.log("Incluir clave al objeto");
propiedad.disponible = true;
console.log(propiedad);

console.log("Eliminar clave del objeto");
delete propiedad.disponible;
console.log(propiedad);

console.log("Recorrer un objeto");
for (let clave in propiedad) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(propiedad));

console.log("Mostrar valores con Object.values");
console.log(Object.values(propiedad));

console.log("Objetos Anidados");
let cliente = {
    nombre: "Alex",
    apellido: "Macias",
    contacto: {
        correo: "Alex@mac.com",
        telefono: "022415780",
        celular: "0998765432"
    },
    propiedadesInteres: [
        {
            direccion: "La Carolina",
            precio: 95000
        },
        {
            direccion: "Tumbaco",
            precio: 180000
        }
    ]
};

console.log("Cliente", cliente);
