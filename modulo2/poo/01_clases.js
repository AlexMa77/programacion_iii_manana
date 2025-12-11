class car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(` ${this.brand} ${this.model} esta encedido`);
    }
    run(){
        console.log(` ${this.brand} ${this.model} esta corriendo`);
    }
    stop(){
        console.log(` ${this.brand} ${this.model} esta apagado`);
    }
}

const car1 = new car ("Toyota", "Corolla");
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(miCarro.brand);
console.log(miCarro.model);