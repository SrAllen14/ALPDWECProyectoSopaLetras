export function mostrarPalabras(vPalabrasClave){
    let vector = document.createElement("span");
    for(let i = 0; i < vPalabrasClave.length; i++){
        let palabra = document.createElement("p");
        palabra.innerHTML = `${vPalabrasClave[i]}`;
        vector.appendChild(palabra);
    }
    document.body.appendChild(vector);
    return vPalabarasClave;
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
    
    tabla.addEventListener("click", seleccionarCelda);
}

let primeraCelda = null;
function seleccionarCelda(e){
    let palabraCompleta = null;
    if(primeraCelda === null){
        primeraCelda = e.target;
        primeraCelda.classList.add("seleccion");
    } else{
        const ultimaCelda = e.target;
        comprobarSeleccion(primeraCelda, ultimaCelda, e.currentTarget);
        primeraCelda = null; 
    }
    
   
}

function comprobarSeleccion(primeraCelda, ultimaCelda, tabla){
    const filaP = primeraCelda.parentElement.rowIndex;
    const columnaP = primeraCelda.cellIndex;
    
    const filaU = ultimaCelda.parentElement.rowIndex;
    const columnaU = ultimaCelda.cellIndex;
    
    const restaF = filaP-filaU;
    const restaC = columnaP-columnaU;
    if(!(filaP === filaU || columnaP === columnaU || Math.abs(restaF) === Math.abs(restaC))){
        console.log("Elección invalida");
    } else{
        console.log("Elección valida");
        let fil = filaP;
        let col = columnaP;
        let celdaActual = tabla.rows[fil].cells[col];
        let palabra = [];
        celdaActual.classList.add("seleccion");
        console.log(celdaActual.textContent);
        palabra.push(celdaActual.textContent);
        while(fil !== filaU || col !== columnaU){
            if(restaF<0){
                fil++;
            } 
            if(restaF>0){
                fil--;
            }
            if(restaC<0){
                col++;
            } 
            if(restaC>0){
                col--;
            }
            let celdaActual = tabla.rows[fil].cells[col];
            celdaActual.classList.add("seleccion");
            console.log(celdaActual.textContent);
            palabra.push(celdaActual.textContent);
            
        }
        palabraCompleta = palabra.join("");
        console.log(palabraCompleta);
    }
}
