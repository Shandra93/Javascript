function taxCalculator() {
    var itemPrice = prompt("Enter your product Price: ");
    var Recurrences = prompt("Enter your height in meters: ");
    var tax = prompt("Enter the tax applied for this purchase: ");

    itemPrice = parseFloat(itemPrice);
    Recurrences = parseFloat(Recurrences);
    tax = parseFloat(tax + 1);

    // Check if the input is valid
    if (isNaN(itemPrice) || isNaN(Recurrences) || isNaN(tax) ||itemPrice <= 0 || tax <= 0) {
        return "Invalid input. Please enter valid numbers for Price and recurrences.";
    }

    // Calculate BMI
    var finalPrice = Math.round(itemPrice * tax) / Recurrences;

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