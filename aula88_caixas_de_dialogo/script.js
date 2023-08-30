const btn_alert=document.querySelector('#btn_alert')
const btn_confirm=document.querySelector('#btn_confirm')
const btn_prompt=document.querySelector('#btn_prompt')

btn_alert.addEventListener("click",(evento)=> {
    alert("Olá, como você está?")
})

btn_confirm.addEventListener("click",(evento)=> {
   if(confirm("Você está aprendendo?")) {
    console.log("Botão OK pressionado!")
   } else {
    console.log("Botão Cancelar pressionado")
   }
})

btn_prompt.addEventListener("click",(evento)=> {
    prompt("Digite seu nome","Digite seu nome aqui!")
})