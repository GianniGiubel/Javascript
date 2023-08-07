const valor1=document.querySelector('#txt_num1')
const valor2=document.querySelector('#txt_num2')
const resposta=document.querySelector('#txt_res')
const btn_soma=document.querySelector('#soma')
const btn_subtrair=document.querySelector('#subtrair')
const btn_multi=document.querySelector('#multi')
const btn_dividir=document.querySelector('#dividir')

const op=[
    (val1,val2)=> {
        let res=Number(val1)+Number(val2)        
        return res
    },
    (val1,val2)=> {
        let res=Number(val1)-Number(val2)        
        return res
    },
    (val1,val2)=> {
        let res=Number(val1)*Number(val2)
        return res
    },
    (val1,val2)=> {
        let res=Number(val1)/Number(val2)
        return res
    }    
]

btn_soma.addEventListener("click",()=> {
    let resultado=op[0](valor1.value,valor2.value)     
    resposta.value=resultado   
})

btn_subtrair.addEventListener("click",()=> {
    let resultado= op[1](valor1.value,valor2.value)
    resposta.value=resultado
})

btn_multi.addEventListener("click",()=> {
    let resultado= op[2](valor1.value,valor2.value)
    resposta.value=resultado
})

btn_dividir.addEventListener("click",()=> {
    let resultado= op[3](valor1.value,valor2.value)
    resposta.value=resultado
})