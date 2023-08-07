function soma(...valores) {//indica número indeterminado de parâmetros
    return valores.length//mostra o comprimento do array valores
}
//console.log(soma(10,5))

function soma(...valores) {
    let tam = valores.length
    let res = 0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}
//console.log(soma(12,18,10,100,80,47))

//agora a mesma função utilizando o FOR OF
function soma1(...valores) {
    let res = 0
    for(i of valores) {
        res+=i
    }
    return res
}
//console.log(soma1(12,18))

//agora a mesma função utilizando o FOR IN
function soma2(...valores) {
    let res = 0
    for(i in valores) {
        res+=valores[i]
    }
    return res
}
console.log(soma2(12,18))