export function mostrarPuntuacion(){
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