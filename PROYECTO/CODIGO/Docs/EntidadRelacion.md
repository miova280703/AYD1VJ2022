## <p style ="text-align:Center">Universidad de San Carlos de Guatemala</p>
## <p style ="text-align:Center">Análisis y Diseño 1</p>
## <p style ="text-align:Center">Proyecto Fase 1</p>
### <p style ="text-align:Center">Grupo 10</p>
### <p style ="text-align:Center">Modelo Entidad Relación</p>

<p style="text-align:justify">Se nos solicitó la creación un diseño de una base de datos, utilizando los requerimientos obtenidos a partir de la información brindada por el cliente a través del enunciado del proyecto a realizar el cual lleva por nombre FullTrip y esta enfocado a realizar reservaciones ya sea de hotel, vuelos o automoviles en cualquier parte del mundo y de alguna manera los usuarios puedan facilitar su viaje y estadía en el pais de su preferencia. </p>

# Desarrollo y presentación propuesta del modelo solicitado
---

### 1. Modelo Conceptual
<p style = "text-align:justify">
 A continuación se presenta el modelo conceptual propuesto, así como la descripción de cada una de las entidades y sus atributos</p>

<p style="center">
    <img src="https://res.cloudinary.com/ambrosio1809/image/upload/v1655506948/ERFin_bfbzrz.png" title="Modelo Relacional">
</p>

##### <p style ="text-align:center"> Explicación de entidades y sus atributos</p>

 - Entidad: **Pais**
    - Descripción: Esta entidad hace referencia a los países de los cuales se ha registrado información en el sistema
    - Atributos:
        - id_pais: Hace referencia a la llave primaria de la instancia de pais
        - nombre: Es el nombre del pais
- Entidad: **Ciudad**
    - Descripción: Esta entidad hace referencia a las ciudades de las cuales se ha registrado información en el sistema
    - Atributos:
        - id_ciudad: Hace referencia a la llave primaria de la instancia de ciudad
        - nombre: Nombre de la ciudad registrada
- Entidad: **TipoServicio**
    - Descripción: Esta entidad hace referencia al tipo de servicio que se ofrece a través del sistema
    - Atributos:
        - id_tipo: Hace referencia a la llave primaria de la instancia del tipo de servicio
        - nombre: Nombre o tipo de servicio a ofrecer
- Entidad: **Servicio**
    - Descripción: Esta entidad hace referencia a los servicios que se ofrecen a través del sistema
    - Atributos:
        - id_Servicio: Hace referencia a la llave primaria de la instancia del servicio que ofrece
        - nombre: Nombre de servicio a ofrecer
        - correo: Correo correspondiente al servicio registrado
        - pass: Contraseña correspondiente al servicio registrado en el sistema
- Entidad: **TipoUsuario**
    - Descripción: Esta entidad hace referencia al tipo de usuario que se registra en el sistema
    - Atributos:
        - id_tipo: Hace referencia a la llave primaria del tipo de usuario
        - nombre: Nombre o tipo de usuario que se puede registrar.
- Entidad: **Usuario**
    - Descripción: Esta entidad hace referencia a los servicios que se ofrecen a través del sistema
    - Atributos:
        - id_usuario: Hace referencia a la llave primaria que identifica de manera unica al usuario
        - nombre: Nombre del usuario registrado en el sistema
        - FechaNacimiento: Es la fecha en la cual el usuario nacio, para verificar si es mayor de edad
        - correo: Correo correspondiente al usuario registrado en el sistema
        - pass: Contraseña correspondiente al usuario registrado en el sistema
- Entidad: **Resenia**
    - Descripción: Esta entidad hace referencia las reseñas que los usuarios podrán crear dentro del sistema para los servicios utilizados.
    - Atributos:
        - id_resenia: Hace referencia a la llave primaria que hace unica la reseña que crea el usuario
        - Descripcion: Es el contenido de la reseña que el usuario ha creado.
- Entidad: **Habitacion**
    - Descripción: Esta entidad hace referencia a las habitaciones y sus caracteristicas que los servicios terciarios de hoteles podrán crear en el sistema
    - Atributos:
        - id_Habitacion: Hace referencia a la llave primaria de la habitación y la hace unica
        - precio: el precio que el usuario turista deberá pagar por utilizar esta habitación
        - Estado: Mostrara el estado de la habitación, ocupada o libre
        - FechaDisponibilidad: Es la fecha en la cual la habitación se encontrará disponible
        - CantPersonas: Cantidad de personas que pueden dormir en esa habitación.
