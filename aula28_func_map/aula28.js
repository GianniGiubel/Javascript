//.MAP pode receber 3 parâmetros: o elemento, o indice(posição), e o próprio array que ele vai mapear

const converterint = (e)=>parseInt(e)
const dobrar = (e)=>e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)

// const el=document.getElementsByTagName("div")
// const valores=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
//  console.log(valores)

// let el=document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="Gianni"
// })

// const cursos = ['HTML','CSS','Javascript','PHP', 'React']
// cursos.map(elemento, indice)
// cursos.map((el,i)=>{
//     console.log("Curso: " + el + "Posição do Curso: " + i)
// })

// let c=cursos.map((el,i)=>{
//    return el
// })
// console.log(c)

// let c=cursos.map((el,i)=>{
//    return "<div>"+el+"</div>"
// })
// console.log(c)