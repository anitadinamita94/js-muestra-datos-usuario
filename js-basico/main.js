'use strit'


//alertas

alert("Cargando datos de usuario");

//variables se pueden definir como var, let

var nombre1 = "Ana";
var nombre2 = "Josemy"

let apellido1 = "Pérez";
let apellido2 = "García";
//constantes

const edad1 = 30;
const edad2 = 25;
const altura1 = 159;
const altura2 = 175;

//concatenacion

let concatenacion1 = nombre1 + "" + apellido1;
let concatenacion2 = nombre2 + "" + apellido2;

//selector de elementos id del html

let datos1 = document.querySelector('#datos-mujer');
datos1.innerHTML = `
    <h2>Datos de usuaria</h2>
    <h3>Hola, mi nombre es ${concatenacion1}</h3>
    <h3>Tengo ${edad1} y mido ${altura1}</h3>
`;

let datos2 = document.querySelector('#datos-hombre');
datos2.innerHTML = `
    <h2>Datos de usuario</h2>
    <h3>Hola, mi nombre es ${concatenacion2}</h3>
    <h3>Tengo ${edad2} y mido ${altura2}</h3>
`;

//condiciones
if(altura2 >= 170){
    datos2.innerHTML += "<h4> Eres un chico alto</h4>";
}else{
    datos2.innerHTML += "<h4>Eres un chico bajito</h4>"
}

if(altura1 <= 170){
    datos1.innerHTML += "<h4> Eres una chica bajita</h4>";
  
}else{
    datos1.innerHTML += "<h4>Eres una chica alta</h4>";
}




//mostrar funcion por consola

console.log('js cargado');