- Entidad: **ReservarHotel**
    - Descripción: Esta entidad hace referencia a la reservación que podrá realizar el usuario turista en un hotel.
    - Atributos:
        - id_Reserva: Hace referencia a la llave primaria de la reserva que el usuario solicita al servicio terciario la cual la hace única
        - CantHabitaciones: Cantidad de habitaciones que el usuario turista solicita al servicio del hotel
        - FechaIngreso: Fecha en la cual el usuario estara ingresando al hotel.
        - FechaSalida: Fecha en la cual el usuario se retira del hotel.
- Entidad: **Vuelo**
    - Descripción: Esta entidad hace referencia a los vuelos y sus caracteristicas que los servicios terciarios de aerolineas podrán crear en el sistema
    - Atributos:
        - id_vuelo: Hace referencia a la llave primaria del vuelo y lo hace unico
        - precio: el precio que el usuario turista deberá pagar por utilizar esta vuelo
        - FechaVuelo: Es la fecha en la el vuelo se realizara.
        - AsientosDisponibles: Cantidad de asientos disponibles para el vuelo.
- Entidad: **ReservaVuelo**
    - Descripción: Esta entidad hace referencia a la reservación que podrá realizar el usuario turista en un vuelo.
    - Atributos:
        - id_Reserva: Hace referencia a la llave primaria de la reserva que el usuario solicita al servicio terciario la cual la hace única
        - CantAsientos: Cantidad de asientos que el usuario turista solicita al servicio de la aerolinea
        - FechaReserva: Fecha en la cual el usuario realizo su reserva.
        - FechaFinReserva: Fecha en la cual el usuario se retira del vuelo.
- Entidad: **Automoviles**
    - Descripción: Esta entidad hace referencia a las Automoviles y sus caracteristicas que los servicios terciarios de Renta de autos podrán crear en el sistema
    - Atributos:
        - id_Auto: Hace referencia a la llave primaria de la automovil y la hace unica
        - precio: el precio que el usuario turista deberá pagar por utilizar este automovil
        - Marca: Se refiere a la marca del vehiculo.
        - Placa: Numero oficial que identifica al vehículo.
        - Modelo: modelo del vehiculo
        - FechaDisponibilidad: Es la fecha en la cual el automovil se encontrará disponible
- Entidad: **ReservaAuto**
    - Descripción: Esta entidad hace referencia a la reservación que podrá realizar el usuario turista en un hotel.
    - Atributos:
        - id_Reserva: Hace referencia a la llave primaria de la reserva que el usuario solicita al servicio terciario la cual la hace única
        - CantDias: Cantidad de dias que el usuario turista solicita al servicio del automovil
        - FechaReserva: Fecha en la cual el usuario realizo su reserva.
        - FechaFinReserva: Fecha en la cual el usuario debe devolver el automovil.

### 2. Modelo Lógico
<div align="center">

##### Pais

||Columnas|id_pais|nombre||
|:--:|:--:|:--:|:--:|:--|
||Restricciones|PK|NN|
|||1|Guatemala|
|||2|Honduras|
|||3|España|


</div>

<div align="center">

##### Ciudad

||Columnas|id_ciudad|nombre||
|:--:|:--:|:--:|:--:|:--|
||Restricciones|PK|NN|
|||1|Ciudad de Guatemala|
|||2|Monterrey|
|||3|Madrid|


</div>

<div align="center">

##### TipoServicio

|Columnas|id_tipo|nombre|
|:--:|:--:|:--:|
|Restricciones|PK|NN|
||1|Hotel|
||2|Aerolinea|
||3|RentaAutos|

</div>

<div align="center">

##### TipoUsuario

|Columnas|id_tipo|nombre|
|:--:|:--:|:--:|
|Restricciones|PK|NN|
||1|Turista|
||2|Administrador|

</div>

<div align="center">

##### Servicio

|Columnas|id_Servicio|nombre|correo|pass|
|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN
||1|Tikal Futura|TikalFutura@gmail.com|lkssixkk1ls90921|
||2|RentaCar|RentaCar@gmail.com|kjsaodfivn@kas9123|
||3|Spirit Airlines|Spirit@gmail.com|slakajs9102343|

</div>

<div align="center">

##### Usuario

