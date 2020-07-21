let num1 = parseInt(prompt('ingrese el primer numero que desea comparar:'));
let num2 = parseInt(prompt('ingrese el segundo munero que desea comparar:'));
function max(a,b){
    if(a > b){
        return(`el numero ${a} es el numero mayor`);
    }else if(b>a){
        return(`el numero ${b} es el numero mayor`);
    }
}
let funcion = max(num1,num2);
console.log(`${funcion}`);