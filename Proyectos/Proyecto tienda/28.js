// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { 
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    RetornarPrecio() {
        return `El precio del productto es ${this.precio}`
    }
}

const Producto2 = new Producto('Monitor Curvo de 49"', 800);
const Producto3 = new Producto('Laptop', 300);

// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() { 
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }

    RetornarPrecio() {
        super.RetornarPrecio();
        console.log('Y si hay en existencia');
    }

}
const libro = new Libro('Javascript, La revolucion', 120, '91012344123412')
console.log(libro.formatearProducto() );
console.log(libro.RetornarPrecio() );
console.log(Producto2.formatearProducto() );


