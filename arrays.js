var frutas = ["manzanas", "plátano", "cerezas", "fresa"];
console.log(frutas);

console.log(frutas.length);
//para saber cuántos elementos tiene el array

console.log(frutas[0]);
//ubicación


var masFrutas = frutas.push("uvas");
//añade elementos al final del array

var ultimo = frutas.pop()
//borrar el ultimo elemento del array frutas

var nuevaLongitud = frutas.unshift("Peras")
//agrega el producto al principio

var borrarFruta = frutas.shift("Peras");
//se elimina la primera 

var posicion = frutas.indexOf("cerezas");
posicion
//para saber la posición de un elemento en el array


