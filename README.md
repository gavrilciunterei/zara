# Prueba front Zara 

## - Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar
```
npm install
```
3. Ir a la página y pedir acceso para que funcione en localhost
```
https://cors-anywhere.herokuapp.com/
```
4. Ejecutar comando
```
npm run start
```

## - Stack usado

* React
* Redux RTK Query
* React Router Dom

## Explicación

He decidido usar RTK Query para almacenar los datos, ya que tiene una opcion que los guarda en la caché durante el tiempo definido `(refetchOnMountOrArgChange)`. No se si en el enunciado se refiere a guardarols así en local storage. 

El link que salía en los recursos para obtener los episodios no traía la información pedida así que busqué uno que trae 100 episodios, imagino que habrá opciones mejores.

La parte de modo development no entendí a que se refiere con los assets asi que no sabía que hay que hacer en esa parte. Por lo demás creo que está todo y espero haber comprendido lo que se pedía. Todo se puede mejorar y habría que refactorizar mucho más.