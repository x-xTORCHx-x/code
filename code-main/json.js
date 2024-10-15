
//let con = JSON.parse(name);
//console.log(con.nome);
//console.log(con.idade);
//let jst = '{"nome":"john","idade":30}'
//let  obj = JSON.parse(jst);
//console.log(obj.name);
//console.log(obj.idade);
//console.log(obj.casado);

//let jsonString = '{"nome":"João","idade":"30","casado":true}';
//let objeto = JSON.parse(jsonString,function(chave,valor){
//    if (chave === "idade"){
//        return Number(valor);
//    }
//    return valor;
//});
//console.log(objeto.idade);

//function reviver(key, value){
//    if(typeof value === 'number'){
//        return value *2;
//    }
//    if(key === 'status'&& value ==='ativo'){
//        return 'inativo'
//    }
//    return value;
//}
//const jsonString= '{"nome":"João","idade":30,"status":"ativo"}';
//const objeto = JSON.parse(jsonString, reviver);
//console.log(objeto);

let jsonString = '{"nome":"João","idade":30,"cansado":true}';
try{
    let objeto = JSON.parse(jsonString);
    console.log(objeto);
} catch (e) {
    console.error("erro ao parsear JSON", e);
};