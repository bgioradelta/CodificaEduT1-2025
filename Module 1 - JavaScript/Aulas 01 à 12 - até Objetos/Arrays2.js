const numbers = [0, 2, 3, 14, 5, 46, 7, 38, 9, 110];
const numbers2 = [0, 2, 3, 14, 5, 46, 7, 38, 9, 110];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);


let ordem = numbers2.sort((a, b) => a - b);

console.log(ordem);

let n = numbers.length
console.log(n)


// Bubble sort
// for (let i = 0; i < numeros.length - 1; i++) {
//     for (let j = 0; j < numeros.length - 1 - i; j++) {
//       if (numeros[j] > numeros[j + 1]) {
//         let temp = numeros[j];
//         numeros[j] = numeros[j + 1];
//         numeros[j + 1] = temp;
//       }
//     }
//   }
  