var numero1 = document.getElementById("input1").value;
console.log(numero1);
var numero2 = document.getElementById("input2").value;
console.log(numero2)

var Texto = document.getElementById("textoAleatorio")
var resultado;


function Suma(numero1, numero2) {
    return numero1 + numero2
    console.log(resultado)
}

function Resta(numero1, numero2) {
    
}

function Multiplicacion(numero1, numero2) {
    
}

function Division(numero1, numero2) {
    
}

function potencia(numero1,numero2) {

}
function raizCuadrada(numero1,numero2) {

}
function Random(numero1,numero2) {
    resultado = Math.floor(Math.random(numero1 - numero2) + numero1);
}
function Round() {

}
function Floor() {

}
function ceil() {

}

function resultado() {
    textoAleatorio.textContent = resultado;
}

