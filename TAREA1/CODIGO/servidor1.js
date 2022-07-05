//Requires para el servidor
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Configuraciones del servidor
app.use(express.json());
app.use(bodyParser.json());

//Endpoint principal
app.get('/', function(req,res){
    res.send('Inicio! Escuchando en el puerto 3000');
    console.log("Escuchando en el puerto 3000");
})

//Endpoint de suma
app.post('/OperacionSuma',function(req,res){
    const OperadorIzquierda = req.body.OpIz;
    const OperadorDerecha = req.body.OpDe;
    var suma = OperadorIzquierda+OperadorDerecha
    res.send('El resultado de la suma es: '+suma);
    console.log("La suma es: "+suma);
})

//Endpoint de resta
app.post('/OperacionResta',function(req,res){
    const OperadorIzquierda = req.body.OpIz;
    const OperadorDerecha = req.body.OpDe;
    var resta = OperadorIzquierda-OperadorDerecha
    res.send('El resultado de la resta es: '+resta);
    console.log("La resta es: "+resta);
})

//Endpoint de multiplicacion
app.post('/OperacionMultiplicacion',function(req,res){
    const OperadorIzquierda = req.body.OpIz;
    const OperadorDerecha = req.body.OpDe;
    var multiplicacion = OperadorIzquierda*OperadorDerecha
    res.send('El resultado de la multiplicacion es: '+multiplicacion);
    console.log("La multiplicacion es: "+multiplicacion);
})


//Puerto que escucha
app.listen(3000);