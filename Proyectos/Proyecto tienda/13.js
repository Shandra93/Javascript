
const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true,
    moneda: 'USD'
};

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas}
console.log(producto);
console.log(nuevoProducto);