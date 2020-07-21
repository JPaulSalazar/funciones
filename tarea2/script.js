let num1 = parseInt(prompt('ingrese el numero que desea comparar'));
let num2 = parseInt(prompt('ingrese el numero que desea comparar'));
function comparacion(a,b){
    if (a % b == 0){
        return("verdadero");
    }else if (a % b != 0){
        return("falso");
    }
}
let funcion = comparacion(num1,num2);
console.log(`el primer numero es dvisible entre el segundo numero: ${funcion}`);