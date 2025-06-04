// Continuação: fazer os 3 últimos:

class Node {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        if (this.head) {
            this.head.anterior = novo
        }
        this.head = novo
    }

    inserirFim(v) { // inserir no fim
        let novo = new Node(v)
        novo.anterior = this.tail
        if (this.tail) {
            this.tail.proximo = novo
        }
        this.tail = novo
        }

    imprimirFrente() {  // imprimir o elemnto na frente
    let atual = this.head;
    while (atual) {
        console.log(atual.valor)
        atual = atual.proximo;
        }
    }

    imprimirAtras() { // imprimir o elemento de trás para frente
      let atual = this.tail;
    while (atual) {
        console.log(atual.valor)
        atual = atual.anterior;
        }    
    }
}

let lista = new DoublyLinkedList()
lista.inserirInicio(10)
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)

lista.imprimirFrente() // Saída esperada: 40, 30, 20, 10

lista.inserirFim(10)
lista.inserirFim(20)
lista.inserirFim(30)
lista.inserirFim(40)

console.log("Trás:");
lista.imprimirAtras(); // Saída: 40, 30, 20, 10, 10, 20, 30, 40