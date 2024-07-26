function eje1(){
    alert('Ingrese porfavor dos números');
    const n1 = prompt('Ingrese el primer número');
    const n2 = prompt('Ingrese el segundo número');
    alert('El primer Número es: '+n1+' El segundo número es: '+n2);
}

function eje2(){
    var nombre = prompt('Ingrese un nombre');
    console.log("Buenas noches " + nombre);

}
function eje3(){
    alert('Se solicitan dos numeros para operaciones matematicas');
    const n1 = prompt('Primer Número solicitado:');
    const n2 = prompt('Segundo Número solicitado:');
    console.log('Suma');
    console.log(n1+n2);
    console.log('Resta');
    console.log(n1-n2);
    console.log('Multiplicacion');
    console.log(n1*n2);
    if(n2==0){
        console.log('No se puede dividir entre cero campeon');
    }else{
    console.log('Division');
    console.log(n1/n2);
    }
}

function eje4(){
    alert ("Conversión de Grados Celsius a Farenheit");
    const centigrados = prompt('Grados Celsius');
    const farenheit = ((centigrados * 1.8)+32);
    alert("Grados Farenheit: "+farenheit);
}
