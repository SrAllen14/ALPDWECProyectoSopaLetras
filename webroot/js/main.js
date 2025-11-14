import {mostrarPalabras, mostrarEnTabla} from './mostrarTabla.js';
import {contarPalabras, crearTablero} from './creacionTablero.js';
import {rellenarTablero} from './rellenarTablero.js';
import {escribirPalabras, situarPalabras} from './situarPalabras.js';
import {} from './horaReal.js';

let vPalabras = ["volante","barato","grande","idiota","pereza","zapato","abaco","coche","delta","folio","helio",
                "sitio","jota","kilo","leon","rio","lunes","martes","miercoles","jueves","viernes","sabado", 
                "domingo","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre",
                "octubre","noviembre","diciembre"];
vPalabras.sort((a, b)=>b.length-a.length);

let dimension = contarPalabras(vPalabras);
let sopaDeLetras = crearTablero(dimension);

sopaDeLetras = situarPalabras(vPalabras, sopaDeLetras);
sopaDeLetras = rellenarTablero(sopaDeLetras);

//mostrarPagina(sopaDeLetras);
//mostrarPalabras(vPalabras);
mostrarEnTabla(sopaDeLetras);
