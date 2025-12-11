export class Propiedad {
    public direccion: string;
    public tipo: string;
    constructor(direccion: string, tipo: string) {
        this.direccion = direccion;
        this.tipo = tipo;
    }

    mostrar(): void {
        console.log(`Propiedad en ${this.direccion}, Tipo: ${this.tipo}`);
    }
}

export class Departamento extends Propiedad { }

const casa1 = new Propiedad('Av. Amazonas 123', 'Casa');
const dep1 = new Departamento('Calle Quito 456', 'Departamento');

casa1.mostrar();
dep1.mostrar();
