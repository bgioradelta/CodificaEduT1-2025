function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Versão memoizada de fibonacci
const fastFib = memoize(function(n) {
    if (n < 2) return n;
    return fastFib(n - 1) + fastFib(n - 2);
});

console.log(fastFib(47));     // Rápido, usa memoization
console.log(fibonacci(47));   // Muito mais lento
