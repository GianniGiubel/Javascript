const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const botao=document.querySelector('#btn_transferir')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((ele)=>{
    ele.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

botao.addEventListener("click",()=>{
    const curso_select=[...document.querySelectorAll('.selecionado')]
    const curso_not_select=[...document.querySelectorAll(".curso:not(.selecionado)")]

    curso_select.map((ele)=>{
        caixa2.appendChild(ele)
    })
    curso_not_select.map((ele)=>{
        caixa1.appendChild(ele)
    })
})    
