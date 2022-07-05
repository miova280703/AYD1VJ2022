# CASO DE USO EXTENDIDO RESERVAR HABITACION

![CSU_EXTRESERVA](https://res.cloudinary.com/ingenieria/image/upload/v1655533585/csu/EXTENDIDORESERVAHABITACION_vy0dke.jpg)

|CDU - 001 - RESERVAR HABITACIÓN|
|---|
|Actores: Turista, Hotel.|
|Tipo: Primario|
|Propósito: El turista reserva una habitación.|
|Resumen: El turista reserva habitaciones que desea va a utilizar.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de reservar habitación. </li> <li> El turista realiza la reservación. </li> <li> El turista confirma su reservacion. </li> <li> El sistema cambia la disponibilidad de la habitacion. </li> <li> El hotel guarda la reserva. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El turista no confirma la reservacion. </li> <li> Línea 6: El hotel no guarda la reserva. </li> </ul>

|CDU - 002 - INGRESAR DATOS RESERVA|
|---|
|Actores: Turista.|
|Tipo: Primario|
|Propósito: El turista ingresa información de la reserva.|
|Resumen: El turista ingresa información requerida para la reserva de la habitación.|
|Referencia Cruzada: Inclusión Reservar Habitación.|
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> El turista se dirige al modulo de reservar habitación. </li> <li> El turista ingresa la información necesaria para reservar la habitación. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista ingresa erronamente la informacion de la reservación. </li></ul>

|CDU - 003 - MODIFICAR DISPONIBILIDAD|
|---|
|Actores: Sistema.|
|Tipo: Primario|
|Propósito: El sistema modifica la dispoinibilidad de la habitación.|
|Resumen: El sistema modifilca la disponibilidad de la habitacion cuando se hace una reserva, cuando se cancela la reserva o finaliza la reserva.|
|Referencia Cruzada: Inclusión Reservar Habitación.|
|Curso Normal de Eventos: <ol> <li> El turista ingrea al sistema. </li> <li> Realiza y confirma su reservacion. </li> <li> El sistema cambia la disponibilidad. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El sistema no modifica la disponibilidad. </li></ul>

|CDU - 004 - FINALIZAR RESERVA|
|---|
|Actores: Hotel.|
|Tipo: Primario|
|Propósito: El hotel finaliza la reserva.|
|Resumen: El hotel finzaliza la reserva después de que el turista se retira de sus instalaciones.|
|Referencia Cruzada: N/A|
|Curso Normal de Eventos: <ol> <li> El hotel ingresa al sistema. </li> <li> El turista sale de las instalaciones del hotel. </li> <li> El hotel finaliza la reservacion. </li> <li> El sistema cambia la disponibilidad de la habitación. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li>  EL hotel no finaliza la reservación.</li></ul>

|CDU - 005 - ESCRIBIR RESEÑA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista escribe una reseña.
|Resumen: El turista al finalizar su reservación escribe una reseña sobre su experiencia en la reservación.
|Referencia Cruzada: Inclusión Finalizar Reserrva
|Curso Normal de Eventos: <ol> <li> El turista sale de las instalaciones del hotel. </li> <li> El hotel finaliza la reservacion. </li> <li> El turista escribe una reseña describiendo su experiencia en el hotel. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 2: No hay conexión a la red.</li> <li> Línea 3: El turista no escribe la reseña.</li> </ul>

|CDU - 006 - CANCELAR RESERVA
|---|
|Actores: Turista.
|Tipo: Primario
|Propósito: El turista cancela una habitación.
|Resumen: El turista cancela una habitación que no va a utilizar.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista ingresa al sistema. </li> <li> Se dirige al modulo de cancelar reserva. </li> <li> El turista confirma la cancelación de la reservación. </li></ol>
|Curso Alternativo: <ul><li> Línea 1: No hay conexión a la red.</li> </ul>

|CDU - 007 - GESTIONAR RESERVA
|---|
|Actores: Turista, Hotel.
|Tipo: Primario
|Propósito: El turista y hotel gestiona la reserva.
|Resumen: El turista y el hotel puede gestionar la reserva, en donde la pueden visualizar y modificarlas.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El hotel o el turista entra al sistema. </li> <li> El hotel o el turista se dirige al modulo de gestionar reserva. </li> <li> El hotel o el turista realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 008 - VISUALIZAR RESERVA
|---|
|Actores: Turista, Hotel.
|Tipo: Primario
|Propósito: El turista o el hotel  visualiza reserva.
|Resumen: El turista o el hotel visualizan sus reservas.
|Referencia Cruzada: Extensión de Gestionar Reserva.
|Curso Normal de Eventos: <ol> <li> El hotel o el turista ingresa al sistema.</li><li> El hotel o el turista se dirige al modulo de gestionar reserva.</li><li> El hotel o el turista se dirige al modulo de visualizar reserva.</li><li> El hotel o turista observa las reservas. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel o turista no pueden ver las reservas.</li></ul>

|CDU - 009 - MODIFICAR RESERVA
|---|
|Actores: Turista, Hotel.
|Tipo: Primario
|Propósito: El turista modificar reserva una habitación.
|Resumen: El turista realiza cambios en la reservación de una habitación.
|Referencia Cruzada: Extensión de Gestionar Reserva.
|Curso Normal de Eventos: <ol> <li> El hotel o el turista ingresa al sistema.</li><li> El hotel o el turista se dirige al modulo de gestionar reserva.</li><li> El hotel o el turista se dirige al modulo de modificar reserva.</li><li> El hotel o turista ingresa los cambios a resalizar. </li><li> El hotel o turista guardan los cambios realizados. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: El hotel o turista ingresan erroneamente los datos.</li><li> Línea 5: El hotel o turista no gurardan los cambios.</li></ul>

|CDU - 010 - VISUALIZAR RESEÑA
|---|
|Actores: Turista, Hotel.
|Tipo: Primario
|Propósito: El turista o el hotel visualizar reseña.
|Resumen: El turista puede ver las reseñas que el hotel tiene y el hotel puede ver sus propias reseñas.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> El turista o el hotel ingresan al sistema. </li> <li> El turista o el hotel se dirige al modulo de visualizar reseñas. </li> <li> El turista o el hotel leen las reseñas.</ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 3: El turista o el hotel no pueden ver las reseñas. </li>  </ul>

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