|Columnas|id_usuario|nombre|FechaNacimiento|correo|pass|
|:--:|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|NN|
||1|Fernando Ambrosio|18/09/1996|FerAmb@gmail.com|lkssixkk1ls90921|
||2|Javier Perez|05/02/1996|jape@gmail.com|kjsaodfivn@kas9123|
||3|Cristina Suárez|20/08/00|Crisuarez@gmail.com|slakajs9102343|

</div>

<div align="center">

##### Resenia

|Columnas|id_resenia|Descripción|
|:--:|:--:|:--:|
|Restricciones|PK|NN|
||1|El hotel estaba muy limpio aun que podría mejorar un poco en la comida|
||2|El automovil estaba en perfectas condiciones para los viajes que realice con el|
||3|El vuelo apesar de que se atrasó estuvo bien en general|

</div>

<div align="center">

##### Habitacion

|Columnas|id_Habitacion|Precio|Estado|FechaDisponibilidad|CatPersonas|
|:--:|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|NN|
||1|500.00|Disponible|17/06/2022|4|
||2|300.00|Ocupada|20/06/2022|2|
||3|800.00|Disponible|17/06/2022|6|

</div>

<div align="center">

##### Vuelo

|Columnas|id_vuelo|FechaVuelo|DestinoVuelo|AsientosDisponibles|Precio|
|:--:|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|NN|
||1|17/06/2022|Guatemala|4|250.00|
||2|20/06/2022|Mexico|2|1200.00|
||3|17/06/2022|Canada|6|1750.00|

</div>

<div align="center">

##### Automovil

|Columnas|id_Automovil|Marca|Placa|Modelo|Precio|FechaDisponibilidad|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|NN|NN|
||1|Nissan|123ABC|Sentra|300.00|18/09/2022|
||2|KIA|123ABD|Koleos|500.00|20/06/2022|
||3|Honda|123ABE|Civic|250.00|17/06/2022|

</div>

<div align="center">

##### ReservaHotel

|Columnas|id_Reserva|CantHabitaciones|FechaIngreso|FechaSalida|
|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|
||1|2|18/09/2022|20/09/2022
||2|1|17/06/2022|20/06/2022|
||3|4|17/06/2022|25/06/2022|

</div>

<div align="center">

##### ReservaVuelo

|Columnas|id_Reserva|CantAsientos|FechaReserva|FechaFinReserva|
|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|
||1|2|18/09/2022|18/09/2022
||2|1|17/06/2022|17/06/2022|
||3|4|17/06/2022|17/06/2022|

</div>

<div align="center">

##### ReservaAuto

|Columnas|id_Reserva|CantDias|FechaReserva|FechaFinReserva|
|:--:|:--:|:--:|:--:|:--:|
|Restricciones|PK|NN|NN|NN|
||1|2|18/09/2022|20/09/2022
||2|1|17/06/2022|20/06/2022|
||3|4|17/06/2022|25/06/2022|

</div>

### 3. Modelo Relacional
<p style = "text-align:justify">
 A continuación se presenta el modelo Relacional propuesto</p>

<p style="center">
    <img src="https://res.cloudinary.com/ambrosio1809/image/upload/v1655506948/ModeloER_hn3zzk.png" title="Modelo Relacional">
</p>

