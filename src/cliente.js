export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto
    }
    getNombre() {
        return this._nombre
    }
    setNombre() {
        this._nombre = nombre
    }
    calcularImpuesto(){
        return (`El impuesto total a pagar es: ${(this._impuesto._montoBrutoAnual - this._impuesto._deducciones) * 0.21}`)
    }
}
