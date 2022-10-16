//funciona por casos
var numero = 1;

switch (numero){
    case 1:
        console.log ("Soy uno!");
        break;
    case 10:
        console.log("soy un 10");
        break;
    case 100:
        console.log("sou un 100!")
        break
    default: 
        console.log("No soy nada");
}


//ejercicio piedra papel o tijera
<var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var player = "piedra";
var cpu = "tijera";

switch (player != null && cpu != null) {
    case (player === cpu):
        console.log("Empate");
        break;
    case (player === piedra && cpu === tijera):        
        console.log("Player Wins!");
        break;
    case (player === papel && cpu === piedra):        
        console.log("Player Wins!");
        break;
    case (player === tijera && cpu === papel):        
        console.log("Player Wins!");
        break;       
    default:
        console.log("Cpu Wins! </3");         
}
>