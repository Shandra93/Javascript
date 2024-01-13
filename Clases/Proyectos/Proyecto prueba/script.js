function redirectToCalculadora( precio) {
    localStorage.setItem('precioProducto', precio);
    window.location.href = './Paginas/paginaPagos.html';
}

// En tu otro documento HTML (por ejemplo, paginaPagos.html)
document.addEventListener('DOMContentLoaded', function () {
    var montoTotalElement = document.getElementById('montoTotal');
    
    // Obtén el precio almacenado en el localStorage
    var precioProducto = localStorage.getItem('precioProducto');
    
    // Actualiza el contenido del elemento con id 'montoTotal'
    if (montoTotalElement && precioProducto) {
        montoTotalElement.textContent = precioProducto;
    }
});

