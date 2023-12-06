function calcularPagoCuotas(montoTotal, numeroCuotas, tasaInteres) {
    // Calcula el interés mensual
    const interesMensual = tasaInteres / 100 / 12;

    // Calcula la cuota mensual
    const cuotaMensual = (montoTotal * interesMensual) / (1 - Math.pow(1 + interesMensual, -numeroCuotas));

    // Retorna el resultado redondeado a dos decimales
    return cuotaMensual.toFixed(2);
}

// Prompts de usuario
const montoTotal = parseFloat(prompt("Ingrese el monto total:"));
const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"));
const tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual:"));

const cuotaMensual = calcularPagoCuotas(montoTotal, numeroCuotas, tasaInteres);
console.log(`El pago mensual sería: $${cuotaMensual}`);
alert(`El pago total es de $${montoTotal}, El pago mensual sería de: $${cuotaMensual} por ${numeroCuotas} meses`)
