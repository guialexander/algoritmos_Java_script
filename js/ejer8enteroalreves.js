function devolverentero(numero){
    console.log(typeof numero)// saber tipo de dato 
    let sinvertido=parseInt( numero
                            .toString()// convertir en string
                            .split('')// separar el string
                            .reverse()// invertir la palabra
                            .join(""))*Math.sign(numero);//unir sin espacios
                        
    

    return sinvertido;
}

console.log(devolverentero(894598874));
console.log(devolverentero(-6574));
console.log(devolverentero(15));