// const numeros = [1, 3, 5, 8, 10, 14, 15, 16, 19, 20];
// let pares2 = []
// // Calcular a soma
// const soma = numeros.reduce((acucu, valulu) => acucu + valulu, 0);

// // Calcular a média
// const media = soma / numeros.length;

// // Filtrar os números pares
// const pares = numeros.filter(numulu => numulu % 2 === 0);

// // Imprimir no console
// console.log("Array original:", numeros);
// console.log("Soma:", soma);
// console.log("Média:", media);
// console.log("Array de pares:", pares);

// let soma2 = 0

// for(let i = 0; i < numeros.length; i++){
//     soma2 += numeros[i]
//     if(numeros[i] % 2 === 0) {
//         pares2.push(numeros[i])
//     }
// }

// let media2 = soma2/numeros.length

// console.log(soma2)
// console.log(media2)
// console.log(numeros.length)
// console.table(pares2)


// Bubble Sort em Javascript:
let numeros = [3, 2, 7, 19, 6, 4, 2, 10]

console.log(numeros.length)

let n = numeros.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // Troca
            const temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.table(numeros);