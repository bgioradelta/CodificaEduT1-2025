// let i = 0

// while(i <= 10){
//     console.log(`10 x ${i} = ${10 * i}`)
//     i++
// }

// Outras formas:


let prompt = require('prompt-sync')(); 

let num1 = Number(prompt("Digite o número que você quer saber a tabuada"))

let i = 1

while(i <= 10){
    console.log('tabuada do',num1, i*num1)
    i++
}