function uno(){
    alert('Ingresa un Número del 1 al 12 para indicar a que mes corresponde - PRECIONE 0 PARA SALIR DEL SISTEMA -');
    const mes = parseInt(prompt('¿Que mes desea visualizar?'));

    switch(mes){
        case 1:{
            alert('ENERO');
            return(uno());
        }
        break;
        case 2:{
            alert('FEBRERO');
            return(uno());
        }
        break;
        case 3:{
            alert('MARZO');
            return(uno());
        }
        break;
        case 4:{
            alert('ABRIL');
            return(uno());
        }
        break;
        case 5:{
            alert('MAYO');
            return(uno());
        }
        break;
        case 6:{
            alert('JUNIO');
            return(uno());
        }
        break;
        case 7:{
            alert('JULIO');
            return(uno());
        }
        break;
        case 8:{
            alert('AGOSTO');
            return(uno());
        }
        break;
        case 9:{
            alert('SEPTIEMBRE');
            return(uno());
        }
        break;
        case 10:{
            alert('OCTUBRE');
            return(uno());
        }
        break;
        case 11:{
            alert('NOVIEMBRE');
            return(uno());
        }
        break;
        case 12:{
            alert('DICIEMBRE');
            return(uno());
        }
        break;
        case 0:{
            alert('SALIR DEL SISTEMA');
            break;
        }
        break;
        default:
            alert('Número de mes invalido');
            return(uno());
    }
}
function dos(){
    alert('LOGIN - Unicamente cuanta con 3 intentos para ingresar -');
    var usuario = 'SteveD20';
    let password = 'Stivo20';
    for(let i = 2 ; i >= 0; i --){
    let usr = prompt('USUARIO');
    let pass = prompt('CONTRASEÑA');
    if(usr != usuario || pass != password){
            if(i<=2){
            confirm('USUARIO O CONTRASEÑA INCORRECTOS - cuenta con '+i+' intentos más');
            } 
    }
    if(usr === usuario || pass === password){
        confirm('Usuario y Contraseña son correctos - BIENVENIDO');
        break;
       }   
}
}
function tres(){
    alert('CALCULADORA \n Favor de ingresar DOS NUMEROS para operar');
    const n1 = parseFloat(prompt('Primer Número'));
    const n2 = parseFloat(prompt('Segundo Número'));
const op = parseFloat(prompt('Que operación desea realizar\n1. Sumar(+)\n2. Restar(-)\n3. Multiplicar(*)\n4. Dividir(/)'));
switch(op){
    case 1:{
        let n3 = n1 + n2;
        confirm('SUMAR\n'+n1+' + '+n2+'\nResultado: '+n3);
    }break;
    case 1:{
        let n3 = n1 - n2;
        confirm('RESTAR\n'+n1+' - '+n2+'\nResultado: '+n3);
    }break;
    case 1:{
        let n3 = n1 * n2;
        confirm('MULTIPLICAR\n'+n1+' * '+n2+'\nResultado: '+n3);
    }break;
    case 1:{
        let n3 = n1 / n2;
    if(n2 == 0){
        confirm('NO SE PUEDE DIVIDR ENTRE 0 MORENO');
    }else{
        confirm('DIVIDIR\n'+n1+' / '+n2+'\nResultado: '+n3);
    }
    }break;
}
}
function cuatro(){
    alert('¿Eres legal? *_*');
    const n1 = parseFloat(prompt('Ingresa tu edad actual'));
    if (n1>=18){
        confirm('Muy bien si eres MAYOR DE EDAD, pasa adelante :)');
    }else{
        confirm('No se permite el ingreso a MENORES DE EDAD :(');
    }
}
function cinco(){
    alert('NUMEROS PARES O IMPARES');
    const num = parseFloat(prompt('Ingrese Cualquier número'));
    if (num % 2){
        confirm('Número ingresado es IMPAR '+num);
        
    }else{
        confirm('Número ingresado es PAR '+num);
    }
}
function seis(){
    const op =  parseFloat(prompt('MENU DE OPCIONES\n1. Sumar\n2. Restar\n3. Salir'));
    switch(op){
        case 1:{
            var n1 = parseFloat(prompt('SUMAR\nIngresar unicamente dos números\n Primer número'));
            var n2 = parseFloat(prompt('Segundo número'));
            n3 = n1 + n2;
            confirm('Números ingresados para Sumar '+n1+' y '+n2+'\nResultado: '+n3);
            return(seis());
        }break;
        case 2:{
            var n1 = parseFloat(prompt('RESTAR\nIngresar unicamente dos números\n Primer número'));
            var n2 = parseFloat(prompt('Segundo número'));
            n3 = n1 - n2;
            confirm('Números ingresados para Restar '+n1+' y '+n2+'\nResultado: '+n3);
            return(seis());
        }break;
        case 3:{
            let repite = prompt('¿Seguro/a que deseas Salir?\nY: SI\nN: NO');
            if(repite=='Y' || repite=='y'){
                confirm('Hasta la Proxima...');
                break;
            }if(repite == 'N' || repite=='n'){
                confirm('Esta bien, ¿Que otro opción deseas operar?');
                return(seis());
            }if(repite != 'Y' || repite != 'N'){
                confirm('Valor ingresado no valido');
                return(seis());
            }
        }break;
        default:{
            confirm('Valor ingresado no valido');
            return(seis());
        }
    }
}

