var utils = require("../utils.js");

exports.Multiplicar = function(req,res,next){
    const op1 = req.params.OPIZQ;
    const op2 = req.params.OPDER;
    const resultado = op1 * op2;
    return res.status(200).send('El resultado de la multiplicacion de ' + op1 + ' y de ' + op2 + ' es: ' + resultado);
    
};