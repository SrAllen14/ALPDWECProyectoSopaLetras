/*
* Función que nos indica el número total de letras para poder decidir las dimensiones del array.
* @param vector que contiene las palabras.
* @returns dimensión del tablero de la sopa de letras.
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