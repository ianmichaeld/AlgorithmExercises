/*
Given two non-empty linked lists representing non-negative integers, with 
digits stored in reverse order with a single digit in each node, add the two 
numbers and return it as a linked list.

Example: Given l1 is the linked list (5 -> 2 -> 7) and l2 is the linked list 
(9 -> 2 -> 4), return the linked list (4 -> 5 -> 1 -> 1) because 725 + 429 = 1154.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function(l1, l2) {
  const sum = new ListNode(0)
  let currentNode = sum
  let previousNode = null
  while (l1 || l2) {
    let digitSum = l1 && l2 ? l1.val + l2.val : l1 ? l1.val : l2.val
    digitSum += currentNode.val
    currentNode.val = digitSum % 10
    currentNode.next = new ListNode(Math.floor(digitSum / 10))
    previousNode = currentNode
    currentNode = currentNode.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  if (currentNode.val === 0) {
    previousNode.next = null
  }
  return sum
}
