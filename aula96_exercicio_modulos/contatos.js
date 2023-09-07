import { contatos } from "./bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_contato) {
        return contatos[i_contato]
    },
    addContato:function(novoContato,destinoDOM){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)
        destinoDOM.innerHTML=""

        contatos.forEach((elemento)=> {
            const div=document.createElement("div")
            div.setAttribute("class","contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=elemento.nome
            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=elemento.telefone
            const p_email=document.createElement("p")
            p_email.innerHTML=elemento.email
            const btn_remover=document.createElement("button")
            btn_remover.setAttribute("id", "btn_" + indice)
            btn_remover.innerHTML="Remover"
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn_remover)
            destinoDOM.appendChild(div)
            btn_remover.addEventListener("click",(event)=> {
                event.target.parentNode.remove()
                contatos.pop(elemento)
                console.log(contatos)
            })            
        })        
    }
}

export default contato