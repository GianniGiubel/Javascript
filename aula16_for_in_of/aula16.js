let num = [10,20,30,40,50]

for(let i=0;i<num.length;i++) {
    console.log(num[i])
}

for(n in num){          //pega as posições dos elementos no array
    console.log(n)
}
for(n of num) {         //pega os valores dos elementos no array
    console.log(n)
}