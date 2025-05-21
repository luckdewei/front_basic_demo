// 141. 环形链表
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
  return false;
};

// 142 环形链表 II

var detectCycle = function (head) {
  let slow = head
  let fast = head
  while(fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if(fast === slow) {
          while (slow !== head) {
              slow = slow.next
              head = head.next
          }
          return slow
      }
  }
  return null
};

// 151 反转字符串中的单词

var reverseWords = function(s) {
  let l = 0
  let r = 0
  let stack = []
  while(r < s.length) {
    if (s[r] === ' ' && s[l] === ' ') {
      l++,r++
    }
    if (s[l] !== ' ' && l < s.length) {
      r+=1
      while(s[r]!==' ' && r < s.length) {
        r++
      }
      stack.unshift(s.slice(l, r))
      l = r
    }
  }
  return stack.join(' ')
};

// 160 相交链表

var getIntersectionNode = function(headA, headB) {
  let p1 = headA
  let p2 = headB
  while(p1 !== p2) {
      p1 = p1 === null ? headB : p1.next
      p2 = p2 === null ? headA : p2.next
  }
  return p1
};