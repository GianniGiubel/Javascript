const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

//adicionando elementos no HTML de forma dinâmica
cursos.map((ele,pos)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+pos)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=ele
    caixa1.appendChild(novoElemento)
})

