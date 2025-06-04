/* console.log("Hello World! 'este'aqui")*/
// console.log('Heelloo people: "teste" aqui')
// console.log(`teste, e teste com crase 'hola'`)

// console.log(1.5)
// console.log(typeof('1.5'), 1000, "bruno")
// let name = 'Hyagy'
// let var1 = 8
// let var2 = 8
// let var4 = 8
// let var5 = 3
// let var7 = 3
// console.log(var1 * var2)
// console.log(typeof('1.5'), 1000, "bruno")

// let name = 'Brubao'
// console.log(name)
// var anotehrNeme = 'Giora'
// console.log(anotehrNeme)
// anotehrNeme = '44'
// console.log(anotehrNeme)
// console.log(typeof(anotehrNeme))

// let nump = '4.7'
// console.log(parseFloat(nump) + 10)

// let num1=6
// let num2 = 5
// console.log(num1 ** num2)

// num1++
// console.log(num1)

// let  cunt = 2
// cunt *= 5
// console.log(++cunt)

// let you = 1
// you += 2
// you += 2
// you += 2
// you += 2
// you += 2
// you += 2

// console.log(you)

// const nota = 50
// if(nota > 60) {
//     console.log(Aprovado)
// } else {
//     console.log('Reprovado')
// }

// const grade = 70;
// if (grade > 60) {
//   console.log("Approved");
// } else {
//   console.log("Reproved");
// }

//idade entre 18 e 32

// const age = 35;

// // if (age >= 18 && age <= 32) {
// //   console.log("PODE");
// // } else {
// //   console.log("Não PÔDE");
// // }

// // let result = (age >= 18 && age <= 32) ? console.log('podemos') : console.log('num pudemo')

// (age >= 18 && age <= 32) ? console.log('podemos') : console.log('num pudemo')

// Exerc 1: Verificar se num é par ou ímpar
// Exerc 2: Encontre o maior de 3 números

// let ipss = 8

// if (ipss % 2 === 0) {
//     console.log('É par')
// } else { 
//     console.log('Num é par')
// }

// Other option

// function checkOddOrEven(num) {
//     if (num % 2 === 0) {
//       console.log(num + " is even");
//     } else {
//       console.log(num + " is odd");
//     }
//   }

// checkOddOrEven(111)

// Exercício 2: (maior de 3 numeros)

// let num1 = 11
// let num2 = 12
// let num3 = 12

// if ((num1 > num2) && (num1 > num3)) {
//     console.log(num1 + ' É o maior')
// } else if ((num2 > num1) && (num2 > num3)) { 
//     console.log(num2 + ' és más grande')
// } else if ((num3 > num1) && (num3 > num2)) {
//     console.log(num3 + ' é o tal')
// } else {
//     console.log('Os números não iguais ou há um empate entre dois ou mais números')
// }

// let numparim = 18
// numparim % 2 === 0 ? console.log('PAR') : console.log('ímpar') 

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Qual é o seu nome? ", function(nome) {
//   console.log("Olá, " + nome + "!");
//   rl.close();
// });


// CALC Sem entrada do usuario
// let numero1 = 10;
// let numero2 = 5;

// console.log("Soma:", numero1 + numero2);
// console.log("Subtração:", numero1 - numero2);
// console.log("Multiplicação:", numero1 * numero2);
// console.log("Divisão:", numero1 / numero2);

// Calc usando entrada do usuario e readline:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro número: ", function(resposta1) {
  rl.question("Digite o segundo número: ", function(resposta2) {
    let numero1 = parseFloat(resposta1);
    let numero2 = parseFloat(resposta2);

    console.log("Soma:", numero1 + numero2);
    console.log("Subtração:", numero1 - numero2);
    console.log("Multiplicação:", numero1 * numero2);
    console.log("Divisão:", numero1 / numero2);

    rl.close();
  });
});
