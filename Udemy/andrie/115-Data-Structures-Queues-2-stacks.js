//https://leetcode.com/problems/implement-queue-using-stacks/description/
function Node(value) {
    this.value = value;
    this.next = null;
  }

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.first = null;
  this.last = null;
  this.length = 0;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const newNode = new Node(x);
  if(this.length === 0) {
    this.first  = newNode;
    this.last = newNode;
  }
  else {
    this.last.next = newNode;
    this.last = newNode;
  }
  this.length++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const tempNode = this.first;
  this.first = this.first.next;
  this.length--;
  return tempNode.value;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.first.value;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if(this.length > 0) {
    return false;
  }
  else {
    return true;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const queue = new MyQueue();

queue.push(1);
queue.push(2);  
console.log(queue.peek());  // returns 1
console.log(queue.pop());   // returns 1
console.log(queue.empty()); // returns false