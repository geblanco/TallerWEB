## Práctica 1. Servidor web con express

- [Descripción](#descripcion)
- [Requisitos y restricciones](#requisitos-y-restricciones)
- [Tiempo estimado](#tiempo-estimado)
- [Material proporcionado](#material-proporcionado)
- [Ampliación](#ampliacion)

### Descripción
**Se pide:**  
Hacer un servidor de ficheros estático.    
El servidor será accesible desde tu propio ordenador usando la dirección localhost, pero únicamente en modo lectura y descarga. No se pide la posibilidad de subir ficheros.  
También se debe guardar el último directorio en el que se ha quedado el usuario para que al volver a acceder al servidor, éste abra directamente ese directorio leyendolo de la cookie.

### Requisitos y restricciones
Solo se pueden utilizar los siguientes módulos externos:
- Para el servidor de ficheros [express](https://www.npmjs.com/package/express)
- Para las cookies [cookie-parser](https://www.npmjs.com/package/cookie-parser)
El acceso al servidor se realiza desde [localhost](http://localhost:8080)    
Se debe permitir únicamente la descarga de ficheros y la navegación entre directorios. Para la descarga de ficheros es necesario el tratamiento de [streams](https://nodejs.org/dist/latest-v6.x/docs/api/stream.html).
Para la cookie lo más sencillo es actualizarla en cada navegación entre directorios.

###Tiempo estimado
Se estima que la duración de la práctica es de 3 horas.

### Material proporcionado
No se proporciona material extra para esta práctica

### Ampliación
¿Te aburres? ¿Te ha sabido a poco esta práctica?  

Puedes probar:
- Añade estilo con [Bootstrap](http://getbootstrap.com/)
- Añade la opción de subida de ficheros al servidor utilizando el sistema ```drag and drop```
- Añade algo de seguridad para evitar el cross site scripting
