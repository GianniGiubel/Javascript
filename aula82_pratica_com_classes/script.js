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
        this.desenhar()
        this.controle=setInterval(this.controlar,1)
        this.eu=document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }
    minhaPos=()=> {
        return this.arrayBolas.indexOf(this)
    }

    remover=()=> {
        clearInterval(this.controle)
        bolas=bolas.filter((elemento)=> {
            if(elemento.id!=this.id){
                return elemento
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML=numBola
    }

    desenhar=()=> {
        const div=document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tamanho}px;height:${this.tamanho}px;background-color:rgb(${this.r},${this.g},${this.b});`)
        this.palco.appendChild(div)
    }

    controle_bordas=()=> {
        if(this.px+this.tamanho >= larguraPalco) {
            this.direcaoX=-1
        } else if(this.px <= 0) {
            this.direcaoX=1
        }
        if(this.py+this.tamanho >= alturaPalco) {
            this.direcaoY=-1
        } else if(this.py <= 0) {
            this.direcaoY=1
        }
    }

    controlar=()=> {
        this.controle_bordas()
        this.px+=this.direcaoX*this.velocidadeX
        this.py+=this.direcaoY*this.velocidadeY
        this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tamanho}px;height:${this.tamanho}px;background-color:rgb(${this.r},${this.g},${this.b});`)
        if((this.px > larguraPalco) || (this.py > alturaPalco)) {
            this.remover()
        }
    }
}

window.addEventListener("resize",(evento)=> {
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
    
})

btn_add.addEventListener("click",(evento)=> {
    const quantidade=txt_quantidade.value

    for(let i=0;i<quantidade;i++){
        bolas.push(new Bola(bolas,palco))
    }
})

btn_remover.addEventListener("click",(evento)=> {
    bolas.map((elemento)=> {
        elemento.remover()
    })
})