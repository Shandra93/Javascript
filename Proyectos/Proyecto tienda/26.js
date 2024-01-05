
/* const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Television 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
]; */

//this

window.nombre = 'Un nombre';

const reservacion = {
    nombre: 'Shandra',
    apellido: 'Uribe',
    total: 5000,
    pagado: false,
    informacion: function() { 
        console.log(`El cliente ${this.nombre} reservo, y su cantidad a pagar es de ${this.total}`);
    }

    /* informacion: () => {console.log(`${this.nombre}`)};  Hace referencia
    a la ventana global, o bien a undefined por que no hay .nombre sedignado*/
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Uribe',
    total: 200,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo, y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();