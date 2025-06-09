// 两数相加

var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) {
    // 递归边界
    return null;
  }

  let s = carry;
  if (l1) {
    s += l1.val; // 累加进位与节点值
    l1 = l1.next;
  }
  if (l2) {
    s += l2.val;
    l2 = l2.next;
  }

  // s 除以 10 的余数为当前节点值，商为进位
  return new ListNode(s % 10, addTwoNumbers(l1, l2, Math.floor(s / 10)));
};

var addTwoNumbers = (l1, l2) => {
  let h = null, t = null
  let carry = 0
  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    let sum = v1 + v2 + carry

    h ? t = t.next = new ListNode(sum % 10) : h = t = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry > 0) t.next = new ListNode(carry)
  return h
}
