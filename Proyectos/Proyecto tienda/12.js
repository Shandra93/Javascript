/* "use strict"; // correr JS en modo estricto
 */
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
    moneda: 'USD'
};

Object.seal(producto)

producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto)); // tiene que llevar mayuscula .isSealed
console.log(Object.isFrozen(producto)); // tiene que llevar mayuscula .isFrozen

// diferencia, sealed, si permite modificar modificar propiedades ya existentes, frezed ni modificar lo actual ni pasado //