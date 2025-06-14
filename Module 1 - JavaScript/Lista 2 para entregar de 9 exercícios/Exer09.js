// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

// 1. Agrupamento por Propriedade usando reduce
const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'João', total: 50 },
  { cliente: 'Ana', total: 150 },
  { cliente: 'Pedrin', total: 1999 }
];

const agruparPorCliente = vendas.reduce((acc, venda) => {
  const { cliente, total } = venda

  if (!acc[cliente]) {
    acc[cliente] = 0
  }

  acc[cliente] += total

  return acc
}, {})

console.log('Agrupamento por cliente:', agruparPorCliente)
// Saída esperada: { Ana: 250, João: 50, Maria: 200 }


// 2. Conversão: paresParaObjeto
function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor
    return obj
  }, {})
}

// 3. Conversão: objetoParaPares
function objetoParaPares(obj) {
  return Object.entries(obj)
}

// Testes:
const pares = [['nome', 'Ana'], ['idade', 30]]
const obj = { nome: 'Ana', idade: 30 }

console.log('paresParaObjeto:', paresParaObjeto(pares))
// Saída esperada: { nome: 'Ana', idade: 30 }

console.log('objetoParaPares:', objetoParaPares(obj))
// Saída esperada: [['nome', 'Ana'], ['idade', 30]]
