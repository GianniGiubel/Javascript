const caixa=document.querySelector('#caixa')

let musicas=new Set(["musica1","musica boa","musica10"])

// SET, não deixa haver entradas duplicadas no array
musicas.add("in flames")
musicas.add("musica1")
musicas.add("musica1")

musicas.delete("in flames")
musicas.clear()

console.log(musicas)

// musicas.forEach((elemento)=> {
//     caixa.innerHTML+=elemento + "<br/>"
// })

for(let m of musicas) {
    caixa.innerHTML+=m + "<br/>"
}