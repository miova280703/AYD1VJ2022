var utils = require("../utils.js");

exports.division = function(req,res,next){
    const op1 = req.params.OPIZQ;
    const op2 = req.params.OPDER;
    const resultado = op1 / op2;
    if(op1!=null&&op2!=null){
        if (op2 != 0) {
            const resultado = op1 / op2;
            return res.status(200).send('El resultado de la division de ' + op1 + ' y de ' + op2 + ' es: ' + resultado);
        } else {
            return res.status(200).send('No se puede realizar la division entre 0');
        }
    }
    next(utils.error(400));
};