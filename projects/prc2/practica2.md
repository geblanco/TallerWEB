## Práctica 2. Aplicación pomodoro

- [Descripción](#descripcion)
- [Requisitos y restricciones](#requisitos-y-restricciones)
- [Tiempo estimado](#tiempo-estimado)
- [Material proporcionado](#material-proporcionado)
- [Ampliación](#ampliacion)

### Descripción
**Se pide:**  
Desarrollar una aplicación de escritorio para implementar la técnica [Pomodoro](http://cirillocompany.de/pages/pomodoro-technique). Para ello la aplicación tiene que permitir la configuración del contador mediate menús de electron en una pantalla independiente.   
La aplicación tiene que tener una ventana independiente para la configuración contador. Además debe tener un menú que permite comenzar, pausar, reiniciar y continuar el contador, mostrando una notificación por pantalla con cada acción realizada sobre el contador.

### Requisitos y restricciones
Los modulos permitidos para el desarrollo se encuentran en el apartado de material proporcionado.   
La pantalla de configuración de minutos de cada pomodoro debe ser una ventana independiente.   
El resto de la aplicación debe estar hecha con [menús de electron](http://electron.atom.io/docs/api/menu/). En un principio se mostrará el icono de pomodoro en el item de menú y debe tener las siguientes opciones:  
- Preferences: abre la ventana de configuración de minutos.
- Start timer: comienza el contador desde el principio. Debe mostrar una notificación y se deben mostrar los minutos que quedan en el item de menú.
- Stop timer: termina el contador y muestra una notificación. Se deben quitar los minutos en el item de menú y mostrar el icono de pomodoro.
- Pause timer: pausa el contador de minutos y muestra una notificación. Se deben quitar los minutos en el item de menú y mostrar el icono de pomodoro.  
Los iconos necesarios y toda su configuración se proporciona como material.

###Tiempo estimado
Se estima que la duración de la práctica es de 1:30 horas.

### Material proporcionado
Es necesario que ejecutes el script de [configuración](scripts/setupElectronPrc.sh) (en la carpeta scripts, hay que darle permisos con ```chmod 755 <script.sh>```) en la raíz del proyecto. Este script añade las librerías y parámetros necesarios para el correcto funcionamiento de la librería canvas, tanto en tu sistema como en tu fichero ```package.json```, de forma que es necesario que crees primero la base del proyecto.  
Uno de los ficheros proporcionados es el fichero ```iconGenerator.js``` que genera todos los iconos necesarios para mostrar en el menú. Este es el método que se debe utilizar:
``` 
var timerIcon = require('./iconGenerator')
timerIcon( tmpDir, txt, callback)
``` 
Donde ```tmpDir``` es el directorio donde la librería irá almacenando los iconos que genera, ```txt``` es el texto que se quiere mostrar y ```callback``` que es la función que devuelve el resultado cuando ha terminado de ejecutarse la función.  
Por otro lado también se proporcionan los iconos necesarios para mostrar en las notificaciones y los iconos estaticos (como el icono de pomodoro inicial) que se mostrarán en el menú. Se encuentran en la carpeta icons.

### Ampliación
Esta práctica no tiene ampliación