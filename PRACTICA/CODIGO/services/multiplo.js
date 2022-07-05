var utils = require("../utils.js");

exports.multiplo = function(req,res,next){
    const numero = req.params.N;
    const multiplo = req.params.M;
    if(numero%multiplo==0){
        return res.status(200).send(numero+' es multiplo de '+multiplo);
    }else{
        return res.status(200).send(numero+' no es multiplo de '+multiplo);
    } 
};