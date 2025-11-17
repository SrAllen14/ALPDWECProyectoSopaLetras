export function mostrarPalabras(vPalabrasClave){
    let vector = document.createElement("span");
    for(let i = 0; i < vPalabrasClave.length; i++){
        let palabra = document.createElement("p");
        palabra.innerHTML = `${vPalabrasClave[i]}`;
        vector.appendChild(palabra);
    }
    document.body.appendChild(vector);
}

export function mostrarEnTabla(tablero){
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
}