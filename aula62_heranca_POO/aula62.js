class Carro {// Classe PAI/BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{// Classe FILHO
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const carro1=new Carro("Normal",4)
carro1.ligar()
carro1.setCor("Preto")

const carro2=new Militar("Lutador",1,100,50)
carro2.setCor("Preto")
carro2.atirar()
carro2.atirar()
carro2.atirar()
carro2.atirar()

console.log(`Nome: ${carro1.nome}`)
console.log(`Portas: ${carro1.portas}`)
console.log(`Ligado: ${carro1.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${carro1.vel}`)
console.log(`Cor: ${carro1.cor}`)
console.log(`------------------------`)

console.log(`Nome: ${carro2.nome}`)
console.log(`Portas: ${carro2.portas}`)
console.log(`Ligado: ${carro2.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${carro2.vel}`)
console.log(`Blindagem: ${carro2.blindagem}`)
console.log(`Munição: ${carro2.municao}`)
console.log(`Cor: ${carro2.cor}`)
console.log(`------------------------`)