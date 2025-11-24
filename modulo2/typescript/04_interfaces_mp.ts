interface Propietario {
    id: number;
    nombre: string;
    correo?: string;
}

const propietario1: Propietario = {
    id: 1,
    nombre: 'Alex Gabriel Macías'
}

const propietario2: Propietario = {
    id: 2,
    nombre: 'Laura Pérez',
    correo: 'laura@inmobiliaria.com'
}

console.log(propietario1);
console.log(propietario1.id);
console.log(propietario1.nombre);
console.log(propietario1.correo);
console.log(propietario2);
console.log(propietario2.id);
console.log(propietario2.nombre);
console.log(propietario2.correo);
