// function aluno(nome, nota) {
//     this.nome=nome
//     this.nota=nota

//     console.log(nome)
//     console.log(nota)
// }
// aluno("Gianni",10)

function aluno(nome, nota) {
    this.nome=nome
    this.nota=nota

    this.dados_anonimo=function(){  //está função anoonima não 
        setTimeout(function(){      //consegue pegar o valor do this 
            console.log(this.nome)  //acima, na função "father" desta
            console.log(this.nota)  //função
        },2000)
    }

    this.dados_arrow=function(){    //Já está função, utilizando arrow
        setTimeout(()=>{            //function, consegue buscar do seu
            console.log(this.nome)  //"father" o valor de this e
            console.log(this.nota)  //utilizalo no settimeout
        },2000)
    }
}

const aluno1 = new aluno("Gianni", 10)
aluno1.dados_anonimo()
aluno1.dados_arrow()
