let caracter = (prompt("ingrese la cantidad maxima de caracteres:"));
let condicion = '';
let i = 0;
function alinearDerecha(a,b){
    a = a.toString();
    let arreglo = a.split("");
    if(b > arreglo.length-1){
        while(arreglo.length-1 < b){
            let c = arreglo.unshift(" ");
        }
        c = arreglo.join('');
        return(c);
    }else if(b < arreglo.length){
        return('error');
    }
}
while(condicion != 'no' && (i >= caracter || i <= caracter)){
    let num = prompt('ingrese los numeros que desea alinear');
    condicion = prompt('desea ingresar otro numero (SI/NO)').toLowerCase();
    if(num != isNaN && (condicion == "si" || condicion == "no")){
        num = parseInt(num);
        let funcion = alinearDerecha(num,caracter);
        console.log(`${funcion}`);
    }else if(num == isNaN || (condicion != "no" || condicion != "si")){
        console.log('el valor es invalido intente de nuevo');
    }
    i++;
}