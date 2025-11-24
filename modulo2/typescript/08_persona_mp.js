"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
var Casa = /** @class */ (function () {
    function Casa(direccion, descripcion, precio, propietario) {
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.propietario = propietario;
    }
    Casa.prototype.mostrarCasa = function () {
        console.log("Casa en: ".concat(this.direccion, ", ").concat(this.descripcion, ", Precio: $").concat(this.precio.toFixed(2), ", Propietario: ").concat(this.propietario.nombre));
    };
    return Casa;
}());
exports.Casa = Casa;
