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

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  //Add each link together until one of the arrays is out of links;
  var firstList = l1;
  var secondList = l2;
  var leftOver = 0;
  var headNode;
  var currNode;

  while(firstList || secondList) {
    var currNodeValue = 0;
    var addLeftOver = 0;
    var firstValue = firstList.val || 0;
    var secondValue = secondList.val || 0;
    var value = (parseInt(firstValue) + parseInt(secondValue));

    if(value >= 10 && leftOver) {
      addLeftOver = value + leftOver;
      currNodeValue = addLeftOver % 10;
      leftOver = Math.floor(addLeftOver / 10);
    } else if (value >= 10) {
      leftOver = Math.floor(value / 10);
      currNodeValue = value % 10;
    } else if (leftOver) {
      currNodeValue = (value % 10) + leftOver;
      leftOver = 0;
    } else  {
      currNodeValue = value % 10;
    }

    var newNode = new ListNode(currNodeValue);
    if(!headNode) {
      headNode = newNode;
      currNode = newNode;
    } else {
      currNode.next = newNode;
      currNode = newNode;
    }

    if(firstList.next) {
      firstList = firstList.next;
    } else {
      firstList 
    }

    if(secondList.next) {
      secondList = secondList.next;
    }
  }

  return headNode;
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

var l1 = createNodes(243);
var l2 = createNodes(564);


console.log(addTwoNumbers(l1, l2));
// console.log(addTwoNumbers(createNodes(0), createNodes(0)));
// console.log(addTwoNumbers(createNodes(1000000000000000000000000000001), createNodes(564)));

// console.log(1000000000000000000000000000001 + 564);

// [1,8]
// [0]