// Definir un objeto que contiene los productos o servicios con sus precios
const productos = {
    producto1: 10,
    producto2: 20,
    producto3: 30,
    // Agrega más productos según sea necesario
};    
// Función para calcular el costo total
function calcularCostoTotal(seleccion) {
    let costoTotal = 0;

    // Iterar sobre la selección del usuario
    for (const producto in seleccion) {
        if (seleccion.hasOwnProperty(producto)) {
        const cantidad = seleccion[producto];
        const precioUnitario = productos[producto];

        // Verificar que el producto exista en la lista y la cantidad sea un número positivo
        if (precioUnitario !== undefined && !isNaN(cantidad) && cantidad >= 0) {
          costoTotal += cantidad * precioUnitario;
        } else {
    console.log(`Advertencia: Producto "${producto}" no válido.`);
        }
        }
    }
  
    return costoTotal;
  }
  
/*   // Ejemplo de uso
  const seleccionUsuario = {
    producto1: 2,
    producto2: 1,
    // Agrega más productos según sea necesario
  }; */
  
  const costoTotal = calcularCostoTotal(seleccionUsuario);
  console.log(`El costo total de la selección es: $${costoTotal}`);
  