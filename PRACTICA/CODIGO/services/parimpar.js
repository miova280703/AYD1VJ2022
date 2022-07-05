var utils = require("../utils.js");


exports.parimpar = function(req,res,next){

    let validar = req.params.NUMERO;
    if(validar!=null){
        if (validar % 2 == 0) {
            return res.status(200).send('El numero es par');
        } else {
            return res.status(200).send('El numero es impar');
        }
    }
    next(utils.error(400));
    
};
