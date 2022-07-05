//Requires para el servidor
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Configuraciones del servidor
app.use(express.json());
app.use(bodyParser.json());

//Endpoint principal
app.get('/', function (req, res) {
    res.send('Inicio! Escuchando en el puerto 3000');
    console.log("Escuchando en el puerto 3000");
})

//ENDPOINT PARA SABER SI ES PAR O IMPAR
app.get('/PAROIMPAR/:NUMERO', function (req, res) {
    let validar = req.params.NUMERO;
    if (validar % 2 == 0) {
        res.send('El numero es par');
        console.log("par");
    } else {
        res.send('El numero es impar');
        console.log("impar");
    }
})

//ENDPOINT DE LA SERIE DE FIBONNACI
app.get('/FIBONNACI/:NUMERO', function (req, res) {
    let numero = req.params.NUMERO;
    let resultado = fibonnaci(numero)
    res.send('El resultado de Fibonnaci de ' + numero + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

function fibonnaci(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        return fibonnaci(num - 1) + fibonnaci(num - 2);
    }
}

//ENDPOINT PARA OBTENER LA PALABRA AL REVEZ
app.get('/ALREVEZ/:CADENA', function (req, res) {
    let cadena = req.params.CADENA;
    let revertida = revertir(cadena);
    res.send('La palabra ' + cadena + ' al revez es: ' + revertida);
    console.log("Al revez: " + revertida);
})

function revertir(entrada) {
    return entrada.split("").reverse().join("");
}

//ENDPOINT POTENCIA CUBICA
app.get('/POTENCIA/:NUMERO', function (req, res) {
    let base = req.params.NUMERO;
    let resultado = Math.pow(base, 3);
    res.send('El resultado de la potencia cubica de ' + base + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//ENDPOINT RAIZ CUBICA
app.get('/RAIZ/:NUMERO', function (req, res) {
    let base = req.params.NUMERO;
    let resultado = Math.cbrt(base);
    res.send('El resultado de la raiz cubica de ' + base + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//ENDPOINT MULTIPLICACION
app.get('/MULTIPLICACION/:OPIZQ/:OPDER', function (req, res) {
    let op1 = req.params.OPIZQ;
    let op2 = req.params.OPDER;
    let resultado = op1 * op2;
    res.send('El resultado de la multiplicacion de ' + op1 + ' y de ' + op2 + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//ENDPOINT DIVISION
app.get('/DIVISION/:OPIZQ/:OPDER', function (req, res) {
    let op1 = req.params.OPIZQ;
    let op2 = req.params.OPDER;
    let resultado = op1 / op2;
    res.send('El resultado de la division de ' + op1 + ' y de ' + op2 + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//----------------------------------------------------------------------------------
//FUNCIONALIDADES EXTRAS
//ENDPOINT MULTIPLO DE 
app.get('/MULTIPLO/:N/:M', function (req, res) {
    let numero = req.params.N;
    let multiplo = req.params.M;
    if(numero%multiplo==0){
        res.send(numero+' es multiplo de '+multiplo);
        console.log("si es multiplo");
    }else{
        res.send(numero+' no es multiplo de '+multiplo);
        console.log("no es multiplo");
    }    
})

//ENDPOINT SERIE ACKERMAN
app.get('/ACKERMAN/:N/:M', function (req, res) {
    let numn = req.params.N;
    let numm = req.params.M;
    let resultado = ackerman(numn, numm);
    res.send('El resultado de la serie ackerman de ' + numn + ' y de ' + numm + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

function ackerman(n, m) {
    if (n == 0) {
        return (m + 1);
    } else if (m == 0) {
        return ackerman(n - 1, 1);
    } else {
        return ackerman(n - 1, ackerman(n, m - 1));
    }
}

//ENDPOINT MAYUSCULAS Y MINUSCULAS
app.get('/MAYUSMINUS/:CADENA', function (req, res) {
    let cadena = req.params.CADENA;
    let mayuscula = cadena.toUpperCase();
    let minuscula = cadena.toLowerCase();
    res.send('La palabra ' + cadena + ' en mayusculas: ' + mayuscula + ' y en minuscula: ' + minuscula);
    console.log("Mayuscula: " + mayuscula + " Minuscula: " + minuscula);
})

//ENDOINT POTENCIA N
app.get('/POWN/:BASE/:EXPONENTE', function (req, res) {
    let b = req.params.BASE;
    let e = req.params.EXPONENTE;
    let resultado = Math.pow(b, e);
    res.send('El resultado de la potencia de ' + b + ' a la ' + e + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//ENDPOINT RAIZ N
app.get('/RAIZN/:BASE/:RADICAL', function (req, res) {
    let b = req.params.BASE;
    let e = req.params.RADICAL;
    let resultado = Math.pow(b, 1 / e);
    res.send('El resultado de la raiz de ' + b + ' a la 1/' + e + ' es: ' + resultado);
    console.log("El resultado es: " + resultado);
})

//ARREGLANDO DIVISION ENTRE 0
app.get('/DIVISION1/:OPIZQ/:OPDER', function (req, res) {
    let op1 = req.params.OPIZQ;
    let op2 = req.params.OPDER;
    if (op2 != 0) {
        let resultado = op1 / op2;
        res.send('El resultado de la division de ' + op1 + ' y de ' + op2 + ' es: ' + resultado);
        console.log("El resultado es: " + resultado);
    } else {
        res.send('No se puede realizar la division entre 0');
        console.log("Division entre 0");
    }
})

//Puerto que escucha
app.listen(3000);
