let fruitList = []
let nameList = ['Bruno', 'Froelich', 'Giora', 'Vieira']

fruitList[0] = 'Maçã'
fruitList[1] = 'Banana'

console.table(fruitList)

for(let i = 0; i < nameList.length; i++){
    console.log(nameList[i])
}

fruitList.unshift('Abacaxi') // add na 1ª posição
fruitList.push('Pera') // add na última posição

console.log(fruitList[0])

// fruitList.shift() // Retira a 1ª posição
// fruitList.pop() // Retira a última posição

console.table(fruitList)

let resultado = fruitList.indexOf('Pera')

console.log(resultado)