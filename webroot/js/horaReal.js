export function horaReal(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();
    
    let cuadro = document.getElementById("tiempo");
    
    let p = document.createElement("p");
    p.innerHTML = `${hora}`+`:`+`${min}`+`:`+`${sec}`;
    cuadro.appendChild(p);
    cuadro.remove(p);
}
var reloj = setInterval(horaReal,1000);