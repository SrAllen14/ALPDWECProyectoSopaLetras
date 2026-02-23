// Mostrar la hora real 
function horaReal(){
    let fecha = new Date();
    let hora = fecha.getHours().toString();
    let min = fecha.getMinutes().toString();
    let sec = fecha.getSeconds().toString();
    
    hora = hora.padStart(2,'0');
    min = min.padStart(2,'0');
    sec = sec.padStart(2,'0');
    
    let cuadro = document.getElementById("tiempo");

    let formato = `${hora}`+`:`+`${min}`+`:`+`${sec}`;
    cuadro.textContent = formato;
}

export function iniciarReloj(){
    setInterval(horaReal,1000);
}
