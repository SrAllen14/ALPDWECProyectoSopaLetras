import {pararCronometro, tiempoTotal} from './contadorJuego.js';
import {mostrarPosicion, guardarTiempoJuego} from './tablaPuntuacion.js';
// Creación de tablero y cálculo de dimensión.
let palabrasJuego = [];
let nivelJuego;

export function crearSopa(vPalabras, nivel) {
    nivelJuego = nivel;
    palabrasJuego = [...vPalabras];
    vPalabras.sort((a, b) => b.length - a.length);
    const dimension = contarPalabras(vPalabras);
    let tablero = crearTablero(dimension);
    tablero = situarPalabras(vPalabras, tablero);
    tablero = rellenarTablero(tablero);
    mostrarEnTabla(tablero, vPalabras);
    mostrarPalabras(vPalabras);
}

/* 
 * Función que calcula la dimensión que va a tener nuestra sopa de letras.
 * @param {Array} palabras
 * @returns {int} dim
 */

export function contarPalabras(palabras){
   let dim = palabras[0].length;
   let acum = 0;

   for(let element of palabras){
       acum += element.length;
   }
   if(Math.floor(Math.sqrt(acum*2))+1>dim){
       dim = Math.floor(Math.sqrt(acum*2))+1;
   }
   return dim;
}

/*
* Función para dimensionar el tablero teniendo en cuenta la palabra más larga y la cantidad de letras.
* @param vector que contiene todas las palabras
* @returns matriz con las dimensiones correspondientes
*/ 
export function crearTablero(dimension){
   let tablero = [[]];

   for (let i = 0; i < dimension; i++){
       tablero [i] = [];
       for (let j = 0; j < dimension; j++){
           tablero [i][j]= null;
       }
   }
   return tablero;
}

// Situar las palabras ocultas en el tablero y escribirlas
/*
* Función para verificar la posición de las palabras en el tablero vacio. Usará la función escribirPalabras(fila, columnas, direcciones) 
* para escribir las palabras después de las comprobaciones.
* 
* @param vector que contiene todas las palabras y tablero vacio.
* @returns matriz del tablero con las palabras situadas y espacios en blanco en los huecos vacios.
*/

export function situarPalabras(vPalabras, mTablero){
    let vPalabrasClave = [];
    let acumDir;
    let acumPos;
    let palabra;
    let direcciones;
    let dCorrecta;
    let i;
    let j;
    let fila;
    let columna;
    for(let element of vPalabras){
        acumPos = 0;
        palabra = element;
        do{
            dCorrecta = false;
            acumDir = 0;
            i = Math.floor(Math.random(0, 1)*mTablero.length);
            j = Math.floor(Math.random(0, 1)*mTablero[0].length);
            direcciones = ["ar", "dsi", "izd", "dii", "ab", "did", "drc", "dsd"];
            do{
                let direccion = direcciones[Math.floor(Math.random(0, 1) * direcciones.length)];
                fila = i;
                columna = j;
                switch(direccion){
                    case "ar": if((i-palabra.length+1) >= 0){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila--;                       
                                }
                            }
                        }
                        break;
                    case "dsi": if((i-palabra.length+1) >= 0 && j+palabra.length-1 < mTablero[0].length){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila--;
                                    columna++;                            
                                }
                            }
                        }
                        break;
                    case "izd": if((j+palabra.length-1) < mTablero[0].length){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    columna++;                            
                                }
                            }
                        }
                        break;
                    case "dii": if((i+palabra.length-1) < mTablero.length && j+palabra.length-1 < mTablero[0].length){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila++;
                                    columna++;                            
                                }
                            }
                        }
                        break;
                    case "ab": if((i+palabra.length-1) < mTablero.length){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila++;                            
                                }
                            }
                        }
                        break;
                    case "did": if((i+palabra.length-1) < mTablero.length && j-palabra.length+1 >= 0){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila++;
                                    columna--;                            
                                }
                            }
                        }
                        break;
                    case "drc": if((j-palabra.length+1) > 0){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    columna--;                            
                                }
                            }
                        }
                        break;
                    case "dsd": if((i-palabra.length+1) >= 0 && j-palabra.length+1 >= 0){
                            dCorrecta = true;
                            if(dCorrecta){
                                for(let c = 0; c < palabra.length; c++){
                                    if((mTablero[fila][columna] !== null) && (mTablero[fila][columna] !== palabra[c])){
                                        dCorrecta = false;
                                    }
                                    fila--;
                                    columna--;                            
                                }
                            }
                        }
                        break;
                    default: 
                        break;
                    }

                if(!dCorrecta){
                    direcciones.splice(direcciones.indexOf(direccion),1);
                } else{
                    mTablero = escribirPalabras(i, j, direccion, palabra, mTablero);
                    vPalabrasClave.push(palabra);
                }
                acumDir++;
            }while(!dCorrecta && acumDir <= 8);
            acumPos++;
        }while(!dCorrecta && acumPos <= mTablero.length*mTablero[0].length);
    }
    return mTablero;
}

