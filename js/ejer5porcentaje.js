function porcentaje(porcentaje,numero){
    
    let resultado=(numero*(porcentaje/100));
    let aux= "Cuanto es el " + porcentaje + " por ciento de " + numero +" ? \n"+ "el porcentaje es: " + resultado ;
    return aux;


};

console.log(porcentaje(20,100));
console.log(porcentaje(43,897));