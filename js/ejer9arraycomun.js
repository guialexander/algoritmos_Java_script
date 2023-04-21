// elementos comunes de un array  ejemplo ([4,5,6,7],[7,8,9,7,5])// devuelve:[5,7]

function comunes(array1,array2){
const filtrado=array1.filter(elemento=>{
    return array2.includes(elemento);
});

console.log(filtrado);
}

comunes([4,5,6,7],[7,8,9,7,5]);