/*
 * Función que escribe la palabra según la posición de la primera letras y dirección definida.
 * 
 * @param {int} fila
 * @param {int} columna
 * @param {String} direccion
 * @param (String) palabra
 * @param (table) mTablero
 * @returns (table) mTablero
 */
export function escribirPalabras(fila, columna, direccion, palabra, mTablero){   
    switch (direccion){
        case "ar":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila--;                       
            }
            break;
        case "dsi":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila--;
                columna++;                        
            }
            break;
        case "izd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                columna++;                      
            }
            break;
        case "dii":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila++;
                columna++;
            }
            break;
        case "ab":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila++;                       
            }
            break;
        case "did":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila++; 
                columna--;
            }
            break;
        case "drc":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                columna--;                       
            }
            break;
        case "dsd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c].toUpperCase();
                fila--;
                columna--;
            }
            break;
    }
    return mTablero;
}

// Rellenar el resto del tablero con letras aleatorias.
/*
* Funcón para rellenar los huecos vacios del tablero.
* @param matriz del tablero con las palabras ya colocadas.
* @returns matriz del tablero completado.
*/
export function rellenarTablero(mTablero){
   let numero;
   let consonantes = ["b", "c", "d", "f", "g", "h",
                     "j", "k", "l", "m", "n", "ñ", 
                     "p", "q", "r", "s", "t", "v", "w",
                     "x", "y", "z"
                    ];
   let vocales = ["a", "e", "i", "o", "u"];
   for (let i = 0; i < mTablero.length; i++){
       for (let j = 0; j < mTablero.length; j++){
           if(mTablero[i][j] === null){
               numero = Math.random();
               if(numero < 0.7){
                   mTablero[i][j] = consonantes[Math.floor(Math.random(0, 1)*consonantes.length)].toUpperCase();
               } else{
                   mTablero[i][j] = vocales[Math.floor(Math.random(0, 1)*vocales.length)].toUpperCase();
               }
           }
       }
   }
   return mTablero;
}

// Mostrar tablero completo.
export function mostrarPalabras(vPalabrasClave){
    let palabras = document.getElementById("palabras");
    for(let i = 0; i < vPalabrasClave.length; i++){
        let palabra = document.createElement("div");
        palabra.classList.add("palabra");
        palabra.innerHTML = `${vPalabrasClave[i]}`;
        palabras.appendChild(palabra);
    }
}

