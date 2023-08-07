const caixaCursos=document.querySelector('#caixaCursos')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso=document.querySelector("#btnRemoverCurso")
const btnAdicionarCursoAntes=document.querySelector("#btnAdivionarCursoAntes")
const btnAdicionarCursoDepois=document.querySelector("#btnAdivionarCursoDepois")
const nomeCurso=document.querySelector("#nomeCurso")

let indice=0

const tirarSeleção=()=> {
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((ele)=> {
        ele.classList.remove("selecionado")
    })
}

const  criarNovoCurso=(curso)=> {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c" + indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evento)=> {
        tirarSeleção()
        evento.target.classList.toggle("selecionado")
    })
    
    indice ++
    return novoElemento
}

cursos.map((el,chave)=>{    
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)    
})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]    
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evento)=>{    
    try {        
        alert("Curso Selecionado " + cursoSelecionado().innerHTML) 
    } catch(ex) {
        alert("Selecione um curso!")   
    }      
})

btnRemoverCurso.addEventListener("click",(evento)=>{
    const cursoSelect=cursoSelecionado()
    if(cursoSelect!=undefined) {        
        cursoSelect.remove()
    } else {
        alert("Selecione um curso!")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evento)=>{    
    try {   
        if(nomeCurso.value!="") {            
            const novoCurso=criarNovoCurso(nomeCurso.value)            
            caixaCursos.insertBefore(novoCurso,cursoSelecionado()) 
        } else {
            alert("Digite o nome do curso!")  
        }
    } catch (ex) {
        alert("Selecione um curso!")
    }     
    nomeCurso.value=""
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evento)=>{    
    try {   
        if(nomeCurso.value!="") {            
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling) 
        } else {
            alert("Digite o nome do curso!")  
        }
    } catch (ex) {
        alert("Selecione um curso!")
    }          
    nomeCurso.value=""
})
