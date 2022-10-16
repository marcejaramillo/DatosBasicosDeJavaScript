//Hay dos tipos de funciones
//declarativas function statement
function miFuncion() { //inicializa un valor o una funcion
    return 3; //genera esto
}

miFuncion();


//Expresion o funciones anonimas
var miFuncion = function(){
    return a + b;
}

miFuncion(); //de esta forma poniendole los parentesis la variable se trata como una funcion


//Funciones más complejas
function saludarEstudiantes(estudiante){
    console.log(estudiante)//el console log sirve para imprimir algo en la pantalla
}

saludarEstudiantes("Diego"); //la respuesta a esto sería "Diego"


//Templete String o plantilla de cadena de texto
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Diego") //Saldría en consola "Hola Diego"


//ejemplo
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
sumar (1,2); //la respuesta sería 3


//ejemplo 2
function sumar(a,b){
    return a + b;
}
sumar (1,2); //la respuesta igualmente sería 3


//scope global y local
var miNombre = "Diego";
function nombre(){
    var miApellido = "De granda";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Diego de Granda

miNombre //"Diego"

miApellido // miApellido is not defined



//Primeramente, al invocarse la función saludo imprimirá "Andres" por consola, pero inmediatamente después, existirá un error de referencia.
function saludo() {
    var nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
1 = “1”;

