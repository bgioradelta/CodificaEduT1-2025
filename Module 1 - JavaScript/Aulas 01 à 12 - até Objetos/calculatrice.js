// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Digite o primeiro número: ", function(res1) {
//   rl.question("Digite o segundo número: ", function(res2) {
//     rl.question("Digite a operação (+, -, *, /): ", function(op) {
//       let numero1 = parseFloat(res1);
//       let numero2 = parseFloat(res2);
//       let resultado;

//       if (op === "+") {
//         resultado = numero1 + numero2;
//       } else if (op === "-") {
//         resultado = numero1 - numero2;
//       } else if (op === "*") {
//         resultado = numero1 * numero2;
//       } else if (op === "/") {
//         if (numero2 === 0) {
//           console.log("Erro: divisão por zero!");
//           rl.close();
//           return;
//         }
//         resultado = numero1 / numero2;
//       } else {
//         console.log("Operação inválida.");
//         rl.close();
//         return;
//       }

//       console.log(`Resultado: ${resultado}`);
//       rl.close();
//     });
//   });
// });

// OUTRO JEITO DE FAZER:

// const prompt = require('prompt-sync')()

// let val1 = Number(prompt("Digite o primeiro número: "))
// let val2 = Number(prompt("Digite o segundo número: "))
// let operador = prompt("Digite a operação (+, -, *, /): ")

// let resultado

// if (operador === "+") {
//     resultado = val1 + val2;
//   } else if (operador === "-") {
//     resultado = val1 - val2;
//   } else if (operador === "*") {
//     resultado = val1 * val2;
//   } else if (operador === "/") {
//     if (val2 === 0) {
//       console.log("Erro: divisão por zero!");
//     } else {
//       resultado = val1 / val2;
//     }
//   } else {
//     console.log("Operação inválida!")
//     resultado === undefined
//   }

//   if (resultado !== undefined) {
//     console.error("Resultado: ", resultado)
//   }

// Aprendendo switch:

let opcao = 2

switch(opcao) {
    case 1:
        console.log('Você escolheu a primeira opção')
        break
    case 2:
        console.log('Você escolheu a segundq opção')
        break
    case 3:
        console.log('Você escolheu a terceirq opção')
        break
    default:
        console.log("Você não selecionou uma opção válida!")
        break
}

