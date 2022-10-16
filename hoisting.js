//cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de codigo
//ejemplo
var miNombre; //declaramos una variable
miNombre = "Diego" //Inicializar una variable

//otra forma
var nombre = "Diego"; //se declara e inicia ahí mismo



//hoisiting en las variables

//ejemplo de Hoisting
console.log(miNombre);
var miNombre = "Diego"
//si se genera esto en el navegador sale un undefined
//undefined significa que en este proceso ve que hay algo 
//pero no la ve declarada porque está antes que la variable

var miNombre = undefined;
console.log(miNombre);
//vuelve a salir undefined 


console.log // Es una función que nos da el navegador y nos ayuda a imprimir los resultados
//ayuda a que podamos ver en la consola ciertas cosas (variables, resultados de algunas funciones)


//ejemplo 
var miNombre = undefined;
console.log(miNombre);
miNombre = "Diego";
//resultado sería "Diego"


//ejemplo 2
var miNombre = undefined
console.log(miNombre + "Soy ese hoisting");
miNombre = "Diego";
//resultado undefined Soy ese hoisting


//Hoisting en funciones

hey();
function hey(){
    console.log("Hola " + miNombre);
}
var miNombre = "Diego"
//Respondería Hola Undefined
