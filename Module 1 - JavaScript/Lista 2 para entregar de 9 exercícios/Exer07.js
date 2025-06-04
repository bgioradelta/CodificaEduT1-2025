// Seção 3: Arrays e Objetos Complexos
// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 600 },
    { nome: "Mouse", preco: 50 },
    { nome: "Webcam", preco: 300 },
    { nome: "Motherboard", preco: 1000 },
    { nome: "CD-ROM", preco: 25 },
]

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
        .map(produto => produto.nome)      // extrai apenas os nomes
}


console.log(nomesOrdenadosPorPreco(produtos))
