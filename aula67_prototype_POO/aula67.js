const Nave=function(energia) {
    this.energia=energia
    this.disparos=100
}

const n1=new Nave(100)

Nave.prototype.vidas=3// cria um atributo pra classe Nave
Nave.prototype.disparar=function(){// cria um método pra classe Nave
    if(this.disparos>0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)