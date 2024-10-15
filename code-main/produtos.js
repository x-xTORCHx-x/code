let produtos = {
    nome: "",
    preço: 0,
    estoque: 0,

};
function adicionar(){
    produtos.nome = "ovos";
    produtos.preço = 15.00;
    produtos.estoque = 30;
    console.log("produto: " + produtos.nome)
    console.log("preço: " + produtos.preço)
    console.log("estoque: "+ produtos.estoque)
    let comprar = 2;
    console.log(`se você comprar ${comprar} ${produtos.nome} vai custar ${produtos.preço * comprar},00 no estoque e vai sobrar ${produtos.estoque - comprar} `)
};
console.log(adicionar())