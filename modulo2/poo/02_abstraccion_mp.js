class Cliente{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    mayorEdad(){
        if (this.edad >= 18){
            console.log("Puede adquirir una propiedad en MAC");
        }else{
            console.log("No puede adquirir una propiedad en MAC");
        }
    }
    mostrar(){
        console.log(this.nombre, this.edad);
    }
}

const cliente1 = new Cliente('Gabriel', 17);
cliente1.mayorEdad();
cliente1.mostrar();
