var utils = require("../utils.js");

exports.ackerman = async function(req,res,next){
    const numn = req.params.N;
    const numm = req.params.M;
    const resultado = await ackerman(numn, numm);
    return res.status(200).send('El resultado de la serie ackerman de ' + numn + ' y de ' + numm + ' es: ' + resultado);
};

function ackerman(n, m) {
    if (n == 0) {
        return (m + 1);
    } else if (m == 0) {
        return ackerman(n - 1, 1);
    } else {
        return ackerman(n - 1, ackerman(n, m - 1));
    }
}