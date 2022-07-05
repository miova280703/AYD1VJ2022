### Diagrama de Componentes
* FrontEnd:
  Se presenta los componentes a nivel de Front
  End que se procederan a utilizar con  el bean's y web's por cada nombre de pantalla.
* BackEnd:
  Se desarrolla la logica por cada microservicio que se procedera a utilizar de
  tal forma que son cada uno integrado en base a los requerimientos que demanda full-trip,
* DB: 
  Es la base de datos que aloja los registros
  importantes de los cliente en los cuales se
  detalle los datos personales asi tambien como la autenticacion de login que permita 
  realizar el registro.
* Nube:
  Para este caso procedemos a utilizar gcp de tal forma que es la que nos permite realizar
  las conexiones a travez de la web y poder 
  conectar a los microservicios que permiten la conexion.

* Pruebas Unitarias:
  En este caso se realiza un scan sobre las pruebas a nivel de micro-servicios que se aplican a nivel de BackEnd, considerando que usamos la libreria de supertest para node.sj

* Pruebas Funcionales:
  Con respecto a estas pruebas podemos validar el tema de las pruebas funcionales sobre las cuales estas aplican para el tema de a nivel en FrontEnd, sobre las cuales podemos apreciar su funcionamiento, para este caso utilizamos selenium.



![](https://i.imgur.com/AYzPtG1.png)

[Regresar](../README.md)