const caixa1=document.querySelector('#caixa1')
const btn_c1=document.querySelector('#c1')
const cursos=[...document.querySelectorAll('.curso')]

//foi disparado uma evento no container, e os elementos dentro dele tbm recebem esse evento
caixa1.addEventListener("click",(evento)=>{
    console.log("Clicou!")
})

cursos.map((ele)=>{
    //para a propagação do evento para so elementos dentro do container
    ele.addEventListener("click",(evento)=>{
        evento.stopPropagation()    
    })
})