var utils = require("../utils.js");

exports.potencia = function(req,res,next){
const base = req.params.NUMERO;
    if(base != null){
        const resultado = Math.pow(base, 3);
        return res.status(200).send('El resultado de la potencia cubica de ' + base + ' es: ' + resultado);
    }
    next(utils.error(400));
};