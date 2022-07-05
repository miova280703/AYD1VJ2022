var utils = require("../utils.js");

exports.raizN= function (req, res) {
    const b = req.params.BASE;
    const e = req.params.EXPONENTE;
    console.log("b"+b);
    console.log("e"+e);
    //Habia un error aqui, pero como soy crack ya lo arregle jaja
    if(b!=null && e!= null){
        const resultado = Math.pow(b, 1 / e);
        
        console.log("dentro del IF");
        return res.status(200).send('El resultado de la raiz de ' + b + ' a la 1/' + e + ' es: ' + resultado);   
    }
    next(utils.error(400));
}
