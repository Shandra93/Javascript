
function mostrarResultados(resultado) {
    document.getElementById("resultado").value = resultado;
}

function suma() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultados(numero1 + numero2);
}

function resta() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultados(numero1 - numero2);
}

function multiplicacion() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultados(numero1 * numero2);
}

function division() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultados(numero1 / numero2);
}

function sqrt() {
    let numero = +document.getElementById("campo2").value;
    mostrarResultados(Math.sqrt(numero));
}

function pow() {
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultados(Math.pow(numero1,numero2));
}

function absoluto() {
    let numero = +document.getElementById("campo2").value;
    mostrarResultados(Math.abs(numero));
}

function random() {
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    aleatorio = Math.floor(Math.random() * (maximo-minimo) + minimo);
    mostrarResultados(aleatorio);
}


function redondeo() {
    let resultado = document.getElementById("resultado").value;
    mostrarResultados(Math.round(resultado));
}
function piso() {
    let resultado = document.getElementById("resultado").value;
    mostrarResultados(Math.round(resultado));
}
function techo() {
    let resultado = document.getElementById("resultado").value;
    mostrarResultados(Math.round(resultado));
}