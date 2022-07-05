import superTest from 'supertest';
import app from '../src/app.js';

const enviar = {
    "idEstudiante": 1,
    "Nombre": "Iovana",
    "Apellido": "Miranda",
    "Correo": "iovaclioma@gmail.com",
    "Fecha": "28/07/1998",
    "Contra": "1234",
    "Confirmacion": "1234"
}

const nombre_apellido_null = {
    "idEstudiante": 1,
    "Nombre": "",
    "Apellido": "",
    "Correo": "iovaclioma@gmail.com",
    "Fecha": "28/07/1998",
    "Contra": "1234",
    "Confirmacion": "1234"
}

const edad_menor = {
    "idEstudiante": 2,
    "Nombre": "Iovana",
    "Apellido": "Miranda",
    "Correo": "iovaclioma@gmail.com",
    "Fecha": "28/07/2017",
    "Contra": "1234",
    "Confirmacion": "1234"
}

const contras_no_coinciden = {
    "idEstudiante": 3,
    "Nombre": "Iovana",
    "Apellido": "Miranda",
    "Correo": "iovaclioma@gmail.com",
    "Fecha": "28/07/1998",
    "Contra": "!Entrar25",
    "Confirmacion": "!Etrar"
}

describe('POST/REGISTRO', ()=>{
    test('No se envia nombre y apellido y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/registroEstudiante').send(nombre_apellido_null)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('La edad debe ser mayor a 15 y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/registroEstudiante').send(edad_menor)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('Contraseñas no coinciden y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/registroEstudiante').send(contras_no_coinciden)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('Se envian datos correctos y se espera un 200', async ()=>{
        const respuesta = await superTest(app).post('/registroEstudiante').send(enviar)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(200);
    })
})

const enviarLogin = {
    "Correo": "iovaclioma@gmail.com",
    "Contra": "!Entrar"
}

const correo_contra_null = {
    "Correo": "",
    "Contra": ""
}

const correo_invalido = {
    "Correo": "asd@.gmailcom",
    "Contra": "!Entrar"
}

const contra_peque = {
    "Correo": "iovaclioma@gmail.com",
    "Contra": "!Entrar25d"
}

describe('POST/LOGIN', ()=>{
    test('No se envia correo y contraseña y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/inicioSesion').send(correo_contra_null)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('El correo no es valido y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/inicioSesion').send(correo_invalido)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('La contraseña no tiene la cantidad de caracters esperados y se espera un 400', async ()=>{
        const respuesta = await superTest(app).post('/inicioSesion').send(contra_peque)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(400);
    })

    test('Se envian datos correctos y se espera un 200', async ()=>{
        const respuesta = await superTest(app).post('/inicioSesion').send(enviarLogin)
        //console.log(respuesta);
        expect(respuesta.statusCode).toBe(200);
    })
})

const enviarAsignacion = {
    "idAsignacion": 1,
    "Estudiante": "Peter Parker",
    "Materia": "Matematica",
    "Seccion": "A",
    "Dia": "Lunes",
    "Hora": "8:00"
}

const validar_materia = {
    "idAsignacion": 2,
    "Estudiante": "Harry Osborn",
    "Materia": "Ingles",
    "Seccion": "A",
    "Dia": "Lunes",
    "Hora": "8:00"
}

const validar_seccion = {
    "idAsignacion": 3,
    "Estudiante": "Gwen Stacy",
    "Materia": "Matematica",
    "Seccion": "F",
    "Dia": "Lunes",
    "Hora": "8:00"
}

const validar_dia = {
    "idAsignacion": 4,
    "Estudiante": "Ben Parker",
    "Materia": "Matematica",
    "Seccion": "A",
    "Dia": "Sabado",
    "Hora": "8:00"
}

describe('POST/ASIGNACION', () => {
    test('Se intenta asignar una materia no disponible y se espera un 400', async () => {
        const respuesta = await superTest(app).post('/asignacionEstudiante').send(validar_materia)
        expect(respuesta.statusCode).toBe(400);
    })

    test('Se intenta asignar una seccion no disponible y se espera un 400', async () => {
        const respuesta = await superTest(app).post('/asignacionEstudiante').send(validar_seccion)
        expect(respuesta.statusCode).toBe(400);
    })

    test('Se intenta asignar un día que no hay clase y se espera un 400', async () => {
        const respuesta = await superTest(app).post('/asignacionEstudiante').send(validar_dia)
        expect(respuesta.statusCode).toBe(400);
    })

    test('Se envian datos correctos y se espera un 200', async () => {
        const respuesta = await superTest(app).post('/asignacionEstudiante').send(enviarAsignacion)
        expect(respuesta.statusCode).toBe(200);
    })
})