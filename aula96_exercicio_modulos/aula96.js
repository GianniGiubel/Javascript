import c from "./contatos.js"

const listaContatos=document.querySelector('#listaContatos')
const btn_gravar=document.querySelector('#btn_gravar')

btn_gravar.addEventListener("click", (event)=>{    
    const cont={
        nome:document.querySelector('#f_nome').value,
        telefone:document.querySelector('#f_telefone').value,
        email:document.querySelector('#f_email').value
    }    
    // if(cont.nome == "" || cont.telefone == "" || cont.email == "") {
    //     alert("Por Favor, preencha todos os campos")
    // } else {
        c.addContato(cont,listaContatos)
        // console.log(c.getTodosContatos())
        // console.log(c.getContato(0).nome)
    // }
    
})