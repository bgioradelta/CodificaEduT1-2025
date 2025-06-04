// Um objeto é, por definição, uma instância de uma classe. Uma classe é um modelo ou "plano de 
// construção" para criar objetos, enquanto um objeto é uma realização concreta e específica desse modelo. 


class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class SimplyLinkedList {
    constructor() {
        this.head = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir() {
        let atual = this.head
        let str = "";
        while (atual) {
            str += atual.valor + " -> "
            atual = atual.proximo
        }
        str += "null"

        console.log(str); // Make sure to print the string!
    }
}

// Creating and using the linked list
const lista = new SimplyLinkedList()

lista.inserirInicio(40)
lista.inserirInicio(30)
lista.inserirInicio(20)
lista.inserirInicio(10)


lista.imprimir()