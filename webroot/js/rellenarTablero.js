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
                   mTablero[i][j] = "<span class='celda'>"+consonantes[Math.floor(Math.random(0, 1)*consonantes.length)]+"</span>";
               } else{
                   mTablero[i][j] = "<span class='celda'>"+vocales[Math.floor(Math.random(0, 1)*vocales.length)]+"</span>";
               }
           }
       }
   }
   return mTablero;
}