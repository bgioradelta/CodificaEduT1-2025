class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    }

    this.rear = newNode;
    if (!this.front) {
      this.front = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.front) return null;

    let dequeuedValue = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    this.size--;
    return dequeuedValue;
  }
}
