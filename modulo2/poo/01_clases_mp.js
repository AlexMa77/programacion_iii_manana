class Propiedad{
    constructor(tipo, ubicacion){
        this.tipo = tipo;
        this.ubicacion = ubicacion;
    }
    start(){
        console.log(`${this.tipo} en ${this.ubicacion} está disponible`);
    }
    run(){
        console.log(`${this.tipo} en ${this.ubicacion} está en proceso de reserva`);
    }
    stop(){
        console.log(`${this.tipo} en ${this.ubicacion} ha sido vendida`);
    }
}

const propiedad1 = new Propiedad("Casa", "Tumbaco");
propiedad1.start();
propiedad1.run();
propiedad1.stop();
console.log(propiedad1.tipo);
console.log(propiedad1.ubicacion);
