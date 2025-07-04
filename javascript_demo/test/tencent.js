// 1. 给定2个单向链表，每个节点包含一个0-9的数字，要求返回他们对应节点相加后产生的链表，
// 例如:Input: (2->4->3)+(5 ->6->4)Output: 7 ->0 ->8

var addTwoNumbers = (l1, l2) => {
  let c = 0, h = null, t = null
  while(l1 || l2) {
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    let sum = v1+v2+c
    c = Math.floor(sum/10)
    h ? t.next = new ListNode(sum%10) : t = h = new ListNode(sum%10)
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  if(c) t.next = new ListNode(c)
  return h
}

// 2. 有个小偷来到了一个地方准备实施他的盗窃计划,整个城市类似一个二叉树一样,
// 所有的节点有且仅有一个父亲节点，最多拥有2个孩子节点。
// 每个房子藏有相应的金条，现在有个条件，小偷不允许偷直接相邻2个房子的金条。
// 给定一个房子的布局，求小偷做多能偷取的金条数是多少。

var rob = function(root) {

}

var dfs = function(root) {
  
}




// 3. 二叉树比较
// 1)写出比较两颗二叉树是否相等(包括结构及节点值)的算法
// 2)html节点树能否用1)算法比较，是否存在优化方案?