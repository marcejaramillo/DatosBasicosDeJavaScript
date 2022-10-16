//condicionales son reglas que aplicamos para saber si algo es verdadero o falso
//Estrictura de IF 
if(){

};

//ejemplo
if (true){
    console.log("Hola");
}
//Hola

//si dijera falso no imprime nada


//ejemplo
if (false){
    console.log("Hola");
} else {
    console.log("Soy falso")
}
//soy falso


//ELSE IF
if (false){
    console.log("Hola");
} else if () {
    console.log("Soy falso")
} else {

}


//EJEMPLO si el usuario es mayor de edad puede votar
 var edad = 18;

 if (edad === 18){
    console.log("Puedes votar, será tu primera votación");
 } else if (edad >18) {
    console.log("Puedes votar de nuevo");
 } else {
    console.log("Aun no puedes votar");
 }



//OPERADOR TERNARIO
//generar el IF y el ELSE en una sola linea
condition ? true : false;


//ejemplo
var numero = 1;
var resultado = numero === 1 ? "sí soy un uno" : "No, no soy uno";
console.log
//soy un uno

//ejemplo isMember
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00")

//ejemplo 
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"




//También puede realizar más de una operación por caso, separándolas con una coma:
var stop = false, age = 23;

age > 18 ? (
    alert("OK, puedes continuar."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
);





//También puede realizar más de una operación durante la asignación de un valor. 
//En este caso, el último valor separado por una coma del paréntesis será el valor asignado.
var age = 16;

var url = age > 18 ? (
    alert("OK, puedes continuar."),
    // alert devuelve "undefined", pero será ignorado porque
    // no es el último valor separado por comas del paréntesis
    "continue.html" // el valor a ser asignado si age > 18
) : (
    alert("Eres menor de edad!"),
    alert("Disculpa :-("),
    // etc. etc.
    "stop.html" // el valor a ser asignado si !(age > 18)
);

location.assign(url); // "stop.html"



//RETO PIEDRA PAPEL O TIJERA
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```

//EJEMPLO 2 
var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}