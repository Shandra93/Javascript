let nombre = prompt("Cual es tu nombre?")
let edad = prompt("Cual es tu edad?")

if (edad < 18) {
    console.log("Hola, " + nombre + " ,eres menor de edad");
    alert("Eres menor de edad")
} else {
    console.log("Hola, " + nombre + ",Eres mayor de edad");
    alert("Eres mayor de edad, Bienvenido!")
}

