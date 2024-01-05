function maquinaProductos(codigoUsuario) {
    switch (codigoUsuario) {
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
let producto = maquinaProductos(parseInt(codigoUsuario));

console.log(producto);

if ( codigoUsuario <= 3 ){
    alert(`Tu producto ${producto} esta siendo despachado, un momento, por favor`);
}

else {
    alert("Producto no reconocido")
}