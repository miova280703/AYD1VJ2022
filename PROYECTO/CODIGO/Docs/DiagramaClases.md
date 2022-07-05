
# <p style ="text-align:Center">Diagrama de Clases</p>

Se solicito la creacion de un UML(Diagrama de Clases), este es un tipo uno de los diagramas utiles ya que este traza claramente la estructura de un sistema en concreto, este ilustra las clases, atributos, operaciones y relaciones entre objetos existentes.


## Presentación de Diagrama de clases propuesto

A continuación, se muestra el diagrama de clases, este fue desarrollado segun la logica del negocio abarcando todos los aspectos brindados por el cliente.

 ![](https://i.imgur.com/Hru5X8K.png)

### Explicación de las clases propuestas

Cada atributos y metodos de las clases propuestas se encuentran con la visibilidad privada, esto con el fin de que los datos esten protegidos. 

- ## Usuario
    Esta clase contiene los siguientes atributos y metodos de los cuales son heredados a sus clases hijas. 
    - Atributos
        - Correo
        - Contraseña
    - Metodos
        - Login

- ## Administrador
    Esta clase es dedicada al administrador ya que este es uno de los roles importantes para el funcionamiento correcto de las demas clases.
    - Atributos
        - Nombre
        - Usuario
    - Metodos
        - 


- ## Registrar Servicio
    Esta clase es dedicada para el uso del administrador, de esta depende la creacion de las demas clases ya que sin esta no es posible las demas. Esta es la encargada de registrar los servicios brindados por las empresas.
    - Atributos
        - Id
        - Correo
        - Contraseña
        - Tipo
        - Pais
        - Ciudad
        - Ubicacion
    - Metodos
        - Registrar Servicio
        - Editar Servicio
        - Eliminar Servicio



- ## Aerolinea
    Esta clase es exclusiva para la aerolinea ya que en ella se encuentran sus datos y sus metodos unicos para su clase(servicio exclusivo), ya que sin esta no pueden existir sus siguiente.
    - Atributos
        - Id 
        - Nombre Aerolinea
    - Metodos
        - Registrar Vuelos
        - Editar Vuelos
        - Eliminar Vuelos


- ## Vuelo
    Esta clase es exclusiva para la aerolinea ya que en ella se encuntran los datos necesarios para la creacion de un vuelo para una aerolinea exclusiva.
    - Atributos
        - Id 
        - Fecha Vuelo
        - Destino Vuelo
        - Precio 
        - No. Asiento
    - Metodos
        - Actualizar Vuelo

- ## Programar Vuelo
    Esta clase es exclusiva para la aerolinea y para el cliente, en esta se realiza su programacion del vuelo con los datos respectivos entre la clase vuelo y cliente.
    - Atributos
        - Id 
        - Fecha ida
        - Fecha Retorno
        - No. Asientos
    - Metodos
        - Reservar Asiento
        - Cambiar Asiento

    
- ## Renta Auto
    Esta clase es exclusiva para la renta de vehiculos ya que en ella se encuentran sus datos y sus metodos unicos para su clase(servicio exclusivo), ya que sin esta no pueden existir sus siguiente.
    - Atributos
        - Id 
        - Nombre de la Renta de Auto
    - Metodos
        - Registrar Auto
        - Editar Auto
        - Eliminar Auto


- ## Auto
    Esta clase es exclusiva para la renta de vehiculos ya que en ella se encuntran los datos necesarios para la creacion de un vehiculo para una renta de vehiculo exclusivo.
    - Atributos
        - Id 
        - Marca
        - Placa
        - Modelo
        - Precio
        - Cant. Personas
    - Metodos
        - Actualizar Vehiculo
        - Cambiar Vehiculo

- ## Renta
    Esta clase es exclusiva para la renta de un vehiculo, en esta se realiza la renta de vehiculo cumpliendo con los datos respectivos entre la clase auto y cliente.
    - Atributos
        - Id 
        - Fecha Inicial
        - Fecha Fin
    - Metodos
        - Rentar Vehiculo
        - Cambiar Vehiculo
        - Devolver Vehiculo
    

- ## Hotel
    Esta clase es exclusiva para el hotel ya que en ella se encuentran sus datos y sus metodos unicos para su clase(servicio exclusivo), ya que sin esta no pueden existir sus siguiente.
    - Atributos
        - Id 
        - Nombre del Hotel
    - Metodos
        - Registrar Habitación
        - Editar Habitación
        - Eliminar Habitación


- ## Habitación
    Esta clase es exclusiva para el hotel ya que en ella se encuntran los datos necesarios para la creacion de las habitaciones de un hotel en exclusivo.
    - Atributos
        - Id 
        - No. Habitación
        - Precio
        - Personas
    - Metodos
        - Actualizar Habitación
        - Cambiar Habitación

- ## Renta
    Esta clase es exclusiva para la reservacion de una habitación, se deben de cumplir con los datos respectivos entre la clase habitacion y cliente.
    - Atributos
        - Id 
        - Fecha Ingreso
        - Fecha Salida
        - Cantidad Personas
    - Metodos
        - Verificar Reserva
        - Registrar Reserva
        - Eliminar Reserva

- ## Reseña
    Esta clase es exclusiva para que el cliente realize comentarios sobre los servicios que se el fueron brindados, para ello debe cumplir con los datos necesarios para lograr la generación de una reseña.
    - Atributos
        - Id 
        - Usuario
        - Servicio
        - Descripcion
    - Metodos
        - Publicar Reseña



- ## Visualizar Reseña
    Esta clase es exclusiva para la reseña esta es dependiente de la mencionada anteriormente, se debe de tener una reseña para poder visualizar, esta esta visible para los clientes y para las empresas que brinda los servicios.
    - Metodos
        - visualizar Reseña
    
[Regresar](../README.md)