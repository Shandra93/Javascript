const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre:'Monitor 20 Pulgadas', precio: 500},
    {nombre:'Televisor 50 Pulgadas', precio: 700},
    {nombre:'Audifonos', precio: 200},
    {nombre:'Teclado', precio: 50},
    {nombre:'Celular', precio: 500},
    {nombre:'Bocinas', precio: 300},
    {nombre:'Laptop', precio: 800}
];

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});