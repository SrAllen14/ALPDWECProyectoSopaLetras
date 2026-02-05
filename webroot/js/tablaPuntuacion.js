import {Puntuacion} from './puntuacion.js';

export function guardarTiempoJuego(nombre, nivel,tiempoJuego) {
    let jugador = new Puntuacion(nivel, null, nombre, tiempoJuego);
    let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
    tiempos.push(jugador);
    tiempos.sort((a,b) => a._puntaje - b._puntaje);
    tiempos.forEach((element, index)=>{
        element._posicion = index+1;
    });
    //slice es para guardar solo los 3 primeros
    tiempos = tiempos.slice(0, 3); 
    //se gurada en localStorage. https://www.w3schools.com/js/js_json.asp
    localStorage.setItem("mejoresTiempos", JSON.stringify(tiempos));
    
    console.log(tiempos, tiempos.length);
    console.log(jugador);
}

export function mostrarPosicion() {

   let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
     console.log(" MostrarPosicion: tabla con los datos:", tiempos);
    // Si hay menos de 3 resultados, se completa con vacíos
    while (tiempos.length < 3) {
        tiempos.push({ nombre: "-", tiempoJuego: "-" });
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

    // Crear filas de datos
    const top3 = tiempos.slice(0, 3);//solo los tres mejores timpos. Solo 3 filas

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
