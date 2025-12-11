import { Casa } from "./09_acceso_mp";

const miCasa: Casa = new Casa('Av. Amazonas 123');
console.log(miCasa.direccion);
console.log(miCasa.getCodigoInterno());
console.log(miCasa.getAtributos());

const otraCasa: Casa = new Casa('Calle Quito 456');
console.log(otraCasa.direccion);
console.log(otraCasa.getCodigoInterno());
console.log(otraCasa.getAtributos());
