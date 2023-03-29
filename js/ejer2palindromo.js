function palindromo(texto){
    console.log(texto);
    let invertido=texto.split('').reverse().join('');
   
    if(invertido===texto){
        

        console.log("si es un palindromo!: " + texto);

    }else{
        console.log("No es un palindromo!: " + texto + "al reves es: " + invertido);
        

    }
}

palindromo("lateleletal");
palindromo("amor");
palindromo("otto");
palindromo("voooo");
palindromo("anilina");
