/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/

const frase = "Botafogo: campeão mundial!"
const palavras = frase.toLowerCase()
.replace(/[^\p{L}\s]/gu, '') // remove qualquer caractere que não seja uma letra (inclusive acentuada) ou espaço, usando suporte Unicode (u) e aplicando globalmente
.split(" ") 
const unicas = []

for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i]

    // verifica se a palavra ainda não está no array 'unicas'
    let encontrada = false;

    for (let j = 0; j < unicas.length; j++) {
        if (unicas[j] === palavra) {
            encontrada = true
            break
        }
    }

    if (!encontrada) {
        unicas.push(palavra)
    }
}

console.log(unicas)
