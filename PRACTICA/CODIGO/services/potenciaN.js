var utils = require("../utils.js");

exports.potenciaN= function (req, res) {
    const b = req.params.BASE;
    const e = req.params.EXPONENTE;
    if(b!=null && e!= null){
        const resultado = Math.pow(b, e);
        return res.status(200).send('El resultado de la potencia de ' + b + ' a la ' + e + ' es: ' + resultado);    
    }
    next(utils.error(400));
}
