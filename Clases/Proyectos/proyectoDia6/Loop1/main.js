function multiplicar() {
    // obtener numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let NumeroTabla = Number(textoNumeroTabla);

    // obtener tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //producir y mostrar resultados

    for(x = 1 ; x <= 10 ; x++) {
        //Calcular resultado
        let numeroResultado = NumeroTabla * x;

        //mostrar resultado
        let textoResultado = NumeroTabla + " por " + x + " es igual a " + numeroResultado;

        //crear elemento de tabla
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);

    }
}