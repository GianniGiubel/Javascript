const p_array=document.querySelector('#array')
const btnVerificar=document.querySelector('#btnVerificar')
const resultado=document.querySelector('#resultado')

// const elementos_array=[21,25,19,20,16,18,22]
// p_array.innerHTML="[" + elementos_array + "]"

// MÈTODO EVERY, retorna true se todos elementos estiverem em conformidade, e false no primeiro que não estiver!

// btnVerificar.addEventListener("click",(evento)=> {    
//     const ret=elementos_array.every((e,i)=> {
//         if(e<=18) {
//             resultado.innerHTML="Array não conforme na posição " + i
//         }
//         return e>=18
//     })
//     if (ret) {
//         resultado.innerHTML="OK!"
//     } 
//     //console.log(ret)
// })

// MÈTODO SOME, retorna true se pelo menos um elemento estiver e conformidade!

const elementos_array=[16,12,10,17,15,13,11,19]
p_array.innerHTML="[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evento)=> {    
    const ret=elementos_array.some((e,i)=> {
        if(e<=18) {
            resultado.innerHTML="Array não conforme na posição " + i
        }
        return e>=18
    })
    if (ret) {
        resultado.innerHTML="OK!"
    } 
    //console.log(ret)
})