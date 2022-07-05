var utils = require("../utils.js");

exports.raiz= function (req, res) {
    const base = req.params.NUMERO;
    if(base!=null){
        const resultado = Math.cbrt(base);
        return res.status(200).send('El resultado de la raiz cubica de ' + base + ' es: ' + resultado);
    }
    next(utils.error(400));
}