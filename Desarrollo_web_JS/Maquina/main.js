document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del DOM
    const productos = document.querySelectorAll('.producto');
    const totalElement = document.getElementById('total');
    const cambioElement = document.getElementById('cambio');
    const comprarButton = document.getElementById('comprar');
    const listaProductos = document.getElementById('listaProductos');

    // Variables de seguimiento
    let total = 0;
    let carrito = [];

    // Agregar listeners a los productos
    productos.forEach(producto => {
        producto.addEventListener('click', function () {
            const nombreProducto = producto.textContent;
            const precio = parseFloat(producto.getAttribute('data-precio'));
            total += precio;
            carrito.push({ nombre: nombreProducto, precio: precio });
            actualizarPantalla();
        });
    });

    // Listener para el botón de comprar
    comprarButton.addEventListener('click', function () {
        const dineroIngresado = parseFloat(prompt('Ingrese la cantidad de dinero:'));
        if (dineroIngresado >= total) {
            const cambio = dineroIngresado - total;
            alert(`¡Compra exitosa!\nCambio: $${cambio.toFixed(2)}`);
            reiniciarMaquina();
        } else {
            alert('Dinero insuficiente. Por favor, ingrese una cantidad suficiente.');
        }
    });

    // Función para actualizar la pantalla con el total y la lista de productos en el carrito
    function actualizarPantalla() {
        totalElement.textContent = total.toFixed(2);
        cambioElement.textContent = (0).toFixed(2); // Reiniciar el cambio al seleccionar un producto
        mostrarProductosEnCarrito();
    }

    // Función para mostrar los productos en el carrito
    function mostrarProductosEnCarrito() {
        listaProductos.innerHTML = "";
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            listaProductos.appendChild(li);
        });
    }

    // Función para reiniciar la máquina después de una compra
    function reiniciarMaquina() {
        total = 0;
        carrito = [];
        actualizarPantalla();
    }
});
