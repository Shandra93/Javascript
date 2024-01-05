// Promises

const usuarioAutenticado = new Promise( (resolve,reject) => {
    const auth = false;

    if (auth) { 
        resolve('Usuario Atenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});

usuarioAutenticado
    .then ( resultado => console.log(resultado))
    .catch( error => console.log(error))
    
//Valores promise
//Pending; No se ha cumplido pero tampoco rechazado.
//Fulfilled; Se cumplio la promesa.
//Rejected; Se ha rechazado o no se pudo cumplir.

