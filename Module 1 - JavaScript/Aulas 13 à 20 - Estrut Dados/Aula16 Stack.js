class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao topo da pilha
  push(value) {
    this.items.push(value);
  }

  // Remove e retorna o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Retorna o valor do topo da pilha sem removê-lo
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }
}

const pilha = new Stack();
pilha.push(10);
pilha.push(20);
console.log(pilha.peek());    // 20
console.log(pilha.pop());     // 20
console.log(pilha.pop());     // 10
console.log(pilha.pop());     // null
console.log(pilha.isEmpty()); // true
