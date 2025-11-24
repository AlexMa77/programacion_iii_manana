export class Casa {
    public direccion: string;
    private codigoInterno: string;
    protected idGenerico: string = 'CASA-001';

    constructor(direccion: string) {
        this.direccion = direccion;
        this.generarCodigoInterno();
    }

    generarCodigoInterno(): void {
        this.codigoInterno = 'CI-' + new Date().getTime();
    }

    getCodigoInterno(): string {
        return this.codigoInterno;
    }

    getAtributos(): any {
        return {
            direccion: this.direccion,
            codigoInterno: this.codigoInterno,
            idGenerico: this.idGenerico
        }
    }
}
