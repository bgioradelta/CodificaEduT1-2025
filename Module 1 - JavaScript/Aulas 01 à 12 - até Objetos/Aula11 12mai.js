// Características de um objeto:
// O que aue ele tem, o que ele faz, e como ele está
// Ou... Atributo, função e estado

const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  dataDeLancamento: "1899",
  
  mostrarCaracteristicas: function () {
    return `O livro '${this.titulo}', do autor ${this.autor}, foi lançado no ano de ${this.dataDeLancamento}.`;
  }
};

console.log(livro.mostrarCaracteristicas());
// console.log(livro.titulo);
// console.log(livro.autor);
// console.log(livro.dataDeLancamento);

let serie = {
  title: 'Lost',
  author: 'J.J. Abrams',
  release: '2004',

  showCharac: function  () {
    return `A série de TV '${this.title}', lançada no ano ${this.release}, foi escrita por ${this.author}.`
  }
}

console.log(serie.showCharac())
console.log(serie)

function jogos(title, genre, release, company, plau) {
  return { title, genre, release, company, plau };
}

let jogo = jogos("Dragon Age", "RPG", "2009", "Bioware", () => console.log("morrendo"));

jogo.plau(); // Output: morrendo

// for...in

let personagens = ['Seiya', 'Aiorous', 'Simba']
for (let key in personagens) {
  console.log(personagens[key])
}

// for... of

let palavra = 'teste'

for(let personagem of personagens) {
  console.log(personagem)
}