function lado(numero){
    let lado="";
    for(let i=0;i<numero;i++){
        lado=lado+"*";
    }

    return lado;
}
function cuadrado(numero){
    let dibujo=lado(numero)+"\n";
    let contenido="";
    for(let i=0;i<numero;i++){
        contenido="*";
        for(let j=0;j<(numero-2);j++){
            contenido+=" ";
        }
        contenido+="*"
        dibujo= dibujo + contenido +"\n";
    }
    dibujo= dibujo +lado(numero);

    return dibujo;
}
console.log(cuadrado(6));   