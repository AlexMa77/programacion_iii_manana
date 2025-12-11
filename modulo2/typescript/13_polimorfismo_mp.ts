import { Propiedad } from "./11_herencia_mp";

export class CasaGrande extends Propiedad {
    mostrarHabitaciones(): void {
        console.log('Casa con muchas habitaciones');
    }
}

const miCasa = new CasaGrande('Av. Amazonas 123', 'Casa');
console.log(miCasa.direccion);
console.log(miCasa.tipo);
miCasa.mostrar();
miCasa.mostrarHabitaciones();
