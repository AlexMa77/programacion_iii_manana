class Agente {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    gestionar() {
        console.log("Agente gestionando . . .")
    }
    bonoVentas() {
        return this.salario*0.10;
    }
    comision(extra) {
        return ((this.salario/30)/8)*extra*2;
    }
}

class AgenteSenior extends Agente {
    bonoVentas() {
        return this.salario*0.20;
    }
    comision(extra) {
        return ((this.salario/30)/8)*extra*3;
    }
}

class AgenteJunior extends Agente {
    bonoVentas() {
        return this.salario*0.05;
    }
}

const seniorLuis = new AgenteSenior('Luis', 1800);
const juniorAna = new AgenteJunior('Ana', 900);
seniorLuis.gestionar();
juniorAna.gestionar();
console.log(seniorLuis.bonoVentas());
console.log(juniorAna.bonoVentas());
console.log(seniorLuis.comision(5));
console.log(juniorAna.comision(4));
