function bmiCalculator() {
    var weight = prompt("Enter your weight in kilograms: ");
    var height = prompt("Enter your height in meters, Ex: 1.8m");

    weight = parseFloat(weight);
    height = parseFloat(height);

    // Checa si el valor es valido
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return "Invalid input. Please enter valid numbers for weight and height.";
    }

    // Hace el calculo del indice de masa corporal
    let bmi = weight / (height * height);
    let interpretation;

    if (bmi < 18.5) {
        interpretation = "You are underweight!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "You are normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = "You are overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        interpretation = "You are obese";
    } else {
        interpretation = "You are extremely obese";
    }

    console.log(interpretation);
    alert(interpretation);
}

bmiCalculator();