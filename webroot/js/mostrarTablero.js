export function mostrarPalabras(vPalabrasClave){
    console.log(vPalabrasClave);
    document.write(vPalabrasClave);
}

export function mostrarEnTabla(tablero){
    document.write("<table>");
    for(let i=0; i < tablero.length; i++){
        document.write("<tr>");
        for(let j = 0; j < tablero.length; j++){
            document.write(`<td>${tablero[i][j]}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}