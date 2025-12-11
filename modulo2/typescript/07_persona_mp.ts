export class Propietario {
    nombre: string;
    edad: number;
    correo?: string;

    constructor(nombre: string, edad: number, correo?: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }

    mostrarPropietario(): void {
        console.log(`Propietario: ${this.nombre}, Edad: ${this.edad}, Correo: ${this.correo || 'No proporcionado'}`);
    }
}

const propietario1 = new Propietario('Alex Gabriel Macias', 30, 'alex@gmail.com');
const propietario2 = new Propietario('Pablo E', 45);

propietario1.mostrarPropietario();
propietario2.mostrarPropietario();
