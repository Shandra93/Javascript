// Array para almacenar los resultados
const resultadosArray = [];

// Función para calcular la cuota mensual
function calcularPagoCuotas() {
    // Obtén referencias a los elementos del formulario y al resultado
    const montoTotalInput = document.getElementById('montoTotal');
    const numeroCuotasInput = document.getElementById('numeroCuotas');
    const tasaInteresInput = document.getElementById('tasaInteres');
    const resultadoDiv = document.getElementById('resultado');

        const montoTotal = parseFloat(montoTotalInput.value);
        const numeroCuotas = parseInt(numeroCuotasInput.value);
        const tasaInteres = parseFloat(tasaInteresInput.value);

        // Valida los valores de entrada
        if (isNaN(montoTotal) || isNaN(numeroCuotas) || isNaN(tasaInteres) || montoTotal <= 0 || numeroCuotas <= 0 || tasaInteres <= 0) {
            alert("Por favor, ingrese valores válidos y mayores que cero en todos los campos.");
            return;
        }

        const cuotaMensual = calcularPagoMensual(montoTotal, numeroCuotas, tasaInteres);

        resultadosArray.push(`El pago mensual sería: $${cuotaMensual.toFixed(2)}`);

        resultadoDiv.innerHTML = resultadosArray.join('<br>');

    // Muestra un mensaje de agradecimiento cuando el usuario decide no realizar más cálculos
    alert("¡Gracias por usar la calculadora!");
}

// Función para calcular la cuota mensual
function calcularPagoMensual(montoTotal, numeroCuotas, tasaInteres) {
    // Calcula el interés mensual
    const interesMensual = tasaInteres / 100 / 12;

    // Calcula la cuota mensual
    const cuotaMensual = (montoTotal * interesMensual) / (1 - Math.pow(1 + interesMensual, -numeroCuotas));

    // Retorna el resultado redondeado a dos decimales
    return cuotaMensual;
}

// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Agrega un event listener al botón de calcular
    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', calcularPagoCuotas);
});
