import {crearSopa} from './tablaSopaDeLetras.js';
import {iniciarCronometro} from './contadorJuego.js';
import {iniciarReloj} from './contadorHora.js';
import {mostrarPosicion} from './tablaPuntuacion.js';

iniciarReloj();

const vFacil = ["PRIMAVERA", "VERANO", "OTOÑO", "INVIERNO"];
const vMedio = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];
const vDificil = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

var vPalabras;
var nivel;


// Selección de dificultad de la partida.
let btnFacil = document.getElementById("btnFacil");
let btnMedio = document.getElementById("btnMedio");
let btnDificil= document.getElementById("btnDificil");

btnFacil.addEventListener("click", async()=>{
    nivel = "facil";
    const vPalabras = await obtenerPalabrasPorNivel(nivel);
    comenzarPartida(vPalabras, nivel);
    
});


btnMedio.addEventListener("click", async()=>{
    nivel = "medio";
    const vPalabras = await obtenerPalabrasPorNivel(nivel);
    comenzarPartida(vPalabras, nivel);
    
});

btnDificil.addEventListener("click", async()=>{
    nivel = "dificil";
    const vPalabras = await obtenerPalabrasPorNivel(nivel);
    comenzarPartida(vPalabras, nivel);
    
});

async function obtenerPalabrasPorNivel(nivel) {
  const cantidades = {
    facil: 4,
    medio: 7,
    dificil: 12
  };

  const cantidad = cantidades[nivel];

  // Arrays de respaldo
  const respaldo = {
    facil: vFacil,
    medio: vMedio,
    dificil: vDificil
  };

  const url = `https://random-word-api.herokuapp.com/word?number=${cantidad}&lang=es`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error en la API");

    const data = await response.json();

    // La API devuelve un array directamente (NO data.results)
    let palabras = data
      .map(p => p.toUpperCase())
      .filter(p => p.length >= 3); // opcional

    // Si por lo que sea no devuelve suficientes
    if (palabras.length < cantidad) throw new Error("No hay suficientes palabras");

    return palabras.slice(0, cantidad);

  } catch (error) {
    console.warn("API falló, usando respaldo:", error);

    // Devuelve el respaldo, recortado al número correcto
    return respaldo[nivel].slice(0, cantidad);
  }
}


let botonReiniciar = document.getElementById("btnReiniciar");
let divCont1 = document.getElementById("cont1");
let divCont2 = document.getElementById("cont2");
let divCont3 = document.getElementById("cont3");


// Botón que reinicia la partida recargando la página.
botonReiniciar.addEventListener("click", ()=>{
    location.reload();
});

// Función que inicia la partida.
function comenzarPartida(palabras, nivel){
    btnFacil.classList.add("oculto");
    btnMedio.classList.add("oculto");
    btnDificil.classList.add("oculto");
    botonReiniciar.classList.remove("oculto");
    divCont1.classList.remove("oculto");
    divCont2.classList.remove("oculto");
    divCont3.classList.remove("oculto");
    vPalabras = palabras;
    crearSopa(vPalabras, nivel);
    iniciarCronometro();
    mostrarPosicion(nivel);
}