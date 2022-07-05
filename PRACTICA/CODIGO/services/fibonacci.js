var utils = require("../utils.js");

exports.fnfibonacci = function(req,res,next){

    const numero = req.params.NUMERO;
    if(numero!=null){
        let resultado = fibonnaci(numero)
        return res.status(200).send('El resultado de Fibonnaci de ' + numero + ' es: ' + resultado);
    }        
    next(utils.error(400));
    
};

exports.alreves = function(req,res,next){

    const cadena = req.params.PALABRA;
    if(cadena != null){
        const revertida = revertir(cadena);
        return res.status(200).send('La palabra ' + cadena + ' al reves es: ' + revertida);
    }
    next(utils.error(400));    
    
};

function revertir(entrada) {
    return entrada.split("").reverse().join("");
}

function fibonnaci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fibonnaci(num - 1) + fibonnaci(num - 2);
    }
}