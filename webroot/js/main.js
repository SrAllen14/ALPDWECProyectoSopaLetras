let vPalabras = ["lunes","martes","miercoles","jueves","viernes","sabado", 
                "domingo","enero","febrero","marzo","abril","mayo","junio",
                "julio","agosto","septiembre",
                "octubre","noviembre","diciembre"];
vPalabras.sort((a, b)=>b.length-a.length);

let dimension = contarPalabras(vPalabras);
let sopaDeLetras = crearTablero(dimension);

sopaDeLetras = situarPalabras(vPalabras, sopaDeLetras);
sopaDeLetras = rellenarTablero(sopaDeLetras);

//mostrarPagina(sopaDeLetras);
//mostrarPalabras(vPalabras);
mostrarEnTabla(sopaDeLetras);
mostrarPalabras(vPalabras);
mostrarPuntuacion();


// Creación de tablero y cálculo de dimensión.

/* 
 * Función que calcula la dimensión que va a tener nuestra sopa de letras.
 * @param {Array} palabras
 * @returns {int} dim
 */

function contarPalabras(palabras){
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
function crearTablero(dimension){
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

function situarPalabras(vPalabras, mTablero){
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
                    default: console.log(direccion+": dirección incorrecta");
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
function escribirPalabras(fila, columna, direccion, palabra, mTablero){   
    switch (direccion){
        case "ar":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                fila--;                       
            }
            break;
        case "dsi":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                fila--;
                columna++;                        
            }
            break;
        case "izd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                columna++;                      
            }
            break;
        case "dii":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                fila++;
                columna++;
            }
            break;
        case "ab":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                fila++;                       
            }
            break;
        case "did":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                fila++; 
                columna--;
            }
            break;
        case "drc":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
                columna--;                       
            }
            break;
        case "dsd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= palabra[c];
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
function rellenarTablero(mTablero){
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
                   mTablero[i][j] = consonantes[Math.floor(Math.random(0, 1)*consonantes.length)];
               } else{
                   mTablero[i][j] = vocales[Math.floor(Math.random(0, 1)*vocales.length)];
               }
           }
       }
   }
   return mTablero;
}

// Mostrar tablero completo.
function mostrarPalabras(vPalabrasClave){
    let palabras = document.getElementById("palabras");
    let vector = document.createElement("span");
    for(let i = 0; i < vPalabrasClave.length; i++){
        let palabra = document.createElement("p");
        palabra.innerHTML = `${vPalabrasClave[i]}`;
        vector.appendChild(palabra);
    }
    palabras.appendChild(vector);
}

function mostrarEnTabla(tablero){
    let ejercicio = document.getElementById("container");
    let tabla = document.createElement("table");
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

function comprobarSeleccion(primeraCelda, ultimaCelda, tabla){
    let palabraCompleta = null;
    const filaP = primeraCelda.parentElement.rowIndex;
    const columnaP = primeraCelda.cellIndex;
    
    const filaU = ultimaCelda.parentElement.rowIndex;
    const columnaU = ultimaCelda.cellIndex;
    
    const restaF = filaP-filaU;
    const restaC = columnaP-columnaU;
    if(!(filaP === filaU || columnaP === columnaU || Math.abs(restaF) === Math.abs(restaC))){
        console.log("Elección invalida");
    } else{
        console.log("Elección valida");
        let fil = filaP;
        let col = columnaP;
        let celdaActual = tabla.rows[fil].cells[col];
        let palabra = [];
        celdaActual.classList.add("seleccion");
        console.log(celdaActual.textContent);
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
            console.log(celdaActual.textContent);
            palabra.push(celdaActual.textContent);
            
        }
        palabraCompleta = palabra.join("");
        console.log(palabraCompleta);
        
        let vPalabrasOcultas = ["volante","barato","grande","idiota","pereza","zapato","abaco","coche","delta","folio","helio",
                                "sitio","jota","kilo","leon","rio","lunes","martes","miercoles","jueves","viernes","sabado", 
                                "domingo","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre",
                                "octubre","noviembre","diciembre"];
        if(vPalabrasOcultas.includes(palabraCompleta)){
            fil = filaP;
            col = columnaP;
            let celdaActual = tabla.rows[fil].cells[col];
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
                celdaActual.classList.add("correcto");
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
// Mostrar la tabla de puntuación
function mostrarPuntuacion(){
    let ejercicio = document.getElementById("puntuacion");
    let tabla = document.createElement("table");
    tabla.classList = "punt";
    for(let i=0; i <= 3; i++){
        let fila = document.createElement("tr");
        for(let j = 0; j <= 3; j++){
            let columna = document.createElement("td");
            columna.innerHTML = `-`;
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    ejercicio.appendChild(tabla);
}

// Mostrar la hora real 
function horaReal(){
    let fecha = new Date();
    let hora = fecha.getHours().toString();
    let min = fecha.getMinutes().toString();
    let sec = fecha.getSeconds().toString();
    
    hora = hora.padStart(2,'0');
    min = min.padStart(2,'0');
    sec = sec.padStart(2,'0');
    
    let cuadro = document.getElementById("tiempo");

    let formato = `${hora}`+`:`+`${min}`+`:`+`${sec}`;
    cuadro.textContent = formato;
}
var reloj = setInterval(horaReal,1000);