"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = exports.Propiedad = void 0;
var Propiedad = /** @class */ (function () {
    function Propiedad(direccion, tipo) {
        this.direccion = direccion;
        this.tipo = tipo;
    }
    Propiedad.prototype.mostrar = function () {
        console.log("Propiedad en ".concat(this.direccion, ", Tipo: ").concat(this.tipo));
    };
    return Propiedad;
}());
exports.Propiedad = Propiedad;
var Departamento = /** @class */ (function (_super) {
    __extends(Departamento, _super);
    function Departamento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Departamento;
}(Propiedad));
exports.Departamento = Departamento;
var casa1 = new Propiedad('Av. Amazonas 123', 'Casa');
var dep1 = new Departamento('Calle Quito 456', 'Departamento');
casa1.mostrar();
dep1.mostrar();
