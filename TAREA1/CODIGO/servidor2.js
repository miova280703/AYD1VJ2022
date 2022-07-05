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

//Endpoint de informacion
app.get('/Informacion', function(req,res){
    res.send('Claudia Iovana Miranda Alvarez - 201700387');
    console.log("Iovana Miranda - 201700387");
})

//Endpoint de saludar
app.post('/Saludo', function(req,res){
    const nombre = req.body.Nombre;
    res.send('Hola! '+nombre+' Recuerda que La Vida Es Un Riesgo');
    console.log("Hola! "+nombre+" Recuerda que La Vida Es Un Riesgo");
})

//Puerto que escucha
app.listen(4000);