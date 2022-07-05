# CASO DE USO EXTENDIDO COMPRAR VUELO

![CSU_EXTCOMPRAR](https://res.cloudinary.com/ingenieria/image/upload/v1655533585/csu/EXTENDIDOVUELO_t5iwsr.jpg)

|CDU - 001 - COMPRAR VUELO|
|---|
|Actores: Turista, Aerolínea.|
|Tipo: Primario|
|Propósito: El turista compra un vuelo.|
|Resumen: El turista compra un vuelo hacia el destino en el que va a viajar.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de comprar vuelo. </li> <li> El turista realiza la compra. </li> <li> El turista confirma su compra. </li> <li> El sistema cambia la disponibilidad de los asientos del vuelo. </li> <li> La aerolínea guarda la compra. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El turista no confirma la compra. </li> <li> Línea 6: La aerolínea no guarda la compra. </li> </ul>

|CDU - 002 - INGRESAR DATOS COMPRA|
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
|Propósito: El sistema modifica la dispoinibilidad de los asientos.|
|Resumen: El sistema modifilca la disponibilidad de los asientos del vuelo cuando se hace una compra, cuando se cancela una compra o finaliza el vuelo.|
|Referencia Cruzada: Inclusión Comprar Vuelo.|
|Curso Normal de Eventos: <ol> <li> El turista ingrea al sistema. </li> <li> Realiza y confirma su compra. </li> <li> El sistema cambia la disponibilidad. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El sistema no modifica la disponibilidad. </li></ul>

|CDU - 004 - FINALIZAR COMPRA|
|---|
|Actores: Aerolínea.|
|Tipo: Primario|
|Propósito: La aerolínea finaliza el vuelo.|
|Resumen: La aerolínea finzaliza el vuelo después de aterrizar.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema. </li> <li> El turista sale de las instalaciones de la aerolínea. </li> <li> La aerolínea finaliza el vuelo. </li> <li> El sistema cambia la disponibilidad de los asientos del vuelo. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <ul>

|CDU - 005 - ESCRIBIR RESEÑA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista escribe una reseña.
|Resumen: El turista al finalizar su vuelo escribe una reseña sobre su experiencia en el vuelo.
|Referencia Cruzada: Inclusión Finalizar Compra
|Curso Normal de Eventos: <ol> <li> El turista sale de las instalaciones de la aerolínea. </li> <li> La aerolínea finaliza el vuelo. </li> <li> El turista escribe una reseña describiendo su experiencia con el vuelo. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 2: No hay conexión a la red.</li> <li> Línea 3: El turista no escribe la reseña.</li> </ul>

|CDU - 006 - CANCELAR COMPRA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista cancela la compra del vuelo.
|Resumen: El turista cancela la compra de los vuelos que no va a utilizar.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> Se dirige al modulo de cancelar compra. </li> <li> El turista confirma la cancelación de la compra. </li></ol>
|Curso Alternativo: <ul><li> Línea 1: No hay conexión a la red.</li> </ul>

|CDU - 007 - GESTIONAR COMPRA
|---|
|Actores: Turista, Aerolínea.
|Tipo: Primario
|Propósito: El turista y la aerolínea gestiona la compra.
|Resumen: El turista y la aerolínea gestiona la compra de vuelos, puede visualizar los vuelos comprasos y modificar la compra de vuelos.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La aerolínea o el turista entra al sistema. </li> <li> La aerolínea o el turista se dirige al modulo de gestionar compra vuelos. </li> <li> La aerolínea o el turista realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 008 - VISUALIZAR COMPRA
|---|
|Actores: Turista, Aerolínea.
|Tipo: Primario
|Propósito: El turista o la aerolínea visualiza las compras.
|Resumen: El turista o la aerolínea visualizan sus compras de vuelos.
|Referencia Cruzada: Extensión de Gestionar Compra.
|Curso Normal de Eventos: <ol> <li> La aerolínea o el turista ingresa al sistema.</li><li> La aerolínea o el turista se dirige al modulo de gestionar compra.</li><li> La aerolínea o el turista se dirige al modulo de visualizar compra.</li><li> La aerolínea o turista observa las compras. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea o turista no pueden ver las compras.</li></ul>

|CDU - 009 - MODIFICAR COMPRA
|---|
|Actores: Turista, Aerolínea.
|Tipo: Primario
|Propósito: El turista modifica la compra de un vuelo.
|Resumen: El turista o la aerolínea realiza cambios en la compra de un vuelo.
|Referencia Cruzada: Extensión de Gestionar Comptra.
|Curso Normal de Eventos: <ol> <li> La aerolínea o el turista ingresa al sistema.</li><li> La aerolínea o el turista se dirige al modulo de gestionar compra.</li><li> La aerolínea o el turista se dirige al modulo de modificar compra.</li><li> La aerolínea o turista ingresa los cambios a resalizar. </li><li> La aerolínea o turista guardan los cambios realizados. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea o turista ingresan erroneamente los datos.</li><li> Línea 5: La aerolínea o turista no gurardan los cambios.</li></ul>

|CDU - 010 - VISUALIZAR RESEÑA
|---|
|Actores: Turista, Aerolínea.
|Tipo: Primario
|Propósito: El turista o la aerolínea visualizar reseña.
|Resumen: El turista puede ver las reseñas que la aerolínea tiene y la aerolínea puede ver sus propias reseñas.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista o la aerolínea ingresan al sistema. </li> <li> El turista o la aerolínea se dirige al modulo de visualizar reseñas. </li> <li> El turista o la aerolínea leen las reseñas.</ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista o la aerolínea no pueden ver las reseñas. </li>  </ul>

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