function uno(){
    alert('INICIALIZACIÓN DE BUCLE HASTA AGREGAR UN NÚMERO NEGATIVO');
    let n1;

while (true) {
    n1 = parseFloat(prompt("Introduce un número (ingresa un número negativo para salir):"));

    if (n1 < 0) {
        break;
    }
    alert('Número ingresado:'+ n1+'\nRepetir el proceso hasta que ingrese un número negativo');
}

confirm('Se ha ingresado un número negativo. El programa ha terminado.');
}
 
function dos(){
    alert('INDICAR SI EL NÚMERO ES POSITIVO O NEGATIVO\nSI DESEA SALIR DEL SISTEMA INGRESE 0');
    let n1;
    while(true){
        n1 = parseFloat(prompt("Ingrese número negativo o positivo"));
        if (n1 < 0) {
            confirm('Número ingresado: '+n1+'\n Es NEGATIVO');
        }if(n1 > 0){
            confirm('Número ingresado: '+n1+'\n Es POSITIVO');
        }if (n1 == 0){
            confirm('Saliendo del sistema');
            break;
        }
    }
}
 
function tres(){
    let cadena = parseInt(prompt('Introduce una cadena de números sin espacios'));
    let p = eval(new String(cadena));
    for(i=0;i==p;i++){
        if(p==0){
            confirm('El número en posición '+i+' es 0\nSaliendo del Sistema');
        }if(p % 2){
            confirm('El número '+p+' es PAR');
        }else{
            confirm('El número '+p+' es IMPAR');
        }
    }
}
function cuatro(){

}
 
function cinco(){

}
 