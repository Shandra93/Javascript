// Objeto para representar cada producto
function Producto(nombre, imagenSrc, descripcion, precio) {
    this.nombre = nombre;
    this.imagenSrc = imagenSrc;
    this.descripcion = descripcion;
    this.precio = precio;
}

// Arreglo para almacenar productos en el catálogo
const catalogoProductos = [
    new Producto("Television 55\" - LG", "./Assets/television.avif", "Television 55\" - LG", 1000),
    new Producto("Laptop 13\" - HP", "./Assets/laptop.jpg", "Laptop 13\" - HP", 800),
    new Producto("Iphone 15 Pro - Apple", "./Assets/iphone.jpg", "Iphone 15 Pro - Apple", 1200),
    new Producto("MacBook Pro - Apple", "./Assets/macbook.jpg", "MacBook Pro - Apple", 1500),
];

// Arreglo para almacenar productos en el carrito de compras
const carritoDeCompras = [];

// Función para calcular el pago
function calcularPago() {
    // Lógica para calcular el pago según la moneda, número de cuotas y tasa de interés seleccionados
    // ... (esta parte debe ser completada según tus necesidades)
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carritoDeCompras.push(producto);
    // Actualizar la visualización del carrito de compras
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito de compras
function mostrarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "<h2>Carrito de Compras</h2>";

    carritoDeCompras.forEach((producto) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("productoEnCarrito");
        productoElement.innerHTML = `<img src="${producto.imagenSrc}" alt="${producto.nombre}"> <p>${producto.nombre}</p>`;
        carritoElement.appendChild(productoElement);
    });

    // Actualizar el resultado y mostrar el carrito
    mostrarResultado();
}

// Función para mostrar el resultado de la operación
function mostrarResultado() {
    const resultadoElement = document.getElementById("resultado");
    // Lógica para mostrar el resultado, por ejemplo, el monto total
    // ... (esta parte debe ser completada según tus necesidades)
}

// Función para obtener el producto seleccionado en el catálogo
function obtenerProductoSeleccionado() {
    const catalogoProductosElement = document.getElementById("catalogoProductos");
    const productoSeleccionadoData = catalogoProductosElement.querySelector(".seleccionado");
    
    if (productoSeleccionadoData) {
        const productoIndex = productoSeleccionadoData.getAttribute("data-producto");
        return catalogoProductos[productoIndex];
    }

    return null;
}

// Event listener para el botón "Calcular Pago"
document.getElementById("calcularButton").addEventListener("click", calcularPago);

// Event listener para el botón "Agregar al Carrito"
document.getElementById("agregarAlCarritoButton").addEventListener("click", () => {
    const productoSeleccionado = obtenerProductoSeleccionado();
    if (productoSeleccionado) {
        agregarAlCarrito(productoSeleccionado);
    }
});

// Event listener para la limpieza de la caché
document.getElementById("limpiarCacheButton").addEventListener("click", () => {
    // Lógica para limpiar la caché
    // ... (esta parte debe ser completada según tus necesidades)
});

// Event listener para los elementos del catálogo
const productosElement = document.getElementById("catalogoProductos");
productosElement.addEventListener("click", (event) => {
    const productoElement = event.target.closest(".producto");
    if (productoElement) {
        // Desmarcar cualquier producto previamente seleccionado
        const productosAnteriores = productosElement.querySelectorAll(".producto");
        productosAnteriores.forEach((producto) => {
            producto.classList.remove("seleccionado");
        });

        // Marcar el producto actual como seleccionado
        productoElement.classList.add("seleccionado");
    }
});
