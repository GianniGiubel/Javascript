const tipoMilitar=document.querySelector("#f_tipoMilitar")
const tipoNormal=document.querySelector('#f_tipoNormal')
const blindagem=document.querySelector('#f_blindagem')
const municao=document.querySelector('#f_municao')
const nomeCarro=document.querySelector('#f_nome')
const portasCarro=document.querySelector('#f_portas')
const carros=document.querySelector('#carros')
const btnAddCarro=document.querySelector('#btn_addCarro')

let arrayCarros=[]

// const removerCarro=(quem)=>{
//     arrayCarros=arrayCarros.filter((elemento)=>{
//         return elemento.nome!=quem
//     })
// }

tipoMilitar.addEventListener("click",(evento)=> { 
    nomeCarro.value=""
    portasCarro.value=0
    blindagem.value=0
    municao.value=0  
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

tipoNormal.addEventListener("click",(evento)=> {
    nomeCarro.value=""
    portasCarro.value=0
    blindagem.value=0
    municao.value=0
    blindagem.setAttribute("disabled","disabled")
    municao.setAttribute("disabled","disabled")
})

const gerenciarExibicaoCarros=() => { 
        carros.innerHTML=""   
    arrayCarros.map((c,i) => {
        const div=document.createElement("div")
        const btn=document.createElement("button")
        btn.addEventListener("click",(evento)=> {
            // const quemRemover=evento.target.parentNode.dataset.nome 
            // removerCarro(quemRemover)
            arrayCarros.splice(i,1)
            gerenciarExibicaoCarros()           
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML=`Nome: ${c.nome}</br>Portas: ${c.portas}</br>`
        if(c.blindagem>0){
            div.innerHTML+=`Blindagem: ${c.blindagem}</br>Munição: ${c.municao}</br>Cor: ${c.cor}`
        }
        div.appendChild(btn)
        btn.innerHTML=`Remover`
        carros.appendChild(div)
    })
}

btnAddCarro.addEventListener("click",()=> {
    if(tipoNormal.checked){
        const c=new Carro(nomeCarro.value,portasCarro.value)
        arrayCarros.push(c)
    } else {
        const c=new Militar(nomeCarro.value,portasCarro.value,blindagem.value,municao.value)
        arrayCarros.push(c)
    }   
    gerenciarExibicaoCarros()
})

class Carro {// Classe PAI/BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{// Classe FILHO
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}
