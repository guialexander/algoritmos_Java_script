function considencias(frase , busqueda){
let texto_limpio=frase.toLowerCase().replace(/[,.!¡?:;]/gi,'');
let resultado= 0;

if (texto_limpio.includes(busqueda)){
    let palabras=texto_limpio.split(" ");
    console.log(palabras);
    let mapa={};
    for(let palabra of palabras){
       //console.log(palabra);  // recorre el arreglo creando la variable palabra si se coloca con in salen es numero de casillas.  of es la palabra.
        if(mapa[palabra]){
            mapa[palabra]++;
            console.log(mapa);

        }else{
        mapa[palabra]=1;
      }
    }
resultado = mapa[busqueda];
    
    
        }
console.log("numero de considencias: " + resultado, busqueda);
}




considencias("Hola, SOY ,ALEXANDER, que tal soy soy soy  ", "soy");