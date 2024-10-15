class ContaBancaria { 
    constructor(saldoInicial) {
        let _saldo = saldoInicial; 
this.getSaldo = function() {
return _saldo;
};
this.depositar = function(valor) {
if (valor > 0) {
_saldo += valor;
console.log(`Depósito de R$${valor} realizado com sucesso.`);
} else {
console.log("Valor de depósito inválido.");
}
};
this.sacar = function(valor) {
if (valor > 0 && valor <= _saldo) {
    _saldo -= valor;
console.log(`Saque de R$${valor} realizado com sucesso.`);
} else {
    console.log("Valor de saque inválido ou saldo insuficiente.");
}
    };
}
}

let conta = new ContaBancaria(1000);
console.log(conta.getSaldo());
conta.depositar(500);
console.log(conta.getSaldo()); 
conta.sacar (200);
console.log(conta.getSaldo());
conta.sacar (2000);
