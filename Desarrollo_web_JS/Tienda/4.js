// Array

const numeros = [ 10, 20, 30, 40, 50];

/* console.table(numeros)
 */
const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses)

/* console.table(meses)
 */
// Acceder a los valores de un arreglo

/* console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]); */

//conocer longitud del arreglo
/* console.log(meses.length);
 */


/* meses.forEach( function (numero) {
    console.log(numero);
} ) */

//agregar elementos a un arreglo
/* numeros[5] = 60;
console.table(numeros)


numeros.push(60,70,80); // agrega al final del arreglo
numeros.unshift(-10,-20,-30); // al inicio del arreglo */

/* meses.pop(); // elimina ultimo elemento del arreglo
meses.shift(); // elimina primer elemento del arreglo

meses.splice(2,1);  */// recorre a posicion 2 y elimina 1 elemento

/* console.table(numeros);
 */
//Rest Operator o spread operator
/* 
const nuevoArreglo = [...meses,'Junio'];

console.log(nuevoArreglo); */