### 4. Modelo Físico
- DDL (Data Definition Language)
    ```sql
    
    CREATE SCHEMA IF NOT EXISTS `aydbd` DEFAULT CHARACTER SET utf8 ;
    USE `aydbd` ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`TipoUsuario` (
    `Id_Tipo` INT NOT NULL,
    `Nombre` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`Id_Tipo`))
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Usuario` (
    `Id_Usuario` INT NOT NULL,
    `Nombre` VARCHAR(45) NULL,
    `FechaNacimiento` DATETIME NULL,
    `Correo` VARCHAR(150) NULL,
    `Pass` VARCHAR(250) NULL,
    `TipoUsuario_Id_Tipo` INT NOT NULL,
    PRIMARY KEY (`Id_Usuario`),
    INDEX `fk_Usuario_TipoUsuario_idx` (`TipoUsuario_Id_Tipo` ASC) VISIBLE,
    CONSTRAINT `fk_Usuario_TipoUsuario`
        FOREIGN KEY (`TipoUsuario_Id_Tipo`)
        REFERENCES `aydbd`.`TipoUsuario` (`Id_Tipo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Pais` (
    `Id_Pais` INT NOT NULL,
    `Nombre` VARCHAR(45) NULL,
    PRIMARY KEY (`Id_Pais`))
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Ciudad` (
    `Id_Ciudad` INT NOT NULL,
    `Nombre` VARCHAR(45) NOT NULL,
    `Pais_Id_Pais` INT NOT NULL,
    PRIMARY KEY (`Id_Ciudad`),
    INDEX `fk_Ciudad_Pais1_idx` (`Pais_Id_Pais` ASC) VISIBLE,
    CONSTRAINT `fk_Ciudad_Pais1`
        FOREIGN KEY (`Pais_Id_Pais`)
        REFERENCES `aydbd`.`Pais` (`Id_Pais`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`TipoServicio` (
    `Id_Tipo` INT NOT NULL,
    `Nombre` VARCHAR(45) NULL,
    PRIMARY KEY (`Id_Tipo`))
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Servicio` (
    `Id_Servicio` INT NOT NULL,
    `Nombre` VARCHAR(45) NULL,
    `Correo` VARCHAR(150) NULL,
    `Pass` VARCHAR(250) NULL,
    `Serviciocol` VARCHAR(45) NULL,
    `Ciudad_Id_Ciudad` INT NOT NULL,
    `TipoServicio_Id_Tipo` INT NOT NULL,
    PRIMARY KEY (`Id_Servicio`),
    INDEX `fk_Servicio_Ciudad1_idx` (`Ciudad_Id_Ciudad` ASC) VISIBLE,
    INDEX `fk_Servicio_TipoServicio1_idx` (`TipoServicio_Id_Tipo` ASC) VISIBLE,
    CONSTRAINT `fk_Servicio_Ciudad1`
        FOREIGN KEY (`Ciudad_Id_Ciudad`)
        REFERENCES `aydbd`.`Ciudad` (`Id_Ciudad`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Servicio_TipoServicio1`
        FOREIGN KEY (`TipoServicio_Id_Tipo`)
        REFERENCES `aydbd`.`TipoServicio` (`Id_Tipo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Resenia` (
    `Id_Resenia` INT NOT NULL,
    `Descripcion` VARCHAR(500) NULL,
    `Usuario_Id_Usuario` INT NOT NULL,
    `Servicio_Id_Servicio` INT NOT NULL,
    PRIMARY KEY (`Id_Resenia`),
    INDEX `fk_Resenia_Usuario1_idx` (`Usuario_Id_Usuario` ASC) VISIBLE,
    INDEX `fk_Resenia_Servicio1_idx` (`Servicio_Id_Servicio` ASC) VISIBLE,
    CONSTRAINT `fk_Resenia_Usuario1`
        FOREIGN KEY (`Usuario_Id_Usuario`)
        REFERENCES `aydbd`.`Usuario` (`Id_Usuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Resenia_Servicio1`
        FOREIGN KEY (`Servicio_Id_Servicio`)
        REFERENCES `aydbd`.`Servicio` (`Id_Servicio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Habitacion` (
    `Id_Habitacion` INT NOT NULL,
    `Precio` DOUBLE NULL,
    `Estado` VARCHAR(45) NULL,
    `FechaDisponibilidad` DATETIME NULL,
    `CantPersonas` INT NULL,
    `Servicio_Id_Servicio` INT NOT NULL,
    PRIMARY KEY (`Id_Habitacion`),
    INDEX `fk_Habitacion_Servicio1_idx` (`Servicio_Id_Servicio` ASC) VISIBLE,
    CONSTRAINT `fk_Habitacion_Servicio1`
        FOREIGN KEY (`Servicio_Id_Servicio`)
        REFERENCES `aydbd`.`Servicio` (`Id_Servicio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`ReservaHotel` (
    `Id_Reserva` INT NOT NULL,
    `CantHabitaciones` INT NULL,
    `FechaIngreso` DATETIME NULL,
    `fechaSalida` DATETIME NULL,
    `Usuario_Id_Usuario` INT NOT NULL,
    `Habitacion_Id_Habitacion` INT NOT NULL,
    PRIMARY KEY (`Id_Reserva`),
    INDEX `fk_ReservaHotel_Usuario1_idx` (`Usuario_Id_Usuario` ASC) VISIBLE,
    INDEX `fk_ReservaHotel_Habitacion1_idx` (`Habitacion_Id_Habitacion` ASC) VISIBLE,
    CONSTRAINT `fk_ReservaHotel_Usuario1`
        FOREIGN KEY (`Usuario_Id_Usuario`)
        REFERENCES `aydbd`.`Usuario` (`Id_Usuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_ReservaHotel_Habitacion1`
        FOREIGN KEY (`Habitacion_Id_Habitacion`)
        REFERENCES `aydbd`.`Habitacion` (`Id_Habitacion`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Vuelo` (
    `Id_Vuelo` INT NOT NULL,
    `FechaVuelo` DATETIME NULL,
    `AsientosDisponibles` INT NULL,
    `Precio` DOUBLE NULL,
    `Servicio_Id_Servicio` INT NOT NULL,
    `Ciudad_Id_Ciudad` INT NOT NULL,
    PRIMARY KEY (`Id_Vuelo`),
    INDEX `fk_Vuelo_Servicio1_idx` (`Servicio_Id_Servicio` ASC) VISIBLE,
    INDEX `fk_Vuelo_Ciudad1_idx` (`Ciudad_Id_Ciudad` ASC) VISIBLE,
    CONSTRAINT `fk_Vuelo_Servicio1`
        FOREIGN KEY (`Servicio_Id_Servicio`)
        REFERENCES `aydbd`.`Servicio` (`Id_Servicio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Vuelo_Ciudad1`
        FOREIGN KEY (`Ciudad_Id_Ciudad`)
        REFERENCES `aydbd`.`Ciudad` (`Id_Ciudad`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`ReservaVuelo` (
    `Id_Reserva` INT NOT NULL,
    `CantAsientos` INT NULL,
    `FechaReserva` DATETIME NULL,
    `FechaFinReserva` DATETIME NULL,
    `Usuario_Id_Usuario` INT NOT NULL,
    `Vuelo_Id_Vuelo` INT NOT NULL,
    PRIMARY KEY (`Id_Reserva`),
    INDEX `fk_ReservaVuelo_Usuario1_idx` (`Usuario_Id_Usuario` ASC) VISIBLE,
    INDEX `fk_ReservaVuelo_Vuelo1_idx` (`Vuelo_Id_Vuelo` ASC) VISIBLE,
    CONSTRAINT `fk_ReservaVuelo_Usuario1`
        FOREIGN KEY (`Usuario_Id_Usuario`)
        REFERENCES `aydbd`.`Usuario` (`Id_Usuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_ReservaVuelo_Vuelo1`
        FOREIGN KEY (`Vuelo_Id_Vuelo`)
        REFERENCES `aydbd`.`Vuelo` (`Id_Vuelo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`Automovil` (
    `Id_Auto` INT NOT NULL,
    `Marca` VARCHAR(45) NULL,
    `Placa` VARCHAR(45) NULL,
    `Modelo` VARCHAR(45) NULL,
    `Precio` DOUBLE NULL,
    `FechaDisponible` DATETIME NULL,
    `Servicio_Id_Servicio` INT NOT NULL,
    PRIMARY KEY (`Id_Auto`),
    INDEX `fk_Automovil_Servicio1_idx` (`Servicio_Id_Servicio` ASC) VISIBLE,
    CONSTRAINT `fk_Automovil_Servicio1`
        FOREIGN KEY (`Servicio_Id_Servicio`)
        REFERENCES `aydbd`.`Servicio` (`Id_Servicio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;

    CREATE TABLE IF NOT EXISTS `aydbd`.`ReservaAuto` (
    `Id_Reserva` INT NOT NULL,
    `CantDias` INT NULL,
    `FechaReserva` DATETIME NULL,
    `FechaFinReserva` DATETIME NULL,
    `Usuario_Id_Usuario` INT NOT NULL,
    `Automovil_Id_Auto` INT NOT NULL,
    PRIMARY KEY (`Id_Reserva`),
    INDEX `fk_ReservaAuto_Usuario1_idx` (`Usuario_Id_Usuario` ASC) VISIBLE,
    INDEX `fk_ReservaAuto_Automovil1_idx` (`Automovil_Id_Auto` ASC) VISIBLE,
    CONSTRAINT `fk_ReservaAuto_Usuario1`
        FOREIGN KEY (`Usuario_Id_Usuario`)
        REFERENCES `aydbd`.`Usuario` (`Id_Usuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_ReservaAuto_Automovil1`
        FOREIGN KEY (`Automovil_Id_Auto`)
        REFERENCES `aydbd`.`Automovil` (`Id_Auto`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
     ;
[Regresar](../README.md)