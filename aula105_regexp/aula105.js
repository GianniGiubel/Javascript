let nome= new String("Gianni Francesco Pires Giubel 1986")// Objeto string
let email="gianni.giubel@gmail.com.br"
let numeros="1,10,100,1000" 

console.log(nome)

console.log(nome.search(/francesco/i))// i = retira o case sensitive

console.log(nome.match(/e/ig))// g = indica todos os valores que tiverem na string

console.log(nome.replace(/e/ig,"Francisco"))

console.log(nome.match(/[c-n|0-9]/ig))// [] = padrões a serem seguidos

//META CARACTERES
console.log(nome.match(/\d/ig))// \d = números
console.log(nome.match(/\s/ig))// \s = espaços
console.log(nome.match(/\bg/ig))// \b = caracteres alfa numéricos, DWORD

//QUANTIFICADORES
console.log(nome.match(/i+|s+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))