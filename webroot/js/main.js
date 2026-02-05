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
const urlPalabras = 'https://random-word-api.herokuapp.com/word?number=42&lang=es&length=10';
const listaPalabras = document.getElementById('palabras');
 
 fetch(urlPalabras)
        //.then(response =>console.log(response));
        .then(response => response.json())
        //  .then(datos=> console.log(datos));
        .then((data) => {
            data.results.forEach(palabra => {
            //div usuario. Contenedor de los demás divs
            const pPalabra = document.createElement("p");
            pPalabra.textContent = palabra;
            // divUsuario.classList.add("usuario");
            // //div para el nombre
            // const divNombre = document.createElement("div");
            // divNombre.textContent="Nombre: "+usuario.name.first + " "+usuario.name.last;
            // divNombre.classList.add("nombre");
            // //div para la foto
            // const divFoto = document.createElement("div");
            // divFoto.classList.add("fotoUsuario");
            // const img = document.createElement("img");
            // img.src=usuario.picture.large;
            // divFoto.append(img);
            // //div para el pais
            // const divPais = document.createElement("div");
            // divPais.textContent="Pais: "+usuario.location.country;
            // //div para el email
            // const divEmail = document.createElement("div");
            // divEmail.textContent="Email: "+usuario.email;
            // //se crean los divs del usuario
            // divUsuario.append(divNombre, divFoto, divPais, divEmail);
            // //se crea el contenedor de usuarios
            listaPalabras.append(pPalabra);
    });
    console.log(listaPalabras);
}).catch(error => console.error(error));


// Selección de dificultad de la partida.
let btnFacil = document.getElementById("btnFacil");
let btnMedio = document.getElementById("btnMedio");
let btnDificil= document.getElementById("btnDificil");


btnFacil.addEventListener("click", (e)=>{
    vPalabras = vFacil;
    comenzarPartida(vPalabras);
    nivel = "facil";
});


btnMedio.addEventListener("click", (e)=>{
     vPalabras = vMedio;
    comenzarPartida(vPalabras);
    nivel = "medio";
});

btnDificil.addEventListener("click", (e)=>{
    vPalabras = vDificil;
    comenzarPartida(vPalabras);
    nivel = "dificil";
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