let num = parseInt(prompt('ingrese el numero que desea comprobar si es primo'));
function primo(a){
    let i = 2
    comprobacion = true
    while(i != a){
        if (a % i == 0){
            comprobacion = false;
        }
        i++
    }
    return(comprobacion);
}
let funcion = primo(num);
if(funcion == false){
    console.log('el numero es compuesto');
}else{
    console.log('el numero es primo');
}