function bubbleSort(array) {
    let n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return array;
  }

let numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Antes:", numeros);
console.log("Depois:", bubbleSort(numeros));

// function showFunction(pato, lino) {
//     if(true) {
//         pato('Sucesso na requisição')
//     } else {
//         lino('erro na requisição')
//     }
// }

// let successCallback = (message) => {console.log(message)}

// let errorCallback = function(message) {
//     console.log(message)
// }

// showFunction(successCallback, errorCallback)

// -------------

// funcao que retorne a soma dos elementos de um array

function somaArray(arr) {
    let soma = 0
  
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i]
    }
  
    return soma
  }
  

  let numer = [1, 2, 3, 4, 5]
  console.log("Tua soma é ", somaArray(numer))

  // ------------- Maior numero do array

  function maiorNumero(arr) {
    if (arr.length === 0) return undefined
  
    let maior = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maior) {
        maior = arr[i];
      }
    }
  
    return maior;
  }
  
  
  let nume = [10, 5, 22, 8, 17];
  console.log("Maior número:", maiorNumero(nume)); // Saída: 22
  
  // Callback exemplo aula:

  let ParOuImpar = function(valor) {
    let resultado
    if(valor % 2 === 0) {
        resultado = 'PAR'
    } else {
        resultado = 'ÍMPAR'
    }
    return resultado
}
function VerificaArrayPares(arr, callback) {
    let pares = []

    for(let i = 0; i < arr.length; i++) {
        let resultado = callback(arr[i])
        if(resultado == 'PAR'){
            pares.push(arr[i])
        }
    }
    return pares
}

console.log(VerificaArrayPares([1, 2, 3, 4, 8], ParOuImpar))