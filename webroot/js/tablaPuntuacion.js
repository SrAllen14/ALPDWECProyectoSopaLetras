import {Puntuacion} from './puntuacion.js';

export function guardarTiempoJuego(nombre, nivel, tiempoJuego) {
    let jugador = new Puntuacion(nivel, null, nombre, tiempoJuego);
    let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
    tiempos.push(jugador);
    tiempos.sort((a,b) => a._puntaje - b._puntaje);
    tiempos.forEach((element, index)=>{
        element._posicion = index+1;
    });
    //se gurada en localStorage. https://www.w3schools.com/js/js_json.asp
    localStorage.setItem("mejoresTiempos", JSON.stringify(tiempos));
}

export function mostrarPosicion(nivel) {

    let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
     
    var top3 = [];
    for(let i = 0; i < tiempos.length; i++){
        if(tiempos[i]._nivel === nivel){
            top3.push(tiempos[i]);
        }
    }
    top3 = top3.slice(0, 3);
    console.log(" MostrarPosicion: tabla con los datos:", top3);
    // Si hay menos de 3 resultados, se completa con vacíos
    while (top3.length < 3) {
        top3.push({ nombre: "-", tiempoJuego: "-" });
    }
    // Crear cabecera de la tabla
    const tabla = document.createElement("table");
    const filaCabecera = document.createElement("tr");
    const thPosicion = document.createElement("th");
    thPosicion.textContent = "Posición";

    const thJugador = document.createElement("th");
    thJugador.textContent = "Jugador";

    const thTiempo = document.createElement("th");
    thTiempo.textContent = "Tiempo";

    filaCabecera.appendChild(thPosicion);
    filaCabecera.appendChild(thJugador);
    filaCabecera.appendChild(thTiempo);

    tabla.appendChild(filaCabecera);
    
    
    for (let i = 0; i < top3.length; i++) {

        const fila = document.createElement("tr");

        const celdaPos = document.createElement("td");
        celdaPos.textContent = i + 1;

        const celdaJug = document.createElement("td");
        celdaJug.textContent = top3[i]._nombre;

        const celdaTiempo = document.createElement("td");
        celdaTiempo.textContent = top3[i]._puntaje;

        fila.appendChild(celdaPos);
        fila.appendChild(celdaJug);
        fila.appendChild(celdaTiempo);

        tabla.appendChild(fila);
    }

    const contenedor = document.getElementById("puntuacion");
    //hay que limpiar el contendor porque sino sale varias veces la tabla
    contenedor.innerHTML = ""; 
    contenedor.appendChild(tabla);
    //console.log(" Contenedor mostrarPosicion:", contenedor);
}
