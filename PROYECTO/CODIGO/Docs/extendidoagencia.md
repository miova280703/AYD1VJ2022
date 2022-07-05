# CASO DE USO EXTENDIDO ADMINISTRAR AUTOMÓVILES

![CSU_EXTADMINAUTO](https://res.cloudinary.com/ingenieria/image/upload/v1655572422/csu/EXTENDIDOADMINRENTA_ftiuvz.jpg)

|CDU - 001 - GESTIONAR AUTOMÓVIL
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia gestiona automóviles.
|Resumen: La agencia puede agregar, modificar, eliminar y consultar habitaciones.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La agencia entra al sistema. </li> <li> La agencia se dirige al modulo de gestionar automóvil. </li> <li> La agencia realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 002 - AGREGAR AUTOMÓVIL
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia agrega una automóvil.
|Resumen: La agencia agrega una automóvil disponible para ser alquilado.
|Referencia Cruzada: Extensión de Gestionar Automóvil.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema. </li> <li> La agencia se dirige al modulo de gestionar automóvil. </li> <li> La agencia se dirige al modulo de agregar automóvil. </li> <li> La agencia ingresa la información correspondiente del automóvil. </li> <li> La agencia guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia ingresa erroneamente la información del automóvil. </li></ul>

|CDU - 003 - MODIFICAR AUTOMÓVIL
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia modifica una automovil.
|Resumen: La agencia modifica la información de un automóvil.
|Referencia Cruzada: Extensión de Gestionar Automóvil.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema. </li> <li> La agencia se dirige al modulo de gestionar automóvil. </li> <li> La agencia se dirige al modulo de modificar automóvil. </li> <li> La agencia ingresa la información correspondiente del automóvil a modificar. </li> <li> La agencia guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia ingresa erroneamente la información del automóvil a modificar. </li></ul>

|CDU - 004 - ELIMINAR AUTOMÓVIL
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia elimina un automóvil.
|Resumen: La agencia elimina un automóvil por problemas tecnicos.
|Referencia Cruzada: Extensión de Gestionar Automóvil.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema.</li><li> La agencia se dirige al modulo de gestionar automóvil.</li><li> La agencia se dirige al modulo de eliminar automóvil.</li><li> La agencia escoge automóvil a eliminar. </li><li> La agencia guarda los cambios.</li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia selecciona erroneamente el automóvil a eliminar.</li></ul>

|CDU - 005 - CONSULTAR AUTOMÓVIL
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia consulta una automóvil.
|Resumen: La agencia consulta la información o disponibilidad de un automóvil.
|Referencia Cruzada: Extensión de Gestionar Automóvil.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema.</li><li> La agencia se dirige al modulo de gestionar automóvil.</li><li> La agencia se dirige al modulo de consultar automóvil.</li><li> La agencia lee la infromación obtenida. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia no puede ver la información.</li></ul>

|CDU - 006 - GESTIONAR CUENTA
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia gestiona su cuenta en el sistema FULL-TRIP.
|Resumen: La agencia puede solicitar modificar la informacion de su cuenta o eliminarla.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema. </li> <li> La agencia se dirige al modulo de gestionar cuenta. </li> <li> La agencia realiza las acciones correspondientes. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 007 - MODIFICAR CUENTA
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia modifica informacion de su cuenta.
|Resumen: La agencia solicita la modificacion de su cuenta para que el administrador lo realice.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema.</li><li> La agencia se dirige al modulo de gestionar cuenta.</li><li> La agencia se dirige al modulo de modificar cuenta.</li><li> La agencia ingresa la información a modificar. </li> <li> La agencia envía la solicitud. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia se equivoca al ingresar la información.</li><li> Línea 5: La solicitud no es enviada.</li></ul>

|CDU - 008 - ELIMINAR CUENTA
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia elimina su cuenta.
|Resumen: La agencia ingresa solicitud de eliminacion de cuenta al administrador.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema.</li><li> La agencia se dirige al modulo de gestionar cuenta.</li><li> La agencia se dirige al modulo de eliminar cuenta.</li><li> La agencia envía la solicitud de eliminación de cuenta. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 4: La solicitud no es enviada.</li></ul>

|CDU - 009 - VISUALIZAR RESEÑAS
|---|
|Actores: Agencia.
|Tipo: Primario
|Propósito: La agencia visualiza reseñas.
|Resumen: La agencia puede visualizar las reseñas que tiene.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema.</li><li> La agencia se dirige al modulo de visualizar reseñas.</li><li> La agencia lee todas las reseñas.</li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 3: La agencia no puede ver las reseñas.</li></ul>

[Regresar al Menú](casosdeuso.md)