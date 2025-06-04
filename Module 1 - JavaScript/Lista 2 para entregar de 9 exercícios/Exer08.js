//8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: 'Rinalo', total: 100 },
  { cliente: 'Pedrin', total: 50 },
  { cliente: 'Pedrin', total: 175 },
  { cliente: 'Rinalo', total: 150 },
  { cliente: 'Rinalo', total: 150 },
  { cliente: 'Rinalo', total: 35 },
  { cliente: 'Sosa', total: 200 },
  { cliente: 'Sosa', total: 555 },
]


const resultado = vendas.reduce((acc, venda) => {
  const { cliente, total } = venda
  
  if (!acc[cliente]) {
    acc[cliente] = 0
  }

  acc[cliente] += total

  return acc
}, {})

console.log(resultado)
