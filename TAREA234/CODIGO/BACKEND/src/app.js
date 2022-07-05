import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post('/registroEstudiante', (req, res) => {
    //VALIDAR QUE SI VENGA NOMBRE Y APELLIDO
    const nombre = req.body.Nombre;
    const apellido = req.body.Apellido;
    const fecha = req.body.Fecha;
    const contra = req.body.Contra;
    const conficontra = req.body.Confirmacion;
    if (nombre == "" || apellido == "") {
        var mensaje = {mensaje: 'Se debe de ingresar nombre y apellido para el registro'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //QUE LA EDAD DEL ESTUDIANTE SEA MAYOR A 15 AÑOS
    const sepfecha = fecha.split("/")
    const year = sepfecha[2];
    const fecha_actual = new Date();
    const year_actual = fecha_actual.getFullYear()
    const edad = year_actual - year
    if (edad < 15) {
        var mensaje = {mensaje: 'Para registrarse debe ser mayor a 15 años, su edad es: ' + edad}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //QUE EL CONTRASEÑA Y LA CONFIRMACION SEAN IGUALES
    if (contra != conficontra) {
        var mensaje = {mensaje: 'Las constraseñas no coinciden'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //REGISTRO CON EXITO
    var mensaje_exito = {mensaje: 'Registro con exito. Bienvenido: ' + nombre + ' ' + apellido}
    res.status(200).send(JSON.stringify(mensaje_exito));
});

app.post('/inicioSesion', (req, res) => {
    const correo = req.body.Correo;
    const contra = req.body.Contra;

    //SE DEBE INGREAR CORREO Y CONTRASEÑA
    if (correo == "" || contra == "") {
        var mensaje = {mensaje: 'Para iniciar sesion debe ingresar correo y contraseña.'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //SE VALIDA QUE EL CORREO TENGA UN FORMATO CORRECTO
    if (!correo.toString().match(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
        var mensaje = {mensaje: 'Debre ingresar un correo valido'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //SE VALIDA QUE LA CONTRASEÑA TENGA UNA LONGITUD DE 8 CARACTERES
    if (contra.length >= 8) {
        var mensaje = {mensaje: 'La contraseña debe de ser de 8 caracteres'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //INICIO DE SESION CON EXITO
    var mensaje_exito = {mensaje: 'Inicio de sesion con exito, Bienvinido al Sistema!'}
    res.status(200).send(JSON.stringify(mensaje_exito));

});

const materias = ["Matematica", "Quimica", "Fisica"];
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const secciones = ["A", "B", "C"];
app.post('/asignacionEstudiante', (req, res) => {
    const materia = req.body.Materia;
    const seccion = req.body.Seccion;
    const dia = req.body.Dia;

    //VALIDAR MATERIAS
    if(!materias.includes(materia)){
        var mensaje = {mensaje: 'Materia no disponible para ser asignada'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //VALIDAR SECCION
    if(!secciones.includes(seccion)){
        var mensaje = {mensaje: 'Seccion no disponible para ser asignada'}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //VALIDAR DIAS
    if(!dias.includes(dia)){
        var mensaje = {mensaje: 'No hay clases el día: '+dia}
        return res.status(400).send(JSON.stringify(mensaje));
    }

    //ASIGNACION CON EXITO
    var mensaje_exito = {mensaje: 'Asignacion de: '+materia+' en la sección: '+seccion+' en el día: '+dia+' realizada con exito!'}
    res.status(200).send(JSON.stringify(mensaje_exito));
});

export default app;