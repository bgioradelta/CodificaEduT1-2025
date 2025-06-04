// Seção 2: Funções e Recursão
// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, 
// e n === 0 retornando 1.

function fatorial(n) {
    if (n < 0) {
        throw new Error("Error: ih fudeu, o número negativo apareceu (or 'Factorial not defined for negative numbers')")
    }

    if (n === 0) {
        return 1
    }

    return n * fatorial(n - 1)
}

// exemplos
console.log(fatorial(5))  // 120
console.log(fatorial(0))  // 1
// console.log(fatorial(-2)); // lança u erro, aí esse não funcionas
