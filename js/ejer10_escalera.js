/*emjemplos:
escalera(4) // Devuelve :
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/
function escalera(num){
    let escalera_completa="";
   for(nivel=1;nivel<=num;nivel++){
             let escalones="";
        for(let escalon=1;escalon<=nivel;escalon++){
            escalones+="[-]";
                       
        }

       escalera_completa+=escalones +"\n"; //no se puede enviar la variable escalones a return por que no es una variable global.

        //escalera_completa+=escalones;
                
    };

    return escalera_completa;

}

console.log(escalera(4));