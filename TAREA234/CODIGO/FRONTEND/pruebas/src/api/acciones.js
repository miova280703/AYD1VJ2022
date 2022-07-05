const login = "http://localhost:4000/inicioSesion";

export async function iniciarSesion(correo, contra) {
    var data = {Correo: correo, Contra: contra}
    return fetch(login, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }});
}

const registro = "http://localhost:4000/registroEstudiante";
export async function resgistrarEstudiante(nombre, apellido, correo, fecha, contra, conficontra) {
    var data = {Nombre: nombre, Apellido: apellido, Correo: correo, Fecha: fecha, Contra: contra, Confirmacion: conficontra}
    return fetch(registro, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }});
}

const asignacion = "http://localhost:4000/asignacionEstudiante";
export async function asignarEstudiante(nombre, materia, seccion, dia, hora) {
    var data = {Nombre: nombre,  Materia: materia, Seccion: seccion, Dia: dia, Hora: hora}
    return fetch(asignacion, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }});
}