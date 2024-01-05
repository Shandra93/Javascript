function Calculo() {
    var elementoKm = document.getElementById("primerNumero");
    var textoKm = elementoKm.value;
    var cantidadKm = Number(textoKm);

    var Litros = cantidadKm / 8.8;
    var Litros = Math.ceil(Litros);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = `Carga, ${Litros} litros de combustible`;
}