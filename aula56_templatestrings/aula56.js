const caixa=document.querySelector('#caixa')

const carros=["Polo","Golf","HRV", "Corsa"]

let ul=`<ul>`
carros.map((elemento)=> {
    ul+=`<li>${elemento}</li>`
})
ul+=`</ul>`

// const curso="javascript"
// const canal="CFB cursos"
// const frase="Este é o curso de " + curso + " do canal " + canal
// const frase=`Este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML=ul