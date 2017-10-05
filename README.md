# Cifrado Cesar
###### Proceso no me resulto todas las etapas
###### Crear dos funciones que sea capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.

## Función cipher 
#### variable es vacia "";
### Código JavaScript
´´´ for(var i = 0; i<frase.length;i++) ´´´
##### variable i es igual a 0; i debe ser menor a la longitud de la frase; +1
###### variable a: (utilizo método charCodeAt(); devuelve un n° indicadando el valor Unicode -65+33)%26+65 utilizo la fórmula para saber las posiciones de mi frase.
###### variable b: utilizo el método string.fromCharCode(); ya con las posiciones listas y su valor Unicode, devuelve una cadena con los valores Unicode especifico.
result+=b se le agrega el resultado en el string vacío.


## Función decipher
#### Variable es vacía, ya que al ejecutar el for se le agrega la frase.
´´´ for (var i = 0; i < frase.length; i++) ´´´
##### variable 