var tabla = document.createElement("table");
function mostrarEnTabla(tablero){
    let ejercicio = document.getElementById("container"); 
    tabla.classList = "sopa";
    for(let i=0; i < tablero.length; i++){
        let fila = document.createElement("tr");
        for(let j = 0; j < tablero.length; j++){
            let columna = document.createElement("td");
            columna.innerHTML = `${tablero[i][j]}`;
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    ejercicio.appendChild(tabla);
    
    tabla.addEventListener("click", seleccionarCelda);
}

let primeraCelda = null;
function seleccionarCelda(e){
    if(primeraCelda === null){
        primeraCelda = e.target;
        primeraCelda.classList.add("seleccion");
    } else{
        const ultimaCelda = e.target;
        comprobarSeleccion(primeraCelda, ultimaCelda, e.currentTarget);
        primeraCelda = null; 
    }
}


var cont = 0;
function comprobarSeleccion(primeraCelda, ultimaCelda, tabla){
    let palabraCompleta = null;
    const filaP = primeraCelda.parentElement.rowIndex;
    const columnaP = primeraCelda.cellIndex;
    
    const filaU = ultimaCelda.parentElement.rowIndex;
    const columnaU = ultimaCelda.cellIndex;
    
    const restaF = filaP-filaU;
    const restaC = columnaP-columnaU;
    if(!(filaP === filaU || columnaP === columnaU || Math.abs(restaF) === Math.abs(restaC))){
        alert("Selección incorrecta. Debe ser en diagonal, vertical u horizontal");
    } else{
        let fil = filaP;
        let col = columnaP;
        let celdaActual = tabla.rows[fil].cells[col];
        let palabra = [];
        celdaActual.classList.add("seleccion");
        palabra.push(celdaActual.textContent);
        while(fil !== filaU || col !== columnaU){
            if(restaF<0){
                fil++;
            } 
            if(restaF>0){
                fil--;
            }
            if(restaC<0){
                col++;
            } 
            if(restaC>0){
                col--;
            }
            let celdaActual = tabla.rows[fil].cells[col];
            celdaActual.classList.add("seleccion");
            palabra.push(celdaActual.textContent);
            
        }
        palabraCompleta = palabra.join("");
        
        if(palabrasJuego.includes(palabraCompleta)){
            fil = filaP;
            col = columnaP;
            let celdaActual = tabla.rows[fil].cells[col];
            celdaActual.classList.remove("seleccion");
            celdaActual.classList.add("correcto");
            while(fil !== filaU || col !== columnaU){
                if(restaF<0){
                    fil++;
                } 
                if(restaF>0){
                    fil--;
                }
                if(restaC<0){
                    col++;
                } 
                if(restaC>0){
                    col--;
                }
                celdaActual = tabla.rows[fil].cells[col];
                celdaActual.classList.remove("seleccion");
                celdaActual.classList.add("correcto");
            }
            let palabrasTachadas = document.getElementsByClassName("palabra");
            for(let i of palabrasTachadas){
                if(i.textContent === palabraCompleta){
                    i.classList.add("tachado");
                }
            }
            cont ++;
            if(palabrasJuego.length === cont){
                finDeJuego();
            }
            
        } else{
            setTimeout(() => {
                fil = filaP;
                col = columnaP;
                let celdaActual = tabla.rows[fil].cells[col];
                celdaActual.classList.remove("seleccion");
                while(fil !== filaU || col !== columnaU){
                    if(restaF<0){
                        fil++;
                    } 
                    if(restaF>0){
                        fil--;
                    }
                    if(restaC<0){
                        col++;
                    } 
                    if(restaC>0){
                        col--;
                    }
                    celdaActual = tabla.rows[fil].cells[col];
                    celdaActual.classList.remove("seleccion");
                }
            }, 1000);
        }
    }
}

function finDeJuego() {
  // Se deshabilita el evento de click.
  tabla.removeEventListener("click", seleccionarCelda);
  // Se para el cronometro
  pararCronometro();
  // Se pide el nombre del jugador
  const nombre = prompt("Has terminado el juego! Introduce tu nombre:");
  // Se guarda el tiempo en segundos
  const tiempoJuego = tiempoTotal();

  // Si no hay nombre(o se da a cancelar) o está vacío no se guarda el tiempo
  if (!nombre || nombre.trim() === "") {
    console.log("Juego terminado, nombre no introducido. No se guarda el tiempo.");
    mostrarPosicion(); // Si el usuario le da a cancelar o no introduce un nombre, no se guarda el tiempo.
    return;
  }

  console.log("Tiempo de juego en segundos: ", tiempoJuego);
  // Se guarda el tiempo y el nombre en localStorage
  guardarTiempoJuego(nombre,nivelJuego,tiempoJuego);
  console.log("Datos guardados en localStorage");
  console.log("LocalStorage actual:", localStorage.getItem("mejoresTiempos"));
  // se muestra la tabla de puntuacion
  mostrarPosicion(nivelJuego);
}