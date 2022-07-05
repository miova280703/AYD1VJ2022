# CASO DE USO EXTENDIDO ADMINISTRAR AEROLÍNEA

![CSU_EXTADMINVUELO](https://res.cloudinary.com/ingenieria/image/upload/v1655572044/csu/EXTENDIDOADMINVUELO_ox2bit.jpg)

|CDU - 001 - GESTIONAR VUELO
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea gestiona vuelo.
|Resumen: La aerolínea puede agregar, modificar, eliminar y consultar vuelos.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La aerolínea entra al sistema. </li> <li> La aerolínea se dirige al modulo de gestionar usuarios. </li> <li> La aerolínea realiza las operaciones correspondientes. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 002 - AGREGAR VUELO
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea agrega un vuelo.
|Resumen: La aerolínea agrega un vuelo disponible para ser comprado.
|Referencia Cruzada: Extensión de Gestionar Vuelo.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema. </li> <li> La aerolínea se dirige al modulo de gestionar vuelo. </li> <li> La aerolínea se dirige al modulo de agregar vuelo. </li> <li> La aerolínea ingresa la información correspondiente del vuelo. </li> <li> La aerolínea guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea ingresa erroneamente la información del vuelo. </li></ul>

|CDU - 003 - MODIFICAR VUELO
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea modifica un vuelo.
|Resumen: La aerolínea modifica la información de un vuelo.
|Referencia Cruzada: Extensión de Gestionar Vuelo.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema. </li> <li> La aerolínea se dirige al modulo de gestionar vuelo. </li> <li> La aerolínea se dirige al modulo de modificar vuelo. </li> <li> La aerolínea ingresa la información correspondiente del vuelo a modificar. </li> <li> La aerolínea guarda los cambios. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea ingresa erroneamente la información del vuelo a modificar. </li></ul>

|CDU - 004 - ELIMINAR VUELO
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea elimina un vuelo.
|Resumen: La aerolínea elimina un vuelo por problemas tecnicos.
|Referencia Cruzada: Extensión de Gestionar Vuelo.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema.</li><li> La aerolínea se dirige al modulo de gestionar vuelo.</li><li> La aerolínea se dirige al modulo de eliminar vuelo.</li><li> La aerolínea escoge vuelo a eliminar. </li><li> La aerolínea guarda los cambios.</li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea selecciona erroneamente el vuelo a eliminar.</li></ul>

|CDU - 005 - CONSULTAR VUELO
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea consulta un vuelo.
|Resumen: La aerolínea consulta la información o disponibilidad de un  vuelo.
|Referencia Cruzada: Extensión de Gestionar Vuelo.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema.</li><li> La aerolínea se dirige al modulo de gestionar vuelo.</li><li> La aerolínea se dirige al modulo de consultar vuelo.</li><li> La aerolínea lee la infromación obtenida. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea no puede ver la información.</li></ul>

|CDU - 006 - GESTIONAR CUENTA
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea gestiona su cuenta en el sistema FULL-TRIP.
|Resumen: La aerolínea puede solicitar modificar la informacion de su cuenta o eliminarla.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema. </li> <li> La aerolínea se dirige al modulo de gestionar cuenta. </li> <li> La aerolínea realiza las acciones correspondientes. </li></ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li></ul>

|CDU - 007 - MODIFICAR CUENTA
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea modifica informacion de su cuenta.
|Resumen: La aerolínea solicita la modificacion de su cuenta para que el administrador lo realice.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema.</li><li> La aerolínea se dirige al modulo de gestionar cuenta.</li><li> La aerolínea se dirige al modulo de modificar cuenta.</li><li> La aerolínea ingresa la información a modificar. </li> <li> La aerolínea envía la solicitud. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li> <li> Línea 4: La aerolínea se equivoca al ingresar la información.</li><li> Línea 5: La solicitud no es enviada.</li></ul>

|CDU - 008 - ELIMINAR CUENTA
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea elimina su cuenta.
|Resumen: La aerolínea ingresa solicitud de eliminacion de cuenta al administrador.
|Referencia Cruzada: Extensión de Gestionar Cuenta.
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema.</li><li> La aerolínea se dirige al modulo de gestionar cuenta.</li><li> La aerolínea se dirige al modulo de eliminar cuenta.</li><li> La aerolínea envía la solicitud de eliminación de cuenta. </li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 4: La solicitud no es enviada.</li></ul>

|CDU - 009 - VISUALIZAR RESEÑAS
|---|
|Actores: Aerolínea.
|Tipo: Primario
|Propósito: La aerolínea visualiza reseñas.
|Resumen: La aerolínea puede visualizar las reseñas que tiene.
|Referencia Cruzada: N/A
|Curso Normal de Eventos: <ol> <li> La aerolínea ingresa al sistema.</li><li> La aerolínea se dirige al modulo de visualizar reseñas.</li><li> La aerolínea lee todas las reseñas.</li> </ol>
|Curso Alternativo: <ul> <li> Línea 1: No hay conexión a la red. </li><li> Línea 3: La aerolínea no puede ver las reseñas.</li></ul>

[Regresar al Menú](casosdeuso.md)