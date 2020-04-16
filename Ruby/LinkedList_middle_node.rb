# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
  pointerA = pointerB = head
  while pointerB
      pointerB = pointerB.next
      break if pointerB == nil
      pointerA, pointerB = pointerA.next, pointerB.next
  end
  pointerA
end