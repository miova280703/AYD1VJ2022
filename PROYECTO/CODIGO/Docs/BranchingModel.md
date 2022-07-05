## Branching en FULL TRIP 
En un escenario real, nosotros como desarrolladores, rara vez trabajamos en solitario en un proyecto. Lo normal es que nos acompañen otros desarrolladores, que pueden o no conformar un grupo de trabajo, y  que estos  colaborarán con nosotros mano a mano. A medida que el proyecto va a avanzando, nos encontramos con situaciones como tener que trabajar en funcionalidades nuevas, arreglar bugs críticos, y con el correr del tiempo, se necesitara  juntar todas las funcionalidades que se han desarrollando hasta el momento.

Esto puede ocacionar muchas confusiones y puede ocacionar un desorden si no se maneja adecuadamente.
Es por ello que las necesidades y circunstancias que se mencionaron anteriormente pueden ajustarse a nuestro reciente situacion en el proyecto "FULL TRIP", hemos decidido que para abordar el desarrollo de este proyecto y mantener un control a lo mencionado anteriormente,  la mejor forma de abordar es utilizando la metodologia de **GITFLOW**, ya que justamente este  proyecto  puede ir ganando cuerpo y a la vez necesitar de actualizaciones constantes y nos permitira manejar de una forma ordenada el flujo de los cambios el proyecto. cabe recalcar que el grupo ya tiene un acercamiento previo a esta metodologia, lo cual hara que el desarrollo pueda ejecutarse de una mejor manera.


## Flujo de Git Flow en Grupo10

Siguendo lo que la metodologia Git flow nos indica, el flujo con el que se abordara el proyecto es el siguiente:

La Branch **Master** sera la rama principal siendo utilizada para enviar los commits de los Releases para la producción.
Y apartir de Master, que nuestra Branch **Develop** va a hacer creada; En esta rama  se incluirán cada una de las nuevas características que se desarrollen, a las cuales las denominaremos como **Features**.

cada miembro tendra asignado una tarea el cual debe ser intregrada al marco actual de trabajo en terminos de giflow, cada unos de los desarrolladores mantendra la siguiente nomenclatura:

```sh
feature/NombreFuncionalidad_#Carnet
```

Al concluir la funcionalidad, el encargado de esta misma realizara un ***Merge Request*** , ha los encargados el mantenimiento del repositorio, para que posteriormente este pueda ser integrado en la rama Developer y asi sucesivamente con cada una de las funcionalidades. Para posteriormente realizar su ***Release*** con su respectiva version e integrarla a ***Main**, en caso de ser un flujo perfecto.

en caso que se necesite arreglar un error urgentemente y esta la version se encuentre en produccion se hara uso de un ***hotfix*** . En caso de ser necesario El hotfix tendra la siguiente nomenclatura:

```sh
hotfix/Error_#Version
```
Una vez arreglado el error, se incluira el contenido de esta rama en las ramas master y develop para subsanar el error. Además, se re-marcara la versión arreglada de producción con un tag en la rama master.

[Regresar](../README.md)