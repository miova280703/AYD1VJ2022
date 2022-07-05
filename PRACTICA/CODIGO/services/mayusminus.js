var utils = require("../utils.js");

exports.mayusminus = function(req,res,next){
    const cadena = req.params.CADENA;
    const mayuscula = cadena.toUpperCase();
    const minuscula = cadena.toLowerCase();
    return res.status(200).send('La palabra ' + cadena + ' en mayusculas: ' + mayuscula + ' y en minuscula: ' + minuscula);
};