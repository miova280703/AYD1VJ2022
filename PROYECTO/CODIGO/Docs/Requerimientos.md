# Requerimientos Funcionales y No Funcionales.

En esta sección se presentan los requerimientos funcionales y no funcionales que deberán ser cumplidos de forma exitosa por el sistema. Los requerimientos presentados en forma de tabla están descritos en un lenguaje natural para una mejor comprensión de los mismos por cualquier ente interesado en el sistema; estos fueron obtenidos a través de entrevistas realizadas con el personal administrativo de la empresa Full Trip.

# Requerimientos Funcionales


| No. Requisito | Nombre | Descripcion | Proceso Asociado| Pantalla|
|:-------------------:|---|---|---|---|
| RF-001 | Registrar datos del turista| El sistema debe de registrar los datos necesarios de un turista, esto con el fin de utilizar la aplicación| Registro | Modulo de Registro | 
| RF-002 | Actualizar datos de hoteles, vuelos y rentas| El sistema debe de actualizar los datos sobre los servicios, con el proposito de que los clientes esten actualizados sobre los servicios descritos.|Registro |pantalla registros |
| RF-003 |Registrar nuevos ingresos vehiculos |El sistema registra nuevos vehiculos, estos pueden tener un estado los cuales determinaran si el cliente puede rentar. |Registro. | Pantalla renta de vehiculos|
| RF-004 |Inicio de sesión|El sistema permitirá a los usuarios iniciar sesión de forma segura en el sistema |Validar Credenciales. |Login| 
| RF-005 |Creacion de reseña | El sistema podrá registrar las reseñas que los clientes crean por los servicios utilizados|Reseña | Pantalla de reseña|
| RF-006 |Edición de reseña| El sistema dara opción al cliente que ha realizado una reseña de modificarla si así lo desea |Reseña| Pantalla de reseña|
| RF-007 |Eliminación de reseña| El sistema dara opción al cliente que ha realizado una reseña de eliminarla si así lo desea |Reseña | Pantalla de reseña|
| RF-008 |Busquedas de servicio| El sistema será capaz de realizar busquedas de servicio | Busquedas | Pantalla de busqueda|
| RF-009 |Filtro de busquedas| El sistema permitira realizar filtro de busqueda en base a las necesiadades que requiera el turista y se apeque a las necesidades de la solicitud |Filtros Opcionales. | El Sistema tendra pantalla de filtros para busqueda|
| RF-010 | Reservar Vuelo | El sistema permitirá al usuario turista reservar un vuelo en cualquier momento, siempre que se tenga disponibilidad | Reservar| Reservas |
| RF-011 | Reservar Vehículo | El sistema permitirá al usuario turista reservar un vehículo en cualquier momento, siempre que se tenga disponibilidad  |Reservar |Reservas |
| RF-012 | Reservar Habitación | El sistema permitirá al usuario turista reservar una habitacion en cualquier momento, siempre que se tenga disponibilidad  |Reservar |Reservas |
| RF-013 |Cerrar sesión | El sistema será capaz de cerrar la sesión del usuario actual en cualquier dispositivo |Sincronizacion | Log Out|
| RF-014 | Aprobar Servicio | El sistema es capaz de aprobar solicitudes de servicios terceros que deseen publicar sus servicios a travez del portal. | Asignar Servicio | Servicios |
| RF-015 | Deshabilitar Servicio | el Sistema es capaz de suspender el servicio proporcionado por una de las empresas registradas al portal |Estatus de Habilitacion  | Servicios |
|RF-016|Registrar Hoteles|Los servicios terciarios que ofrecen los servicios de habitaciones podrán llenar un formulario de registro, esperando a ser validados por un administrador|Registro|Registro Servicio|
|RF-017|Registrar Renta de vehiculos|El sistema registra servicios de terciarios, este con llenar un formulario de registro, este ultimo debe de tener datos validos y evaluados por el administrador del sistema.|Registro|Registro Servicio
|RF-018|Registrar Aerolineas|Los servicios terciarios que ofrecen los servicios de vuelos podrán llenar un formulario de registro, esperando a ser validados por un administrador|Registro|Registro Servicio|
| RF-019 |Registrar nuevos vuelos |El sistema registra nuevos vuelos, estos pueden tener un estado los cuales determinaran si el cliente puede reservar el vuelo. | Registro| Pantalla renta de vuelos|
| RF-020|Registro para Habitaciones |El Sistema permitira realizar reservacion de habitacion por cantidad de camas en base al numero de personas. | Reservacion. | Pantalla Hotel.|
| RF-021|Diseño Adaptable a dispositivos |el portal sera capaz de adaptar su interfaz a cualquier dispositivo, sin afectar su estetica y funcionalidad. | Reservacion. | Pantalla Hotel reservacion.|
| RF-022 |Eliminar vehiculo |El sistema es capaz de eliminar vehiculos que la empresa terciaria ya funcionan | Registro| Pantalla renta de vehiculos|
| RF-023 |Eliminar habitacion |El sistema es capaz de eliminar habitaciones que la empresa terciaria tiene fuera de servicio por algun motivo. |Registro | Servicio|





# Requerimientos No Funcionales

| No. Requisito | Nombre | Descripcion | 
|:-------------------:|---|---|
| RNF-001 |Modificacion de Servicios| Los datos de los servicios solo podran ser modificados por aquellos roles autorizados para ello (Rol de Servicio y Admin)|
| RNF-002 | Capacidad de Almacenacmiento | el servicio que dispone el almacenamiento tendra una capacidad medianamente elevada para que el software no tenga ningun problema al ejecutar y guardar la informacion de los servicios.  |
| RNF-003 | Respuesta del Sistema | el sistema tendra la capacidad de respuesta de 5s por peticion. | 
| RNF-004 | Tematica del portal | los colores del portal iran acorde a los servicios que se asignan| |

[Regresar](../README.md)