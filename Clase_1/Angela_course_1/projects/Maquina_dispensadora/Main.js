function maquinaProductos(codigo) {
    switch (codigo) {
        case 1:
            return "papitas";
            break;
        
        case 2:
            return "galletas";
            break;

        case 3:
            return "refresco";
            break;

        default:
            return "Producto no reconocido";
    }
}

let codigoUsuario = prompt("¿Qué producto quieres: 1, 2 o 3?");
let producto = maquinaProductos(parseInt(1));

console.log(producto);
