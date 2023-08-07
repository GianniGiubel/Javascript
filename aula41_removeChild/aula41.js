const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll('.curso')]
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

//adicionando elementos no HTML de forma dinâmica
cursos.map((ele,pos)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+pos)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=ele

    const btn_lix=document.createElement("i")
    btn_lix.setAttribute("class","fa-solid fa-trash-can")
    btn_lix.addEventListener("click",(evento)=>{
        console.log(evento.target.parentNode)
        caixa1.removeChild(evento.target.parentNode)
    })
    
    novoElemento.appendChild(btn_lix)
    caixa1.appendChild(novoElemento)
})

