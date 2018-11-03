const removeNthNodeFromEnd = (head, n) => {
  let pointerA = head
  let pointerB = head
  for (let i = 0; i < n; i++) {
    pointerA = pointerA.next
  }
  if (!pointerA) {
    pointerB.value = pointerB.next.value
    pointerB.next = pointerB.next.next
    return
  }
  while (pointerA.next) {
    pointerA = pointerA.next
    pointerB = pointerB.next
  }
  pointerB.next = pointerB.next.next
}

export default removeNthNodeFromEnd
