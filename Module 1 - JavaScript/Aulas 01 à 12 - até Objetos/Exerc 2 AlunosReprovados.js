//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que 
// leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, 
// calcule e escreva:

//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)

//[Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (percentual de alunos reprovados em relação ao total de alunos das duas

let alunosC = 60
let alunosD = 20

let PctC= 10/100
let AprovD = 85/100

let ReprovD = 15

let loucuradoProf = (((PctC*alunosC)+(alunosD-(AprovD*alunosD)))/80)*100

console.log(`A qtd de alunos reprovados na turma C foi de ${PctC*alunosC}` )
console.log(`A qtd de alunos Aprovados na turma D foi de ${(AprovD*alunosD)}` )
console.log(`Percentual de alunos reprovados em relação ao total de alunos das duas ${loucuradoProf.toFixed(2)}`)