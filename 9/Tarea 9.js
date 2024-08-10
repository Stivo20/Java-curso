class cuentaBanco{
    saldo

    constructor(saldo){
        this.saldosaldo = saldo
    }
    
    acreditar(deposito){
        this.saldo += deposito
    }

    debitar(monto){
        this.saldo -= monto
    }

    estadoCuenta(){
        console.log("Estado de cuenta actual" +  saldo )
    }
}
let cuenta2 = new cuentaBanco(saldo);
cuenta2.estadoCuenta();
cuenta2.acreditar(100);
cuenta2.estadoCuenta();
cuenta2.debitar(50);

let cuenta1 = new cuentaBanco(saldo);
cuenta1.acreditar(500);
cuenta1.estadoCuenta();
cuenta1.debitar(200);
cuenta1.estadoCuenta();
