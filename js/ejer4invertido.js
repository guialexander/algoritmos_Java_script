function invertir(mensaje){
    let invertido="";
    for(let letra of mensaje){ //saca lo que contiene el contenedor del arreglo
        invertido =letra +invertido;


    }

   return(invertido);
}

function invertido2(mensaje){
    return mensaje.split("").reverse().join('');

}


console.log(invertir("hola amigos"));
console.log(invertir("lateleletal"));
console.log(invertido2("lateleletal"));
console.log(invertido2("amor"));