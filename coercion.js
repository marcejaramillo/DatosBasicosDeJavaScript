//coerción implicita
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false

//ejemplo 
var a = 4 + "7"; //"47"
typeof a //String

var b = 4 * "7" //28
typeof b //Regresa un numero



//La coerción explícita es la transformación de tipos de datos que controlamos el resultado. 
//Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(),
// para convertir a tipo número, string y lógico, respectivamente.
Number("47") // 'number'
String(51) // 'string'
Boolean(1) // 'boolean'

//ejemplo
var a = 20;
var b = a + " ";
console.log(b);
//resultado 20
typeof b //resultado "string"

var c = String(a);
typeof c ; //String

var d = Number(c);
typeof d //resultado "number"

