function bmiCalculator() {
    var weight = prompt("Enter your weight in kilograms: ");
    var height = prompt("Enter your height in meters: Ex: 1.8m");

    weight = parseFloat(weight);
    height = parseFloat(height);

    // Checa si el valor es valido
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return "Invalid input. Please enter valid numbers for weight and height.";
    }

    // Hace el calculo del indice de masa corportal
    let bmi = weight / (height * height);
    let interpretation;

    if (bmi < 18.5) {
        interpretation = "You are underweight, keep it going";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "You are at normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Be careful, you are overweight";
    } else {
        interpretation = "Danger, you are at obesity range";
    }

    return interpretation;
}

// Llama la funcion y la registra dentro de la variable de resultado
var result = bmiCalculator();
console.log(result);
