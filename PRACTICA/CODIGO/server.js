const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const utils = require("./utils.js");
const homeInfo = require("./services/infoSaludo.js");
const funcionParImpar = require("./services/parimpar.js");
const funcionfibonacci = require("./services/fibonacci.js");
const funcionPotencia = require("./services/potencia.js");
const funcionRaiz = require("./services/raiz.js");
const funcionMultiplicar = require("./services/Multiplicar.js")
const funcionDividir = require("./services/division.js");
const funcionMultiplo = require("./services/multiplo.js");
const funcionAckerman = require("./services/ackerman.js");
const funcionMayusMinus = require("./services/mayusminus.js");
const funcionPotenciaN = require("./services/potenciaN.js");
const funcionraizN = require("./services/raizn.js");

const app = express();
const port = 3000;
const router = express.Router();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



router.get('/', homeInfo.miembros);
router.get('/PAROIMPAR/:NUMERO', funcionParImpar.parimpar);
router.get('/FIBONNACI/:NUMERO', funcionfibonacci.fnfibonacci);
router.get('/ALREVES/:PALABRA', funcionfibonacci.alreves);
router.get('/potencia/:NUMERO', funcionPotencia.potencia);
router.get('/RAIZ/:NUMERO', funcionRaiz.raiz);
router.get('/MULTIPLICACION/:OPIZQ/:OPDER', funcionMultiplicar.Multiplicar);
router.get('/DIVISION/:OPIZQ/:OPDER', funcionDividir.division);
router.get('/MULTIPLO/:N/:M', funcionMultiplo.multiplo);
router.get('/ACKERMAN/:N/:M', funcionAckerman.ackerman);
router.get('/MAYUSMINUS/:CADENA', funcionMayusMinus.mayusminus);
router.get('/POWN/:BASE/:EXPONENTE', funcionPotenciaN.potenciaN);
router.get('/RAIZN/:BASE/:EXPONENTE', funcionraizN.raizN);

app.use("/", router);
app.use(utils.errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));