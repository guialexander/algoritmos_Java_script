// elementos comunes de un array  ejemplo ([4,5,6,7],[7,8,9,7,5])// devuelve:[5,7]

function comunes(array1,array2){

    let aux =[];

    for(i=0;i<array2.length;i++){
        for(j=0;j<array1.length;j++){
            if(array1[j]==array2[i]){
                aux.push(array1[j]);
                }
        }
    }
    console.log(aux);

}

comunes([4,5,6,7],[7,8,9,7,5]);