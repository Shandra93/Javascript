const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre:'Monitor 20 Pulgadas', precio: 500},
    {nombre:'Televisión 50 Pulgadas', precio: 700},
    {nombre:'Tablet', precio: 200},
    {nombre:'Audifonos', precio: 50},
    {nombre:'Teclado', precio: 500},
    {nombre:'Celular', precio: 300},
    {nombre:'Bocinas', precio: 300},
    {nombre:'Laptop', precio: 800}
];

// forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
    }
});

// includes
let resultado = meses.includes('Diciembre');

// Some ideal para arreglo de objetos
resultado = carrito.some ( producto => producto.nombre == "Celular");

// Reduce
resultado = carrito.reduce(function(total,producto) {
    return total + producto.precio
}, 0);

// Filter - Cuando es mayor, menor, o igual 

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado)