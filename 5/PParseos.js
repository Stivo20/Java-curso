
function uno(){
    alert('Ingresa dos numperos para verificar son iguales');
    const n1 = prompt('Ingrese el primer número: ');
    const n2 = prompt('Ingrese el segundo número: ');
    if (n1==n2){
        alert('Los Numeros ingresados fueron '+n1+' y '+n2);
        confirm('SI SON IGUALES');
    }else{
        alert('Los Numeros ingresados fueron '+n1+' y '+n2);
        confirm('NO SON IGUALES');
    }
}
function dos(){
    const num = Number(parseFloat(prompt('Ingrese un número negativo o positivo')));
    if(num < 0){
        alert('El número ingresado es NEGATIVO ' +'( '+ num+' )');
    }else{
        alert('El número ingresado es POSITIVO ' +'( '+ num+' )');
    }
}
function tres(){
    alert('Se solicitaran DOS NÚMEROS para ordenarlos adecuadamente');
    const n1 =Number(parseFloat(prompt('Primer número')));
    const n2 =Number(parseFloat(prompt('Segundo número')));
    if(n1 > n2){
        alert('Ordenado '+ n1+', '+n2 );
    }else{
        alert('Ordenado '+n2+', '+n1);
    }
}
function cuatro(){
    alert('Se solicitaran TRES NÚMEROS para ordenarlos adecuadamente');
    const n1 =Number(parseFloat(prompt('Primer número')));
    const n2 =Number(parseFloat(prompt('Segundo número')));
    const n3 =Number(parseFloat(prompt('Tercer número')));
    
        if((n1 > n2) && (n2 > n3)){
            alert('Ordenado '+n1+', '+n2+', '+n3);
        } else if((n1 > n3) && (n3 > n2)){
            alert('Ordenado '+n1+', '+n3+', '+n2);
        } else if ((n2 > n1) && (n1 > n3)){
            alert('Ordenado '+n2+', '+n1+', '+n3);
        } else if ((n2 > n3) && (n3 > n1)){
            alert('Ordenado '+n2+', '+n3+', '+n1);
        } else if((n3 > n2) && (n2 > n1)){
            alert('Ordenado '+n3+', '+n2+', '+n1);
        } else{
            alert('Ordenado '+n3+', '+n1+', '+n2);
        }
}