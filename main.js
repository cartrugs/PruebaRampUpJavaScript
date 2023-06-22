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

let sentence = 'Tres tristes tigres tragaban trigo en un trigal';
let letra = 't';
console.log(contarVeces(sentence, letra));

//Ejercicio 2

const imprimirSiguientesCincuenta = () => {
    let numUsuario = parseInt(prompt('Ingresa un número:'));
    let imparesAcumulados = 0;
    let sigImpar = numUsuario + 1;

    while (imparesAcumulados < 50) {
        if (sigImpar % 2 !==0) {
            imparesAcumulados++
            console.log(sigImpar)
        }  
        sigImpar++
    }
};

imprimirSiguientesCincuenta();