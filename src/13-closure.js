// Closure: Recuerda el scope en el que fue creada, incluso después de ser ejecutada.

function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(cantidad) {
            saldo += cantidad;
            return `Depositado: $${cantidad}. Saldo actual: $${saldo}.`
        },
        retirar(cantidad) {
            if (cantidad > saldo) {
                return "Fondos insuficientes";
            }
            saldo -= cantidad;
            return `Retirado: $${cantidad}. Saldo actual: $${saldo}`
        },
        consultarSaldo() {
            return `Saldo: $${saldo}.`
        }
    }
}

/*
const miCuenta = crearCuentaBancaria(1000); // 1000
console.log(miCuenta.consultarSaldo()); // 1000
console.log(miCuenta.depositar(500)); // 1500
console.log(miCuenta.retirar(200)); // 1300
*/

const miCuenta2 = crearCuentaBancaria(200);
console.log(miCuenta2.consultarSaldo());