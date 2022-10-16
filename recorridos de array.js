var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

//si algo es verdadero o false, filter genera un nuevo array
//El mentodo filter() crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplen con la condición definida
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


// map me ayuda a mapear, crea un nuevo array
//crea un nuevo array con los resultados de la llamada a la función indicada aplicados a acada uno de sus elementos
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});


//Find es un true o false 
//retorna el primer elemento de un array que cumple con una condición definida en un nuevo array
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo
//me sale la información del articulo


//for each ejecuta la funcion indicada una vez por cada elemento del array
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
 

//Metodo some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
articulosBaratos
//regresa un true

