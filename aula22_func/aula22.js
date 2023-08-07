/*function soma(p1) {
    console.log(p1)
}

soma("Gianni")
soma(2022)
soma(5.2)

function soma2(n1,n2) {
    console.log(n1+n2)
}

soma2("Gianni", " Francesco")
soma2(2022, 2023)
soma2(5.2,4.8)

function soma3(n1,n2=10) {
    console.log(n1+n2)
}
soma3(5)
*/

function soma4(n1=0,n2=0) {
    return n1+n2
}
//console.log(soma4(10,5))

let valor=0

function add(v) {
    valor+=v
}
console.log(valor)
add(10)
console.log(valor)
