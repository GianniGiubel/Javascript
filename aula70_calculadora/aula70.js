const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp=[...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display=document.querySelector('.display')
const tLigar=document.querySelector('#tLigar')
const tLimpar=document.querySelector('#tLimpar')
const tIgual=document.querySelector('.res')

let sinal=false
let decimal=false

teclasNum.map((elemento)=> {
    elemento.addEventListener("click",(evento)=> {
        sinal=false        
        if(evento.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                } else {
                    display.innerHTML+=evento.target.innerHTML
                }
            }            
        } else {
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evento.target.innerHTML
        }
    })
})

teclasOp.map((elemento)=> {
    elemento.addEventListener("click",(evento)=> {
        if(!sinal){
            sinal=true
            decimal=false
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evento.target.innerHTML=="x"){
                display.innerHTML+="*"
            } else {
                display.innerHTML+=evento.target.innerHTML
            }
        }
    })
})

tIgual.addEventListener("click",()=> { 
    sinal=false  
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

tLimpar.addEventListener("click",()=> { 
    sinal=false  
    decimal=false
    display.innerHTML="0"
})