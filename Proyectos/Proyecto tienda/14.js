
// Arreglos o arrays

const numeros = [10, 20, 30, 40, 50];

/* console.table(numeros);
 */
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

/* console.table(meses);
 */
// Acceder a los valores del arreglo
/* console.log(numeros[0]) */

/* meses.forEach( function(numero) {
    console.log(numero)
}); */

console.table(numeros)

// Agregar elementos
meses.push('Junio', 'Julio');
meses.unshift('Noviembre', 'Diciembre ');
console.table(meses);


// Eliminar elementos 
meses.pop(); // final del arreglo
meses.shift(); // inicio del arreglo
meses.splice(2,1); // recorre 2 posiciones y elimina 1 elemento

const nuevoArreglo = [...meses,'junio'];
console.log(nuevoArreglo);