// Cronómetro
let minutos = 0;
let segundos = 0;
var crono = null;

const contenedorCronometro = document.getElementById("contCronometro");


export function pararCronometro(){
    clearInterval(crono);
}

export function iniciarCronometro(){
    crono = setInterval(cronometrar, 1000);
}

function cronometrar(){
    segundos ++;
    if(segundos === 60){
        minutos ++;
        segundos = 0;
    }
    let minutosFormateados = minutos < 10 ? '0' + minutos : '' + minutos;
    let segundosFormateados = segundos < 10 ? '0' + segundos : ''+ segundos;
    contenedorCronometro.textContent=minutosFormateados + ":" + segundosFormateados;
}

export function tiempoTotal(){
    return ((minutos*60) + segundos);
}

