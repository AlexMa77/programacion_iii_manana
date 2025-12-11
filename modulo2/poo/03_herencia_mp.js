class Propiedad {
    constructor(nombre){
        this.nombre = nombre;
    }
    mostrarInfo(){
        console.log("Propiedad registrada")
    }
}

class Casa extends Propiedad{}
const miCasa = new Casa('Casa Central');
const miPropiedad = new Propiedad('Local Comercial');
miCasa.mostrarInfo();
miPropiedad.mostrarInfo();
