# CASO DE USO EXTENDIDO INICIO DE SESION (LOGIN)

![CSU_EXTLOGIN](https://res.cloudinary.com/ingenieria/image/upload/v1655515013/csu/EXTENDIDOLOGIN_sqmgjo.jpg)

|CDU - 001 - REGISTRAR TURISTA|
|---|
|Actores: Turista no registrado.|
|Tipo: Primario|
|Propósito: Registrar un turista nuevo que no ha sido añadido al sistema FULL-TRIP|
|Resumen: El nuevo turista es registrado al sistema y puede acceder a el.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El turista, ingresa al sistema. </li> <li> El sistema pide un usuario y contraseña o da la opción de registrarse. </li> <li> El turista no registrado llena el formulario para registrarse al sistema. </li> <li> El sistema manda un correo electrónico de confirmación de la cuenta y el usuario esta listo para entrar al sistema. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El sistema manda mensaje de error </li>  </ul>

|CDU - 002 - FORMULARIO REGISTRO TURISTA|
|---|
|Actores: Sistema.|
|Tipo: Primario.|
|Propósito: Registrar al sistema FULL-TRIP|
|Resumen: El turista ingresa sus datos al sistema.|
|Referencia Cruzada: Extensión de Registrar Turista.|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al formulario de registro. </li> <li> El turista ingresa los datos correspondientes. </li> <li> El sistema manda un correo electrónico de confirmación de la cuenta y el turista entra al sistema. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista ingresa erróneamente sus datos. </li> <li> Línea 4: El sistema manda mensaje de error </li>  </ul>

|CDU - 003 - REGISTRAR SERVICIO TERCERIZADO|
|---|
|Actores: servicio Tercerizado no registrado.|
|Tipo: Primario.|
|Propósito: Registrar un usuario nuevo que no ha sido añadido al sistema FULL-TRIP|
|Resumen: El nuevo servicio tercerizado es registrado al sistema y puede acceder a el.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El servicio tercerizado, ingresa al sistema. </li> <li> El sistema pide un usuario y contraseña o da la opción de registrarse. </li> <li> El administrador del sistema verifica la información ingresada. </li>  <li> El sistema manda un correo electrónico de confirmación y puede entrar al sistema. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El administrador rechaza la información. </li> <li> Línea 4: El sistema envía mensaje de error.</li> </ul>

|CDU - 004 - FORMULARIO REGISTRO SERVICIO TERCERIZADO|
|---|
|Actores: Sistema.|
|Tipo: Primario.|
|Propósito: Registrar al sistema FULL-TRIP|
|Resumen: El servicio tercerizado ingresa sus datos al sistema.|
|Referencia Cruzada: Extensión de Registrar Servicio Tercerizado.|
|Curso Normal de Eventos: <ol> <li> El servicio tercerizado ingresa al sistema. </li> <li> El turista se dirige al formulario de registro. </li> <li> El servicio tercerizado ingresa los datos correspondientes. </li> <li> El administrador verifica la información ingresada por el servicio tercerizado. </li> <li> El sistema manda un correo electrónico de confirmación de la cuenta y el turista entra al sistema. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El servicio tercerizado ingresa erróneamente sus datos. </li> <li> Línea 5: El sistema manda mensaje de error. </li>  </ul>

|CDU - 005 - VALIDAR INFORMACIÓN|
|---|
|Actores: Administrador.|
|Tipo: Primario.|
|Propósito: Registrar al sistema FULL-TRIP|
|Resumen: El administrador verifica la información ingresada por el servicio tercerizado para aceptar su registro al sistema FULL-TRIP.|
|Referencia Cruzada: Inclusión de Formulario Registro Servicio Tercerizado.|
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de validar informacion ingresada. </li> <li> El administrador verifica la información ingresada por el servicio tercerizado. </li> <li> El administrador acepta o rechaza la información. </li> <li> El sistema le notifica al servicio tercerizado la decisión del administrador. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El administrador selecciona erroneamente la decisión. </li> 

|CDU - 006 - INGRESAR AL SISTEMA|
|---|
|Actores: Administrador, Turista, Servicio Tercerizado.|
|Tipo: Primario.|
|Propósito: Ingresar al sistema FULL-TRIP|
|Resumen: El administrador, turista, servicio tercerizado ingresa al sistema FULL-TRIP.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El usuario ingresa al sistema. </li> <li> El sistema pide un usuario y contraseña. </li> <li> El usuario ingresa los datos correspondientes. </li> <li> El usuario entra al sistema. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 2: El usuario ingresa los datos erroneamente. </li> 

[Regresar al Menú](casosdeuso.md)