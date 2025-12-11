import { Propiedad, Departamento } from "./11_herencia_mp";

const miCasa = new Propiedad('Calle Los Pinos 45', 'Casa');
console.log(miCasa.direccion);
console.log(miCasa.tipo);
miCasa.mostrar();

const miDepartamento = new Departamento('Av. Los Robles 789', 'Departamento');
console.log(miDepartamento.direccion);
console.log(miDepartamento.tipo);
miDepartamento.mostrar();
