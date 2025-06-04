
// console.log(Math.floor(Math.random()*100))
// console.log(parseInt(Math.random()*100))

// let date = new Date

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(2025, 7, 8)
// let date2 = new Date(1997, 11, 17)

// console.log(date1.toString())
// console.log(date2.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs((date.getTime()) - date2.getTime())

// console.log(milissegundosEntreDatas)

// let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000)

// console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia)} dias`)

// // function reverseString(str) {
// //   return str.split("").reverse().join("");
// // }

// // console.log(reverseString('Socorram-me, subi no ônibus em Marrocos!'));

// // Formatar Data:

// function formatDate(date) {
//   let day = date.getDate().toString().padStart(2, '0');
//   let month = (date.getMonth() +1).toString().padStart(2, '0');
//   let year = date.getFullYear()
//   return day + '/' + month + '/' + year
// }

// console.log(formatDate(date));

// //Gerar um número randômico entre dois números:

// // Entre 10 e 20, por exemplo:

// console.log(Math.floor(Math.random()))
// console.log((Math.random()))

// let randomDecimal = Math.random() * (50 - 15) + 15;
// console.log(Math.ceil(randomDecimal));

// //Function de integer entre 15 e 50

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage:
// console.log(getRandomInteger(15, 50)); // e.g., 27

// Contar vogais em uma string:

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Exemplo de uso:
console.log(countVowels("Olá, mundo!")); // Saída: 4
