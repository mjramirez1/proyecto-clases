import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

const impuesto1 = new Impuestos(100, 20)
const cliente1 = new Cliente('Cristian', impuesto1)
console.log(cliente1.calcularImpuesto())