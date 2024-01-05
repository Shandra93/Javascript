// POO Programacion orientada a objetos

// Object literal //

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object constructor //

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//Crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}

//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const Producto2 = new Producto('Monitor Curvo de 49"', 800);
const Producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Shandra','Uribe');

console.log(cliente.formatearCliente());
console.log(Producto2.formatearProducto());
console.log(Producto3.formatearProducto());

