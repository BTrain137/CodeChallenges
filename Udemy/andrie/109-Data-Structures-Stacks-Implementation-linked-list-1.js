class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
  }
  pop() {
    const tempNode = this.top;
    this.top = this.top.next;
    this.length--;
    return tempNode.value;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack);

//Discord
//Udemy
//google
