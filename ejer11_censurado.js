/**
 * 
 * @param {string} texto 
 * @param {string} busqueda 
 * @param {string} resultado
 * @returns 
 */

/*Busca en e texto la palabra que esta en busqueda, y coloca censurado  */
function censurado(texto=false,busqueda=false){
    let resultado="";
    if(!texto && !busqueda){
        resultado="No puede leer el texto ni la busqueda";
    }else if(!texto && busqueda){
        resultado="No puede leeer el texto"
    }else if(texto && !busqueda){
        resultado="No puede leeer la busqueda"
    }else if(texto && busqueda){
        resultado=texto.replace(new RegExp(busqueda,'gi'),"[CENSURADO]");
    }

    return resultado;
}

console.log(censurado("hola amigos como estan hola hola", "hola"));//primer parametro  va para texto y el segundo para busqueda
console.log(censurado("hola amigos como estan hola hola", "Amigos"));//primer parametro  va para texto y el segundo para busqueda
