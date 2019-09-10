class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.arr = []
  }
  peek() {
    return this.arr[this.arr.length -1];
  }
  push(value){
    this.arr.push(value);
  }
  pop(){
    if(this.arr.length < 0) {
      return null;
    }
    return this.arr.pop();
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
