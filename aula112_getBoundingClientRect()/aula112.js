const q1=document.querySelector('#q1')
const q2=document.querySelector('#q2')
const posX=document.querySelector('#posX')
const posY=document.querySelector('#posY')
const largura=document.querySelector('#largura')
const altura=document.querySelector('#altura')

const info=(elemento)=> {
    let DomRect_q=elemento.getBoundingClientRect()
    posX.innerHTML=`posX:${DomRect_q.x}`
    posY.innerHTML=`posY:${DomRect_q.y}`
    largura.innerHTML=`Largura:${DomRect_q.width}`
    altura.innerHTML=`Altura:${DomRect_q.height}`
}

window.addEventListener("click",(event)=> {
    info(event.target)
})