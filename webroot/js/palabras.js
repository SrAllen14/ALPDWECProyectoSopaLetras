/*
* Función que almacena en un vector las palabras a situar en la sopa de letras.
* @param 
* @returns vector con las palabras introducidas.
*/
export function palabras(){
   let palabra;
   let palabras = [];
   alert("Se deben introducir palabras. En caso de cancelar la operación se acabará el proceso...");
   do{
       palabra = prompt("Introduzca una palabra.");
       if(palabra !== null){
           palabras.push(palabra);
       }
   }while(palabra !== null);

   palabras.sort((a, b)=>b.length-a.length);
   return palabras;
}