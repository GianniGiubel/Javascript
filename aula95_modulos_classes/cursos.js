class Cursos{
    static cursos=["javascrript","HTML","CSS","Arduino","Raspberry","C++","Python","java","C#"]

    static getTodosCursos=()=> {
        return this.cursos
    }

    static getCurso=(i_curso)=> {
        return this.curso[i_curso]
    }

    static addCurso=(novoCurso)=> {
        this.cursos.push(novoCurso)
    }

    static apagarCurso=()=> {
        this.cursos=[]
    }
}

export default Cursos



