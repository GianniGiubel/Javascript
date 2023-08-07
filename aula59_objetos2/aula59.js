class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade        
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(){
        return this.nome
    }
    setIdade(){
        return this.idade
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`-----------------`)
    }    
}

let pessoas=[]

const btn_add=document.querySelector('#btn_add')
const res=document.querySelector('.res')

const addPessoa=()=>{ 
    res.innerHTML=""   
    pessoas.map((p)=>{
        const caixa=document.createElement("div")
        caixa.setAttribute("class","pessoa")
        caixa.innerHTML=`Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(caixa)
    })
}

btn_add.addEventListener("click",(evento)=>{
    const nome=document.querySelector('#f_nome')
    const idade=document.querySelector('#f_idade')
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()    
    addPessoa()    
})
