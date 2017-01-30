## Práctica 0. Replicador de árboles

- [Descripción](#descripcion)
- [Requisitos y restricciones](#requisitos-y-restricciones)
- [Tiempo estimado](#tiempo-estimado)
- [Material proporcionado](#material-proporcionado)
- [Ampliación](#ampliacion)

### Descripción
**Se pide:**  
Dados como entrada al programa un árbol de ficheros y un path de destino, replicar dicho árbol en el destino provisto.  
El resultado se podrá mostrar por consola.  
Las posibilidades de generación de código son las siguientes:
- Síncrono y secuencial.
- Síncrono y recursivo
- Asincrono y secuencial
- Asincrono y recursivo

### Requisitos y restricciones
No se pueden utilizar APIs secundarias, solo APIs nativas.  
Los datos para generar el árbol se deben leer desde un fichero en formato JSON.  
Se debe generar el fichero JSON con el siguiente comando:  
```tree -J --dirsfirst --noreport > tree.json```
Donde `tree.json` es el archivo json en el que se almacena el árbol (es una redirección de la salida estándar del programa tree)
Es importante que la versión de ```tree --version >= 1.7.0```.   
Si tu versión es inferiór, descarga la actualización desde este [enlace](http://archive.ubuntu.com/ubuntu/pool/universe/t/tree/):

###Tiempo estimado
Se estima que la duración de la práctica es de 2 horas.

### Material proporcionado
No se proporciona material extra para esta práctica

### Ampliación
¿Te aburres? ¿Te ha sabido a poco esta práctica?  

Puedes probar:
- Prueba a hacer esta misma práctica asíncrona y recursiva
- Añade comprobaciones sobre enlaces (blandos o duros), validación de parámetros de entrada y niveles muy altos de anidación (>2500)
