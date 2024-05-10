let conta = {
    titular: "Bruce Wayne",
    saldo: 777,
    numeroConta: 73737373737
};

function adicionar(){
    let add = 275;
    console.log(`se adicionamos ${add} teremos no saldo ${conta.saldo + add}.`)
};

function retirar(){
    let rem = 300;
    console.log(`se retiramos ${rem} teremos no saldo ${conta.saldo - rem}.`)
};
function result(){
    console.log("titular: " + conta.titular);
    console.log("saldo: "+ conta.saldo);
    console.log("numeroConta: " + conta.numeroConta);
    console.log(adicionar())
    console.log(retirar())
};
console.log(result())

