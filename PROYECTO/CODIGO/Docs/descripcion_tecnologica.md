![](RackMultipart20220619-1-394yh9_html_cca2b6e384b9a5fc.png)AYD1\_F1

Documentacion
 Grupo\_10

**Descripción Tecnológica**

**Arquitectura tecnologica de desarrollo**
Se utilizaron 5 equipos fisicos con windows 10 Pro y 11, asi mismo distribucion linux siendo O.S. ubuntu 16.04 LTS, procesador core i5 y i7 intel, con memorias RAM de 8 GB y Discos duros de estado solidos SSD siendo fisicos.

**MYSQL:**

Para este caso se utiliza MYSQL con Docker en gcp puesto por ser free con una versión 8.0.29 estable gratuita que permite realizar la conexion desde gcp de mysql.

**¿Porque?** Por ser una base de datos relacional con una capa gratuita y porque en base a nuestro modelo relacional podemos integrarlo en este dbms siendo con un modelo que se modelo mediante una herramienta de oracle y con el cual se desarrollo un mediante datamodeler el diagrama logico, conceptual y la generacion del script.

![](https://i.imgur.com/0SKNuu5.png)


**DOCKER:**

![](RackMultipart20220619-1-394yh9_html_c3cb417893c17c76.png) 
Como contenedores para este caso utilizaremos Docker como principal fuente de sistema operativo, para la generacion de imagenes y portatiles, aplicando los comandos mas utilices y frecuentes podriamos utilizar como principal fuentes de desarrollo maquinas virtuales como lo es linux. otra parte fundamental es la part de docker hub del cual permite cargar imagenes para que sean de forma portable.


![](https://i.imgur.com/ThWo8aw.png)

**GCP:** Como principal nube del cual se publicará la parte funcional de frontEnd y gestiones operacionales del sistema se procede a utilizar la nube de google cloud platafform (gcp). Entre las principales nubes por la accesabilida de creditos que presenta y otorga para el uso de sus tecnologica y/ó servicios podriamos mencionar que es la principal fuente de configuracion para crear las instancias de los motores de dbms y la creacion de instancias que permite alogra la base de datos my-sql para el  proyecto full-trip.

![](RackMultipart20220619-1-394yh9_html_18572c6b669e0960.png)

**¿Por qué GCP?** Primero porque presenta una capa gratuita y segundo porque los servicios se integran a los requerimientos de nuestras necesidades.

**REACT:**
Se procede a utilizar react a nivel de frontEnd como componente de implementación siendo método llamado render() de tal forma que se reciben datos de entrada y retorna lo que mostro de tal forma que se procede a utilizar microservicios. Como podemos apreciar con REACT podemos crear componentes de los cuales pueden ser encapsulados y que manejen su propio estado, es decir que se conviertan en interfaces de sus propios usuario de forma compleja.
Es decir con esta logica para los componentes a nivel de frontEnd del cual esta escrita en javaScript del cual y no en plantillas, con esto podemos decir que podemos pasar datos de forma sencilla  a traves de aplicaciones y asi poder manterner el estado que sea fuera del DOM.

![](https://i.imgur.com/obeuydV.png)

![](RackMultipart20220619-1-394yh9_html_1f922f4cef0a406e.png) 
**¿Porque React?** Por UIX con el usuario y referencias que hemos recibido como retroalimentación, Así mismo nos ayudar con la creación de interfaces para el usuario de forma interactiva y sencilla. Puesto que, para las pantallas de Vuelos, rentas de autos y reservas en hoteles vamos a poder ver que su diseño con react es amigable del cual se encarga de actualizar y renderizar de forma más eficiente los componentes de forma correcta cuando los datos se llenen bien.

**Boostrap 4:**

Por ser amigable (UIX) y sobre todo la eficiencia que presenta para la integración de FrontEnd como react con bootstrap así mismo por presentar templates free de los cuales pueden acoplarse a los requerimientos en las pantallas siendo amigables para la reservación de hoteles, rentas de automóviles, y gestiones de vuelos. Con Bootstrap podremos reajustar la pantalla ya sea que el usuario turista navegue en una Tablet, Smartphone, notebok, desktop, smarTV ó lapto.

![](https://i.imgur.com/FCPE4jh.png)


![](RackMultipart20220619-1-394yh9_html_551bd2f2ba71b198.png)

**NODE.js:**

Procedemos a utilizar Node.js como BackEnd para el desarrollo de micro-servicios, servidores, lógica de endpoint y validaciones sobre el cual se realizarán querys a la base de datos que se encuentra en la nube.

 **¿Porque?** Amigable al desarrollo lógico estructural, conexión a servicios de nube y por liviano al compilar y levantar los servicios. Por experiencia laborales podriamos decir que node.js nos facilita bastante la parte del desarrollo por su gran cantiada de documentacion que existe y por ser un lenguaje bastante tipiado. Asi mismo nos permite la parte del desarrollo de creacion de micro-servicios.


![](https://i.imgur.com/eIEsGxP.png)

![](RackMultipart20220619-1-394yh9_html_b212e8e73156e67a.png)

![](RackMultipart20220619-1-394yh9_html_4ccd573a54d15256.png) **Seguridad: JWT** Utilizamos JSON Web Token (JWT) como un estándar abierto para nuestra seguridad de la aplicación puesto que cuenta con un algoritmo llamado **HMAC** con este podemos cifrar la parte publica/privada mediante un par de claves usando RSA ó ECDSA.

![](https://i.imgur.com/kBEyu6E.png)

Con esto vamos a poder cifrar y ser confidencial entre las partes de cada pantalla tanto para Reservas de Hotel, renta auto, pago boletos aerolíneas por usuario del cual presenta el rol de turista. Considerando que al verificar la integridad vamos a poder ver firmados los tokens encriptados.


**s3 Bucket**
Para el alojamiento, seguridad y almacenamiento estable de las imagenes podriamos mencionar que usamos este servicio de AWS cloud puesto que por su seguridad es una parte fundamental he importante que nos permite desarrollar este servicio.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY_s9f22GeyrDsymaOOg9iv9WKQtwwe30Eg&usqp=CAU)

**¿Porque s3-Bucket de AWS?**
* Permite crear rutas de almacenaje con sus respectivos portafolios, accesible de utilizar y nos permite ser escalable, disponible de datos asi como brindar seguridad y rendimiento lo cual biene siendo lider para el sector de almacenamiento.
* Accesible porque aca podemos almacenar objetos y asi mismo revertirlos siendo, fichero, videos, audios y para nuestro caso serian las imagenes.

[Regresar](../README.md)