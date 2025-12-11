"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
var Casa = /** @class */ (function () {
    function Casa(direccion) {
        this.idGenerico = 'CASA-001';
        this.direccion = direccion;
        this.generarCodigoInterno();
    }
    Casa.prototype.generarCodigoInterno = function () {
        this.codigoInterno = 'CI-' + new Date().getTime();
    };
    Casa.prototype.getCodigoInterno = function () {
        return this.codigoInterno;
    };
    Casa.prototype.getAtributos = function () {
        return {
            direccion: this.direccion,
            codigoInterno: this.codigoInterno,
            idGenerico: this.idGenerico
        };
    };
    return Casa;
}());
exports.Casa = Casa;
