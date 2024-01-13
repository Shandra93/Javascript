function bmiCalculator() {
<<<<<<< HEAD:Clase_1/Angela_course_1/projects/Bmi/Main.js
    var weight = prompt("Enter your weight in kilograms: ");
    var height = prompt("Enter your height in meters, Ex: 1.8m");
=======
    alert("Bienvenido a la calculadora de masa Corporal")
    var weight = prompt("Ingresa tu peso en kilogramos: ");
    var height = prompt("Ingresa tu altura en metros: Ex: 1.8m");
>>>>>>> 790af65e7b9371259a6b37f6e51293cf82dd8da3:Clases/Clase_1/Angela_course_1/projects/Bmi/Main.js

    weight = parseFloat(weight);
    height = parseFloat(height);

    // Checa si el valor es valido
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return "Entrada invalida. Ingresa peso y altura en el formato correcto";
    }

    // Hace el calculo del indice de masa corporal
    let bmi = weight / (height * height);
    let interpretation;

    if (bmi < 18.5) {
<<<<<<< HEAD:Clase_1/Angela_course_1/projects/Bmi/Main.js
        interpretation = "You are underweight!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "You are normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = "You are overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        interpretation = "You are obese";
    } else {
        interpretation = "You are extremely obese";
=======
        interpretation = "Estas debajo del peso ideal";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Tienes un peso promedio";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Cuidado, estas pasado del peso ideal";
    } else {
        interpretation = "Peligro, estas dentro del rango de obesidad";
>>>>>>> 790af65e7b9371259a6b37f6e51293cf82dd8da3:Clases/Clase_1/Angela_course_1/projects/Bmi/Main.js
    }

    console.log(interpretation);
    alert(interpretation);
}

<<<<<<< HEAD:Clase_1/Angela_course_1/projects/Bmi/Main.js
bmiCalculator();
=======
// Llama la funcion y la registra dentro de la variable de resultado
var result = bmiCalculator();
alert(result)
console.log(result);
>>>>>>> 790af65e7b9371259a6b37f6e51293cf82dd8da3:Clases/Clase_1/Angela_course_1/projects/Bmi/Main.js
