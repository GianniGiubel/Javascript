const p_array=document.querySelector('#array')
const txt_pesquisar=document.querySelector('#txt_pesquisar')
const btn_pesquisar=document.querySelector('#btn_pesquisar')
const resultado=document.querySelector('#resultado')

const elementos_array=["html","css","javascript"] //[10,5,8,2,9,15,20] 
p_array.innerHTML="[" + elementos_array + "]"
btn_pesquisar.addEventListener("click",(evento)=> {
    resultado.innerHTML="Valor não Encontrado"
    const ret=elementos_array.find((e,i)=> {
        if(e==txt_pesquisar.value){
            resultado.innerHTML="Valor encontrado " + e + " na posição " + i
            return e
        }
    })
    console.log(ret)
})