// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)

        if (cache.has(key)) {
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const fastFib = memoize(function fibonacci(n) {
    if (n < 2) return n
    return fastFib(n - 1) + fastFib(n - 2)
})

console.log(fastFib(40))  // + rápido com memoization
