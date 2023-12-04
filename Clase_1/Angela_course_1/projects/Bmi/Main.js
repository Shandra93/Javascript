function bmiCalculator() {
    var weight = prompt("Enter your weight in kilograms:");
    var height = prompt("Enter your height in meters:");

    weight = parseFloat(weight);
    height = parseFloat(height);

    // Check if the input is valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return "Invalid input. Please enter valid numbers for weight and height.";
    }

    // Calculate BMI
    var bmi = Math.round(weight / (height * height));

    // Determine the interpretation based on BMI
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are in the obese range.";
    }

    return interpretation;
}

// Call the function and display the result
var result = bmiCalculator();
alert(result);