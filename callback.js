function filtroTamanho(string) { 
    return string.length > 3;
}; 
function converterMaiusculas(string) {
    return string.toUpperCase(); 
}; 
function concatenarStrings(stringAcumulada, stringAtual) {
     return stringAcumulada + stringAtual; 
}; 
let strings = ["casa", "carro", "bicicleta", "lua", "sol"];

let resultado = strings .filter(filtroTamanho) .map(converterMaiusculas) .reduce(concatenarStrings,"");

console.log(resultado);