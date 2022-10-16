//manera rapida para que una tarea se pueda repetir
var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


//otra forma
var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiantes}`);
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//WHILE
var estudiantes = ["Maria", "Sergio", "Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}


//console.log
var estudiantes = ["Maria", "Sergio", "Rosa","Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}
