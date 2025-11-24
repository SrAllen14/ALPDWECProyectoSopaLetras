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
export function escribirPalabras(fila, columna, direccion, palabra, mTablero){   
    switch (direccion){
        case "ar":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila--;                       
            }
            break;
        case "dsi":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila--;
                columna++;                        
            }
            break;
        case "izd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                columna++;                      
            }
            break;
        case "dii":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila++;
                columna++;
            }
            break;
        case "ab":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila++;                       
            }
            break;
        case "did":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila++; 
                columna--;
            }
            break;
        case "drc":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                columna--;                       
            }
            break;
        case "dsd":
            for(let c = 0; c < palabra.length; c++){
                mTablero[fila][columna]= "<span class='celda'>"+palabra[c]+"</span>";
                fila--;
                columna--;
            }
            break;
    }
    return mTablero;
}