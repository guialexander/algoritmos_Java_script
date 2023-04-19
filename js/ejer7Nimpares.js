function impar(desde,hasta){
    let cont=0;

    for(i=desde;i<=hasta;i++){
        console.log(i);
        if(i%2!==0){ //  si dejamos igual a cero es par.
            cont++;
        };
    };
    return cont;
};

console.log("Números Impares son : " + impar(1,100))

