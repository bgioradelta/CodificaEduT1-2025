// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

// OBS.: Resuolvi fazer com 'readline' ao invés de 'prompt-sync' para testat diferentes jeitos
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

function perguntar() {
    rl.question('Adivinhe um número entre 1 e 100: ', (resposta) => {
        const palpite = parseInt(resposta)
        tentativas++

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log('Por favor, insira um número válido entre 1 e 100.')
        } else if (palpite < numeroSecreto) {
            console.log('Mais alto!')
        } else if (palpite > numeroSecreto) {
            console.log('Mais baixo!')
        } else {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`)
            rl.close()
            return
        }

        perguntar() // repete até acertar
    })
}

perguntar()