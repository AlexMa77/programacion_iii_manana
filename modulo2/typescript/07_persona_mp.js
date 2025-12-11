"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propietario = void 0;
var Propietario = /** @class */ (function () {
    function Propietario(nombre, edad, correo) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    Propietario.prototype.mostrarPropietario = function () {
        console.log("Propietario: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Correo: ").concat(this.correo || 'No proporcionado'));
    };
    return Propietario;
}());
exports.Propietario = Propietario;
var propietario1 = new Propietario('Alex Gabriel Macias', 30, 'alex@gmail.com');
var propietario2 = new Propietario('Pablo E', 45);
propietario1.mostrarPropietario();
propietario2.mostrarPropietario();
