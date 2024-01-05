document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del DOM
    const productos = document.querySelectorAll('.producto');
    const totalElement = document.getElementById('total');
    const cambioElement = document.getElementById('cambio');
    const comprarButton = document.getElementById('comprar');
    const listaProductos = document.getElementById('listaProductos');
    const limpiarCarritoButton = document.getElementById('limpiarCarrito');

    // Variables de seguimiento
    let total = 0;
    let carrito = [];

    const carritoLocalStorage = localStorage.getItem('carrito') || '[]';
    carrito = JSON.parse(carritoLocalStorage);
    total = calcularTotal(carrito);
    actualizarPantalla();

    productos.forEach(producto => {
        producto.addEventListener('click', function () {
            const nombreProducto = producto.textContent;
            const precio = parseFloat(producto.getAttribute('data-precio'));

            // Verificar si el producto ya está en el carrito
            const productoEnCarrito = carrito.find(item => item.nombre === nombreProducto);

            if (productoEnCarrito) {
                // Si el producto ya está en el carrito, aumenta la cantidad
                productoEnCarrito.cantidad += 1;
            } else {
                // Si el producto no está en el carrito, agrégalo
                carrito.push({ nombre: nombreProducto, precio: precio, cantidad: 1 });
            }

            total += precio;
            guardarEnLocalStorage();
            actualizarPantalla();
        });
    });

    // Listener para el botón de comprar
    comprarButton.addEventListener('click', function () {
        const dineroIngresado = parseFloat(prompt('Ingrese la cantidad de dinero:'));
        dineroIngresado >= total && comprarProducto(dineroIngresado);
    });

    limpiarCarritoButton.addEventListener('click', limpiarCarrito);

    function calcularTotal(carrito) {
        return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    }

    // Función para actualizar la pantalla con el total y la lista de productos en el carrito
    function actualizarPantalla() {
        totalElement.textContent = total.toFixed(2);
        cambioElement.textContent = (0).toFixed(2); 
        mostrarProductosEnCarrito();
    }

    function mostrarProductosEnCarrito() {
        listaProductos.innerHTML = "";
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
            listaProductos.appendChild(li);
        });
    }

    function guardarEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function actualizarCambio(cambio) {
        cambioElement.textContent = cambio.toFixed(2);
    }

    function reiniciarMaquina() {
        total = 0;
        carrito = [];
        localStorage.removeItem('carrito'); 
        actualizarPantalla();
    }

    function comprarProducto(dineroIngresado) {
        if (dineroIngresado >= total) {
            const cambio = dineroIngresado - total;
            alert(`¡Compra exitosa!\nCambio: $${cambio.toFixed(2)}`);
            actualizarCambio(cambio) && reiniciarMaquina();
        } else {
            alert('Dinero insuficiente. Por favor, ingrese una cantidad suficiente.');
        }
    }

    // Función para limpiar el carrito
    function limpiarCarrito() {
        alert("vuelve pronto!")
        total = 0;
        carrito = [];
        localStorage.removeItem('carrito');
        actualizarPantalla();
    }
});
