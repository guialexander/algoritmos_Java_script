function lado(numero){
    let lado="";
    for(let i=0;i<numero;i++){
        lado=lado+"*";
    }

    return lado;
}
function cuadrado(numero){
    let dibujo=lado(numero)+"\n"; //lado de arriba
    let contenido="";
    for(let i=0;i<numero;i++){//añadir filas
        
        contenido="*";
        for(let j=0;j<(numero-2);j++){
            //hueco en la mitad
            contenido+=" ";
        }
        contenido+="*"
        dibujo= dibujo + contenido +"\n";
    }

    //lado de abajo
    dibujo= dibujo +lado(numero);

    return dibujo;
}
console.log(cuadrado(4));   
