/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function LinkList() {
    this.head = null;
    this.tail = null;
  }

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  LinkList.prototype.add = function(val) {
    var newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  LinkList.prototype.addMany = function(val) {
    var arrayList = val.split("");
    for (var i = arrayList.length - 1; i >= 0; i -= 1) {
      this.add(arrayList[i]);
    }

    return this.head;
  };

  function iterate(linkList) {
    var total = "";
    var currNode = linkList;

    while (currNode !== null) {
      total = currNode.val + total;
      currNode = currNode.next;
    }

    return parseInt(total);
  }

  function createNodes(number) {
    var numberArray = number.toString().split("");
    var headNode;
    var currNode;
    for (var i = numberArray.length-1; i >=0 ; i -= 1) {
      var newNode = new ListNode(numberArray[i]);
      if (!headNode) {
        headNode = newNode;
        currNode = newNode;
      } else {
        currNode.next = newNode;
        currNode = newNode;
      }
    }

    return headNode;
  }

  var numOne = iterate(l1);
  var numTwo = iterate(l2);
  var total = (numOne + numTwo).toString();

  var rtnVal = createNodes(total);

  return rtnVal;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createNodes(number) {
  var numberArray = number.toString().split("");
  var headNode;
  var currNode;
  for (var i = 0; i < numberArray.length; i += 1) {
    var newNode = new ListNode(numberArray[i]);
    if (!headNode) {
      headNode = newNode;
      currNode = newNode;
    } else {
      currNode.next = newNode;
      currNode = newNode;
    }
  }
  return headNode;
}

// console.log(addTwoNumbers(createNodes(243), createNodes(564)));
// console.log(addTwoNumbers(createNodes(0), createNodes(0)));
console.log(addTwoNumbers(createNodes(1000000000000000000000000000001), createNodes(564)));
