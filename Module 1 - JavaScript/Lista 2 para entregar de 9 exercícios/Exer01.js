//1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  // valores devem ser números inteiros positivos
  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    return false
  }

  // mês deveser de 1 a 12
  if (mes < 1 || mes > 12) {
    return false
  }

  // verifica se o ano é bissexto
  function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
  }

  // dias dos meses (condição para fevereiro)
  const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // verifica se o dia é válido para o mês e ano fornecidos
  return dia >= 1 && dia <= diasPorMes[mes - 1]
}

// alguns testes:
console.log(ehDataValida(29, 2, 2024)) // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)) // false (não é bissexto)
console.log(ehDataValida(31, 4, 2023)) // false (abril tem 30 dias)
console.log(ehDataValida(31, 12, 2023)) // true