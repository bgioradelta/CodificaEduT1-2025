// // while, do-while, (for), for in, (for of), (forEach)
// // () mais comuns e mais usadas
// // for in representa o indice
// // for of representado o valor(atributo) do objeto
 
// const livraria = [
//   { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
//   { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1966 },
//   { titulo: "1984", autor: "George Orwell", ano: 1949 },
//   { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
//   { titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937 },
//   { titulo: "Grande Sertão: Veredas", autor: "João Guimarães Rosa", ano: 1956 },
//   { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
//   { titulo: "A Casa Verde", autor: "Mario Vargas Llosa", ano: 1943 },
//   { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
//   { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 }
// ]

// // Exibindo os livros
// livraria.forEach((livro, index) => {
//   console.log(`Livro ${index + 1}: "${livro.titulo}", de ${livro.autor} (${livro.ano})`)
// })

// // Filtrar e exibir livros publicados antes de 1950
// console.log("📚 Livros publicados antes de 1950:");
// // livraria.forEach(livro => {
// // for (const livro of livraria) {    
// //   if (livro.ano < 1950) {
// //     console.log(`"${livro.titulo}", de ${livro.autor} (${livro.ano})`);
// //   }
// // }

// for(let book of livraria) {
//     if(book.ano < 1950) {
//         console.log(book)
//     }
// }
// console.log('Outro exercício:')

// const filmes = [
//   { titulo: "John Wick", genero: "Ação", ano: 2014 },
//   { titulo: "Mad Max: Estrada da Fúria", genero: "Ação", ano: 2015 },
//   { titulo: "Gladiador", genero: "Ação", ano: 2000 },
//   { titulo: "Forrest Gump", genero: "Drama", ano: 1994 },
//   { titulo: "A Vida é Bela", genero: "Drama", ano: 1997 },
//   { titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972 },
//   { titulo: "Clube da Luta", genero: "Drama", ano: 1999 },
//   { titulo: "Interestelar", genero: "Ficção Científica", ano: 2014 },
//   { titulo: "Blade Runner 2049", genero: "Ficção Científica", ano: 2017 },
//   { titulo: "Matrix", genero: "Ficção Científica", ano: 1999 }
// ]

// const contagem = {}

// for (const filme of filmes) {
//   if (contagem[filme.genero]) {
//     contagem[filme.genero]++;
//   } else {
//     contagem[filme.genero] = 1;
//   }
// }

// // Exibir resultado
// console.log("🎥 Quantidade de filmes por gênero:")
// for (const genero in contagem) {
//   console.log(`${genero}: ${contagem[genero]}`)
// }

let n1 = 0;
let n2 = 1;
let fib;

console.log(n1)
console.log(n2)

for (let i = 1; i <= 8; i++) {
  fib = n1 + n2;
  console.log(fib);
  n1 = n2;
  n2 = n1 + n2;
}

