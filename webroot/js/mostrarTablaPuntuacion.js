export function mostrarPuntuacion(){
    let ejercicio = document.getElementById("puntuacion");
    let tabla = document.createElement("table");
    for(let i=0; i <= 2; i++){
        let fila = document.createElement("tr");
        for(let j = 0; j <= 2; j++){
            let columna = document.createElement("td");
            columna.innerHTML = `-`;
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    ejercicio.appendChild(tabla);
}