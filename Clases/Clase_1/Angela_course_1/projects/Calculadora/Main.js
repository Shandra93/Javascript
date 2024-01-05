function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
        case "+":
            return numeroUno + numeroDos;
            break
            
        case "-":
            break
            return numeroUno - numeroDos;
        
        case "*":
            break
            return numeroUno * numeroDos;

        case "/":
            break
            return numeroUno / numeroDos;

        default:
            return "Operación no definida";
    }
}

let numeroUno = Number(prompt("Ingrese el primer numero"));
let numeroDos = Number(prompt("Ingrese el segundo numero"));
let operacion = prompt("ingresa la operacion: + - * /");

let resultado = calculadora(numeroUno, numeroDos, operacion);
console.log(resultado)
alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`)