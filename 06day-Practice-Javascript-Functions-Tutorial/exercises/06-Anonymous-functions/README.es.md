# `06` Funciones Anónima

Una función anónima es una función sin nombre, por ejemplo:

```js
function(param1, param2) {
    return param1 * param2;
}
```
¿Ves cómo le falta un nombre? Probablemente te estarás preguntando: ¿Cómo llamo a esta función si no tiene un nombre?

Las funciones anónimas deben almacenarse dentro de una variable para poder usarlas. Por ejemplo:

```js
var myFirstVar = function(param1, param2)
{
    return param1 * param2;
}
```
Entonces, puedo llamar a mi función así:

```js
var result = myFirstVar(2,3);
```
# 📝 Instrucciones:

- Imprime en la consola, el resultado de usar la función `multy` para calcular la multiplicación entre 324234 y 47