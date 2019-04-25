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
      for(var i = arrayList.length-1; i >= 0; i-=1) {
        this.add(arrayList[i]);
      }

      return this.head;
  }

  function iterate(linkList) {
    var total = "";
    var currNode = linkList.head;

    while (currNode !== null) {
      total = currNode.val.toString() + total;
      currNode = currNode.next;
    }

    return parseInt(total);
  }

  var numOne = iterate(l1);
  var numTwo = iterate(l2);
  var total = (numOne + numTwo).toString();

  var returnLink = new LinkList();
  returnLink.addMany(total);
  return returnLink;
};

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

var linkMeOne = new LinkList();
linkMeOne.add(2);
linkMeOne.add(4);
linkMeOne.add(3);
console.log(linkMeOne);

var linkMeTwo = new LinkList();
linkMeTwo.add(5);
linkMeTwo.add(6);
linkMeTwo.add(4);
console.log(linkMeTwo);

console.log(addTwoNumbers(linkMeOne, linkMeTwo));
