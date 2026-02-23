export class Puntuacion{
    constructor(nivel, posicion, nombre, puntaje){
        this._nivel = nivel;
        this._posicion = posicion;
        this._nombre = nombre;
        this._puntaje = puntaje;
    }
    
    get posicion(){
        return this._posicion;
    }
    
    get nivel(){
        return this._nivel;
    }
    
    get nombre(){
        return this._nombre;
    }
    
    get puntaje(){
        return this._puntaje;
    }
    
    set posicion(posicion){
        this._posicion = posicion;
    }
    
    set nivel(nivel){
        this._nivel = nivel;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
    
    set puntaje(puntaje){
        this._puntaje = puntaje;
    }
}