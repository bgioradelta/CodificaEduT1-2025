const prompt = require('prompt-sync')();

let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Digite o segundo número: "));

while (b !== 0) {
  let resto = a % b;
  a = b;
  b = resto;
}

console.log(`O MDC é ${a}`);
48