//Ejercicio 1

const contarVeces = (sentence, letra) => {
    let contadorVeces = 0;

    for (let i=0; i<sentence.length; i++) {
        if (sentence[i] === letra) {
            contadorVeces++
        }
    }

    return contadorVeces;
}

//Ejercicio 2

const imprimirSiguientesCincuenta = () => {
    let numUsuario = parseInt(prompt('Ingresa un número:'));
    let imparesAcumulados = [];
    let sigImpar = numUsuario + 1;

    while (imparesAcumulados < 50) {
        if (numUsuario % 2 !==0) {
            imparesAcumulados++
            console.log(sigImpar)
        }  
        sigImpar++
    }
};