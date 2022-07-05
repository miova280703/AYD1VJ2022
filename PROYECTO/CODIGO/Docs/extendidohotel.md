# CASO DE USO EXTENDIDO ADMINISTRAR HABITACIONES

![CSU_EXTADMINHABI](https://res.cloudinary.com/ingenieria/image/upload/v1655572659/csu/EXTENDIDOADMINHABITACIONES_tnobxw.jpg)

|CDU - 001 - GESTIONAR HABITACIÓN
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel gestiona habitaciones.
|Resumen: El hotel puede agregar, modificar, eliminar y consultar habitaciones.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El hotel entra al sistema. </li> <li> El hotel se dirige al modulo de gestionar usuarios. </li> <li> El hotel realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 002 - AGREGAR HABITACIÓN
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel agrega una habitación.
|Resumen: El hotel agrega una habitación disponible para ser reservada.
|Referencia Cruzada: Extensión de Gestionar Habitación.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema. </li> <li> El hotel se dirige al modulo de gestionar habitación. </li> <li> El hotel se dirige al modulo de agregar habitación. </li> <li> El hotel ingresa la información correspondiente de la habitación. </li> <li> El hotel guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel ingresa erroneamente la información de la habitación. </li></ul>

|CDU - 003 - MODIFICAR HABITACIÓN
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel modifica una habitación.
|Resumen: El hotel modifica la información de una habitación.
|Referencia Cruzada: Extensión de Gestionar Habitación.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema. </li> <li> El hotel se dirige al modulo de gestionar habitación. </li> <li> El hotel se dirige al modulo de modificar habitación. </li> <li> El hotel ingresa la información correspondiente de la habitación a modificar. </li> <li> El hotel guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel ingresa erroneamente la información de la habitación a modificar. </li></ul>

|CDU - 004 - ELIMINAR HABITACIÓN
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel elimina una habitación.
|Resumen: El hotel elimina una habitación por problemas tecnicos.
|Referencia Cruzada: Extensión de Gestionar Habitación.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema.</li><li> El hotel se dirige al modulo de gestionar habitación.</li><li> El hotel se dirige al modulo de eliminar habitación.</li><li> El hotel escoge habitación a eliminar. </li><li> El hotel guarda los cambios.</li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel selecciona erroneamente la habitación a eliminar.</li></ul>

|CDU - 005 - CONSULTAR HABITACIÓN
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel consulta una habitación.
|Resumen: El hotel consulta la información o disponibilidad de una habitación.
|Referencia Cruzada: Extensión de Gestionar Habitación.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema.</li><li> El hotel se dirige al modulo de gestionar habitación.</li><li> El hotel se dirige al modulo de consultar habitación.</li><li> El hotel lee la infromación obtenida. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel no puede ver la información.</li></ul>

|CDU - 006 - GESTIONAR CUENTA
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel gestiona su cuenta en el sistema FULL-TRIP.
|Resumen: El hotel puede solicitar modificar la informacion de su cuenta o eliminarla.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema. </li> <li> El hotel se dirige al modulo de gestionar cuenta. </li> <li> El hotel realiza las acciones correspondientes. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 007 - MODIFICAR CUENTA
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel modifica informacion de su cuenta.
|Resumen: El hotel solicita la modificacion de su cuenta para que el administrador lo realice.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema.</li><li> El hotel se dirige al modulo de gestionar cuenta.</li><li> El hotel se dirige al modulo de modificar cuenta.</li><li> El hotel ingresa la información a modificar. </li> <li> El hotel envía la solicitud. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel se equivoca al ingresar la información.</li><li> Línea 5: La solicitud no es enviada.</li></ul>

|CDU - 008 - ELIMINAR CUENTA
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel elimina su cuenta.
|Resumen: El hotel ingresa solicitud de eliminacion de cuenta al administrador.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema.</li><li> El hotel se dirige al modulo de gestionar cuenta.</li><li> El hotel se dirige al modulo de eliminar cuenta.</li><li> El hotel envía la solicitud de eliminación de cuenta. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 4: La solicitud no es enviada.</li></ul>

|CDU - 009 - VISUALIZAR RESEÑAS
|---|
|Actores: Hotel.
|Tipo: Primario
|Propósito: El hotel visualiza reseñas.
|Resumen: El hotel puede visualizar las reseñas que tiene.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema.</li><li> El hotel se dirige al modulo de visualizar reseñas.</li><li> El hotel lee todas las reseñas.</li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 3: El hotel no puede ver las reseñas.</li></ul>

[Regresar al Menú](casosdeuso.md)