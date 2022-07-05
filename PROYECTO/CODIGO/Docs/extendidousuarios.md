# CASO DE USO EXTENDIDO ADMINISTRAR USUARIOS

![CSU_EXTADMINUSUARIO](https://res.cloudinary.com/ingenieria/image/upload/v1655568855/csu/EXTENDIDOADMINUSUARIO_hl6pw7.jpg)

|CDU - 001 - GESTIONAR USUARIO
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador puede gestionar servicios tercerizados.
|Resumen: El administrador puede agregar, modificiar, eliminar y consultar servicios tercerizados.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El administrador entra al sistema. </li> <li> El administrador se dirige al modulo de gestionar usuarios. </li> <li> El administrador realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 002 - VALIDAR INFORMACIÓN
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador agrega un servicio tercerizado.
|Resumen: El administrador acepta o rechaza la información ingresada por el servicio tercerizado..
|Referencia Cruzada: Extensión de Gestionar Usuario.
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de gestionar usuario. </li> <li> El administrador se dirige al modulo de validar información. </li> <li> El administrador lee la información ingresada por los servicios tercerizados. </li> <li> El administrador acepta o rechaza el servicio tercerizado. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El administrador no puede visualizar la información ingresada. </li> <li> Línea 5: El administrador ingresa erroneamente la decisión tomada. </li>  </ul>

|CDU - 003 - MODIFICAR USUARIO
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador modifica la información del servicio tercerizado.
|Resumen: El administrador realiza cambios en la información del servicio tercerizado requerido.
|Referencia Cruzada: Extensión de Gestionar Usuario.
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de gestionar usuario. </li> <li> El administrador se dirige al modulo de modificar usuario. </li> <li> El administrador cambia la información necesaria que el usuario, servicio tercerizado, pidio. </li> <li> El administrado guarda los cambios. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El administrador ingresa erroneamente la información a modificar </li>  </ul>

|CDU - 004 - ELIMINAR USUARIO
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador elimina servicio tercerizado.
|Resumen: El administrador elimina la cuenta del servicio tercerizado que lo solicitó.
|Referencia Cruzada: Extensión de Gestionar Usuario.
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de gestionar usuario. </li> <li> El administrador se dirige al modulo de eliminar usuario. </li> <li> El administrador elimina el usuario, servicio tercerizado, solicitado. </li> <li> El administrado guarda los cambios. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El administrador selecciona erroneamente el servicio tercerizado a eliminar. </li>  </ul>

|CDU - 005 - CONSULTAR USUARIO
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador consulta servicio tercerizado.
|Resumen: El administrador consulta la cuenta del servicio tercerizad.
|Referencia Cruzada: Extensión de Gestionar Usuario.
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de gestionar usuario. </li> <li> El administrador se dirige al modulo de consultar usuario. </li> <li> El administrador puede visualizar la información del servicio tercerizado que desea. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El administrador no puede visualizar la informacion del servicio tercerizado. </li>  </ul>

|CDU - 006 - VISUALIZAR RESEÑAS
|---|
|Actores: Adminstrador.
|Tipo: Primario
|Propósito: El administrador visualiza las reseñas.
|Resumen: El administrador visualiza las reseñas de todos los servicios tercerizados.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El administrador ingresa al sistema. </li> <li> El administrador se dirige al modulo de visualizar reseñas. </li> <li> El administrador observa todas las reseñas que tienen los servicios tercerizados. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El administrador no puede visualizar las reseña. </li>  </ul>

[Regresar al Menú](casosdeuso.md)