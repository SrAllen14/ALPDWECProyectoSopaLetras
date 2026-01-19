import {crearSopa} from './tablaSopaDeLetras.js';
import {iniciarCronometro} from './contadorJuego.js';
import {iniciarReloj} from './contadorHora.js';
import {mostrarPosicion} from './tablaPuntuacion.js';

iniciarReloj();

const vFacil = ["PRIMAVERA", "VERANO", "OTOÑO", "INVIERNO"];
const vMedio = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];
const vDificil = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

var vPalabras;




// Selección de dificultad de la partida.
let btnFacil = document.getElementById("btnFacil");
let btnMedio = document.getElementById("btnMedio");
let btnDificil= document.getElementById("btnDificil");


btnFacil.addEventListener("click", (e)=>{
    vPalabras = vFacil;
    comenzarPartida(vPalabras);
});


btnMedio.addEventListener("click", (e)=>{
     vPalabras = vMedio;
    comenzarPartida(vPalabras);
});

btnDificil.addEventListener("click", (e)=>{
    vPalabras = vDificil;
    comenzarPartida(vPalabras);
});

let botonReiniciar = document.getElementById("btnReiniciar");
let divCont1 = document.getElementById("cont1");
let divCont2 = document.getElementById("cont2");
let divCont3 = document.getElementById("cont3");


// Botón que reinicia la partida recargando la página.
botonReiniciar.addEventListener("click", ()=>{
    location.reload();
});

// Función que inicia la partida.
function comenzarPartida(palabras){
    btnFacil.classList.add("oculto");
    btnMedio.classList.add("oculto");
    btnDificil.classList.add("oculto");
    botonReiniciar.classList.remove("oculto");
    divCont1.classList.remove("oculto");
    divCont2.classList.remove("oculto");
    divCont3.classList.remove("oculto");
    vPalabras = palabras;
    crearSopa(vPalabras);
    iniciarCronometro();
    mostrarPosicion();
}