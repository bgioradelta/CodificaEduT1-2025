// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

// OBS.:
/* A função debounce é usada para evitar que uma função seja executada várias vezes seguidas 
em um curto período de tempo. Ela só permite que a função seja chamada após um tempo (delay) 
sem novas chamadas. */

function debounce(fn, delay) {
  let timeoutId

  return function(...args) { // ...args é a sintaxe de "rest parameters" do JavaScript. Ela serve para capturar todos os argumentos passados para uma função e agrupá-los em um array.
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function HorseWithNoName(name) {
  console.log(`Campeão, ${name}!`)
}

const debouncedHello = debounce(HorseWithNoName, 1000)

debouncedHello("Tráfico")
debouncedHello("Panther")
debouncedHello("Grêmio")
// Apenas a última será impressa após 1 segundo sem novas chamadas
