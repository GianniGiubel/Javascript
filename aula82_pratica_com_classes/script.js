const palco=document.querySelector('#palco')
const num_objetos=document.querySelector('#num_objetos')
const txt_quantidade=document.querySelector('#txt_quantidade')
const btn_add=document.querySelector('#btn_add')
const btn_remover=document.querySelector('#btn_remover')

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0

class Bola{
    constructor(arrayBolas,palco){
        this.tamanho=Math.floor(Math.random()*15)+10
        this.r=Math.floor(Math.random()*255)
        this.g=Math.floor(Math.random()*255)
        this.b=Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(larguraPalco-this.tamanho))
        this.py=Math.floor(Math.random()*(alturaPalco-this.tamanho))
        this.velocidadeX=Math.floor(Math.random()*2)+0.5
        this.velocidadeY=Math.floor(Math.random()*2)+0.5
        this.direcaoX=(Math.random()*10) > 5 ? 1 : -1
        this.direcaoY=(Math.random()*10) > 5 ? 1 : -1
        this.palco=palco
        this.arrayBolas=arrayBolas
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000000)
        this.controle=setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
    }
    minhaPos=()=> {

    }

    remover=()=> {

    }

    desenhar=()=> {

    }

    controlar=()=> {

    }
}

window.addEventListener("resize",(evento)=> {
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
    
})

btn_add.addEventListener("click",(evento)=> {
    const quantidade=txt_quantidade.value

    for(let i=0;i<quantidade;i++){

    }
})

btn_remover.addEventListener("click",(evento)=> {
    bolas.map((elemento)=> {
        elemento.pop
    })
})