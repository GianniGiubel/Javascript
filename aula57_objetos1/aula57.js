// class pessoa {
//     constructor(pNome) {
//         this.nome=pNome
//     }
// }

// let p1= new pessoa("Bruno")
// let p2= new pessoa("Gianni")
// let p3= new pessoa("Pires")

// console.log(p1.nome)
// console.log(p2.nome)
// console.log(p3.nome)

class Carro{
    constructor(cNome,cTipo){
        this.nome=cNome
        if(cTipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        } else if(cTipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        } else if(cTipo==3){
            this.tipo="Passeio"
            this.velmax=160
        } else {
            this.tipo="Militar"
            this.velmax=180
        }
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velcidade máxima: ${this.velmax}`)
        console.log(`---------------------`)
    }
}

let carro1= new Carro("Rapidão",1)
let carro2= new Carro("Super Luxo",2)
let carro3= new Carro("Bombadão",4)
let carro4= new Carro("Carrego Tudo",3)

carro1.info()
carro2.info()
carro3.info()
carro4.info()
