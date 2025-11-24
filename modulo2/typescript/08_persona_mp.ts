import { Propietario } from "./07_persona_mp";

export class Casa {
    direccion: string;
    descripcion: string;
    precio: number;
    propietario: Propietario;

    constructor(direccion: string, descripcion: string, precio: number, propietario: Propietario) {
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.propietario = propietario;
    }

    mostrarCasa(): void {
        console.log(`Casa en: ${this.direccion}, ${this.descripcion}, Precio: $${this.precio.toFixed(2)}, Propietario: ${this.propietario.nombre}`);
    }
}
