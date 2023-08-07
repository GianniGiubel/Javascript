//Função anonima
const f = function(v1,v2) {
    return v1+v2
}
//chamada da função anônima
//console.log(f(12,18))

//usando parâmetro REST
const f1 = function(...valores) {
    let res=0
    for(i of valores) {
        res+=i
    }
    return res
}
//console.log(f1(12,18))

//Função Construtora ( e ainda anônima)
const f2 = new Function("n1","n2","return n1+n2")//o último parâmetro da função é sempre o bloco de comandos dela, ou seja, o que ela irá realizar de fato

console.log(f2(12,18))