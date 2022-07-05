# CASO DE USO EXTENDIDO ALQUILAR AUTOMÓVIL

![CSU_EXTALQUILER](https://res.cloudinary.com/ingenieria/image/upload/v1655533585/csu/EXTENDIDOALQUILER_tbsi1s.jpg)

|CDU - 001 - ALQUILAR AUTOMÓVIL|
|---|
|Actores: Turista, Agencia.|
|Tipo: Primario|
|Propósito: El turista alquila un automóvil.|
|Resumen: El turista alquila el automóvil que desea va a utilizar.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de alquiler automóvil. </li> <li> El turista realiza el alquiler. </li> <li> El turista confirma su alquiler. </li> <li> El sistema cambia la disponibilidad del automóvil. </li> <li> La agencia guarda ella alquiler. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El turista no confirma el alquiler. </li> <li> Línea 6: La agencia no guarda el alquiler. </li> </ul>

|CDU - 002 - INGRESAR DATOS ALQUILER|
|---|
|Actores: Turista.|
|Tipo: Primario|
|Propósito: El turista ingresa información del alquiler.|
|Resumen: El turista ingresa información requerida para el alquiler del automóvil.|
|Referencia Cruzada: Inclusión Alquilar Automóvil.|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de alquilar automóvil. </li> <li> El turista ingresa la información necesaria para alquilar el automóvil. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista ingresa erronamente la informacion del alquiler. </li></ul>

|CDU - 003 - MODIFICAR DISPONIBILIDAD|
|---|
|Actores: Sistema.|
|Tipo: Primario|
|Propósito: El sistema modifica la dispoinibilidad del automóvil.|
|Resumen: El sistema modifilca la disponibilidad del automóvil cuando se hace un alquiler, cuando se cancela el alquiler o finaliza el alquiler.|
|Referencia Cruzada: Inclusión Alquilar Automóvil.|
|Curso Normal de Eventos: <ol> <li> El turista ingrea al sistema. </li> <li> Realiza y confirma su alquiler. </li> <li> El sistema cambia la disponibilidad. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El sistema no modifica la disponibilidad. </li></ul>

|CDU - 004 - FINALIZAR ALQUILER|
|---|
|Actores: Agencia.|
|Tipo: Primario|
|Propósito: La agencia finaliza el alquiler.|
|Resumen: La agencia finzaliza el alquiler después de que el turista se retira de sus instalaciones.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> La agencia ingresa al sistema. </li> <li> El turista sale de las instalaciones de la agencia. </li> <li> La agencia finaliza el alquiler. </li> <li> El sistema cambia la disponibilidad del automóvil. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li>  La agencia no finaliza el alquiler.</li></ul>

|CDU - 005 - ESCRIBIR RESEÑA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista escribe una reseña.
|Resumen: El turista al finalizar su alquiler escribe una reseña sobre su experiencia en el alquiler.
|Referencia Cruzada: Inclusión Finalizar Alquiler
|Curso Normal de Eventos: <ol> <li> El turista sale de las instalaciones de l agencia. </li> <li> La agencia finaliza el alquiler. </li> <li> El turista escribe una reseña describiendo su experiencia con el alquiler. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 2: No hay conexión a la red.</li> <li> Línea 3: El turista no escribe la reseña.</li> </ul>

|CDU - 006 - CANCELAR ALQUILER
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista cancela el alquiler de un automóvil.
|Resumen: El turista cancela el alquiler de un automóvil que no va a utilizar.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> Se dirige al modulo de cancelar alquiler. </li> <li> El turista confirma la cancelación del alquiler. </li></ol>
|Curso Alternativo: <ul><li> Línea 1: No hay conexión a la red.</li> </ul>

|CDU - 007 - GESTIONAR ALQUILER
|---|
|Actores: Turista, Agencia.
|Tipo: Primario
|Propósito: El turista y la agencia gestiona el alquiler.
|Resumen: El turista y la agencia gestiona el alquiler de automóviles, puede visualizar los alquilres y modificar el alquiler.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La agencia o el turista entra al sistema. </li> <li> La agencia o el turista se dirige al modulo de gestionar alquier. </li> <li> La agencia o el turista realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 008 - VISUALIZAR ALQUILER
|---|
|Actores: Turista, Agencia.
|Tipo: Primario
|Propósito: El turista o la agencia visualiza alquir.
|Resumen: El turista o la agencia visualizan sus alquileres.
|Referencia Cruzada: Extensión de Gestionar Alquiler.
|Curso Normal de Eventos: <ol> <li> La agencia o el turista ingresa al sistema.</li><li> La agencia o el turista se dirige al modulo de gestionar alquiler.</li><li> La agencia o el turista se dirige al modulo de visualizar alquiler.</li><li> La agencia o turista observa los alquileres. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia o turista no pueden ver los alquileres.</li></ul>

|CDU - 009 - MODIFICAR ALQUILER
|---|
|Actores: Turista, Agencia.
|Tipo: Primario
|Propósito: El turista modifica el alquilar de un automóvil.
|Resumen: El turista realiza cambios en el alquiler de un automóvil.
|Referencia Cruzada: Extensión de Gestionar Alquiler.
|Curso Normal de Eventos: <ol> <li> La agencia o el turista ingresa al sistema.</li><li> La agencia o el turista se dirige al modulo de gestionar alquiler.</li><li> La agencia o el turista se dirige al modulo de modificar alquiler.</li><li> La agencia o turista ingresa los cambios a resalizar. </li><li> La agencia o turista guardan los cambios realizados. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La agencia o turista ingresan erroneamente los datos.</li><li> Línea 5: La agencia o turista no gurardan los cambios.</li></ul>

|CDU - 010 - VISUALIZAR RESEÑA
|---|
|Actores: Turista, Agencia.
|Tipo: Primario
|Propósito: El turista o la agencia visualizar reseña.
|Resumen: El turista puede ver las reseñas que la agencia tiene y la agencia puede ver sus propias reseñas.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista o la agencia ingresan al sistema. </li> <li> El turista o la agencia se dirige al modulo de visualizar reseñas. </li> <li> El turista o la agencia leen las reseñas.</ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista o la agencia no pueden ver las reseñas. </li>  </ul>

|CDU - 011 - ELIMINAR RESEÑA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista elimina la reseña.
|Resumen: El turista elimina la reseña escrita.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de eliminar reseña. </li> <li> El turista seleccioa la reseña a eliminar. </li> <li> El turista confirma eliminar la reseña. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: Se equivoca en la selección de reseña a eliminar. </li>  </ul>

[Regresar al Menú](casosdeuso.md)