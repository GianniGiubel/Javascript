const caixa=document.querySelector('#caixa')

let mapa=new Map()

// Mostra primeiro a chave, depois o valor, sempre! mapa(chave,valor)
mapa.set("curso","HTML")
mapa.set(10,"java")
mapa.set(1,100)
mapa.set("gianni",100)

mapa.delete(1)

console.log(mapa)

let pesquisa=10

if(mapa.has(pesquisa)) {
    caixa.innerHTML="A chave existe na coleção com o valor: " + mapa.get(pesquisa)
    caixa.innerHTML+="<br/>O tamanho da coleção é: " + mapa.size
}

mapa.forEach((elemento)=> {
    console.log(elemento)
})

// HAS, verifica se existe a chave ou não na coleçao
// if (mapa.has("canal")) {
//     caixa.innerHTML="A chave existe na coleçao!"
// } else {
//     caixa.innerHTML="A chave não existe na coleçao!"
// }

// caixa.innerHTML=mapa.get("curso") - seleciona o valor da chave "curso"