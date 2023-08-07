//Função geradora
function* cores() {
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}
const ite = cores()
//console.log(ite.next().value)//retorna VERMELHO
//console.log(ite.next().value)//retorna VERDE
//console.log(ite.next().value)//retorna AZUL

function* perguntas() {
    const nome=yield 'Qual é seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte
}
const itp = perguntas()
//console.log(itp.next().value)
//console.log(itp.next('Gianni').value)
//console.log(itp.next('Natação').value)

function* contador() {
    let i=0
    while(true) {
        yield i++
        if(i>5) {
            break
        }
    }
}
const itc=contador()
for(let i of itc) {
    console.log(i)
}