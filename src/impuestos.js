export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }
    getmontoBrutoAnual() {
        return this._montoBrutoAnual
    }
    setmontoBrutoAnual() {
        this._montoBrutoAnual = montoBrutoAnual
    }
    getdeducciones() {
        return this._deducciones
    }
    setdeducciones() {
        this._deducciones = deducciones
    }

}