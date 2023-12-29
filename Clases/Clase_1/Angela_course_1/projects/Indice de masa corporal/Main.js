function bmiCalculator() {
    alert("Bienvenido a la calculadora de masa Corporal")
    var weight = prompt("Ingresa tu peso en kilogramos: ");
    var height = prompt("Ingresa tu altura en metros: Ex: 1.8m");

    weight = parseFloat(weight);
    height = parseFloat(height);

    // Checa si el valor es valido
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return "Entrada invalida. Ingresa peso y altura en el formato correcto";
    }

    // Hace el calculo del indice de masa corportal
    let bmi = weight / (height * height);
    let interpretation;

    if (bmi < 18.5) {
        interpretation = "Estas debajo del peso ideal";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Tienes un peso promedio";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Cuidado, estas pasado del peso ideal";
    } else {
        interpretation = "Peligro, estas dentro del rango de obesidad";
    }

    return interpretation;
}

// Llama la funcion y la registra dentro de la variable de resultado
var result = bmiCalculator();
alert(result)
console.log(result);
