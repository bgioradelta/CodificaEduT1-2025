// Ver após a primeira meia-hora

function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(3))

function fibo(n) {
    if (n <= 0) return 0
    if (n === 1) return
    return fibo(n - 1) + fibo(n - 2)
}

// Exemplo de uso:
console.log(fibo(10))

function printFibo() {
    const sequence = []

    for (let i = 0; i < 10; i++) {
        sequence.push(fibonacci(i))
    }

    console.log(sequence.join(', ') + '.')
}

printFibo()


const categorias = [{
    id: 1,
    nome: "eletronicos",
    filhos: [
        {id: 2, nome: "celulares", filhos: []},
        {id: 3, nome: "computadores", filhos: [
            {id: 4, nome: "notebooks", filhos: []}
        ]},
    ]
},
{
    id: 5,
    nome: "Roupas",
    filhos: []
}
]

function imprimirCategorias(categorias, nivel = 0) {
  categorias.forEach((categoria) => {
    console.log(" ".repeat(nivel * 4) + categoria.nome.toLowerCase());
    if (categoria.filhos.length > 0) {
      imprimirCategorias(categoria.filhos, nivel + 1);
    }
  });
}

imprimirCategorias(categorias);