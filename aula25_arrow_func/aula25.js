//Função anonima Comum...const soma = function(v1,v2) {return v1+v2}

//Arrow function
const soma = (v1,v2) => {return v1+v2}
//Ela indica com o símbolo "=>", que os parâmetros irão ser utilizados dentro do bloco de comandos
//console.log(soma(12,18))

//Arrow function com um parâmetro
const nome = n => { return n}

//console.log(nome("Gianni"))

//Arrow function sem return
const add = n => n+10

console.log(add(10))