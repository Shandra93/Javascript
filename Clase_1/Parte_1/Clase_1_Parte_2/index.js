// Definición de la máquina expendedora
const maquinaExpendedora = {
    productos: [
        { nombre: "Refresco", precio: 1.50, cantidad: 5 },
        { nombre: "Snacks", precio: 1.00, cantidad: 3 },
        { nombre: "Agua", precio: 0.75, cantidad: 7 }
    ],
    saldoUsuario: 0,

    // Función para mostrar los productos disponibles
    mostrarProductos: function () {
        console.log("Productos disponibles:");
        this.productos.forEach(producto => {
            console.log(`${producto.nombre} - $${producto.precio} - Disponibles: ${producto.cantidad}`);
        });
    },

    // Función para realizar una compra
    realizarCompra: function (indiceProducto, cantidad) {
        const producto = this.productos[indiceProducto];
        if (producto && producto.cantidad >= cantidad && this.saldoUsuario >= producto.precio * cantidad) {
            // Procesar la compra
            this.saldoUsuario -= producto.precio * cantidad;
            producto.cantidad -= cantidad;
            console.log(`Compra exitosa: ${cantidad} ${producto.nombre}(s).`);
            console.log(`Saldo restante: $${this.saldoUsuario.toFixed(2)}`);
        } else {
            console.log("Error en la compra. Verifique la cantidad y el saldo.");
        }
    },

    // Función para agregar dinero al saldo del usuario
    agregarDinero: function (monto) {
        this.saldoUsuario += monto;
        console.log(`Saldo actual: $${this.saldoUsuario.toFixed(2)}`);
    }
};

// Ejemplo de uso
maquinaExpendedora.mostrarProductos();
maquinaExpendedora.agregarDinero(2.00);
maquinaExpendedora.realizarCompra(0, 2);
