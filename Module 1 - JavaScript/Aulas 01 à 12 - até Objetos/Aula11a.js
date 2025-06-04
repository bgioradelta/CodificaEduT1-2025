// const user = {
//   name: "Alice",
//   age: 30,
//   isMember: true
// };

// console.log(user); 

// // Output: ["name", "age", "isMember"]

// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// Object.keys(person).forEach(key => {
//   console.log(key, person[key]);
// });

let professor = {
  nome: "Stark",
  disciplina: "Física",
  notas: {
    aluno1: [2, 5],
    aluno2: [3, 2]
  }
}

// Percorrendo as notas dos alunos
for (let estudante in professor.notas) {
  console.log(estudante + ": " + professor.notas[estudante])
}

// Then:

let somaNotas = 0;
let quantidadeEstudantes = 0;

for (let estudante in professor.notas) {
  let notas = professor.notas[estudante];
  
  for (let nota of notas) {
    somaNotas += nota;
    quantidadeEstudantes++;
  }
}

let mediaProfessor = somaNotas / quantidadeEstudantes;
console.log(`Média do professor ${professor.nome}: ${mediaProfessor.toFixed(2)}`);