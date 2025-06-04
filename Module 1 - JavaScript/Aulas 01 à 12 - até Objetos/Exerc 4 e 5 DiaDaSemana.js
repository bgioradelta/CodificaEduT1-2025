//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). 
// Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

// const prompt = require('prompt-sync')();

// const dia = prompt('Digite o dia da semana: ');

// switch (dia) {
//     case 'Segunda':
//     case 'Terça':
//     case 'Quarta':
//     case 'Quinta':
//     case 'Sexta':
//         console.log('Dia útil');
//         break;
//     case 'Sábado':
//     case 'Domingo':
//         console.log('Final de semana');
//         break;
//     default:
//         console.log('Fim do mundo');
// }

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. 
// Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
// Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

const prompt = require('prompt-sync')();

let num;

do {
    num = Number(prompt('Digite um número: '));
    
    if (num > 0) {
        console.log('POSITIVO');
    } else if (num < 0) {
        console.log('NEGATIVO');
    }
    // Quando for 0, não imprime nada e simplesmente encerra
} while (num !== 0)