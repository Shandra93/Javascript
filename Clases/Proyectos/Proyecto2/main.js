function Calculo() {
    var elementoKms = document.getElementById("primerNumero");
    var textoKm = elementoKms.value;
    var cantidadKm = parseFloat(textoKm);

    var cantltrs = cantidadKm / 8.8;

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga, " + cantltrs " litr os de combustible";

}