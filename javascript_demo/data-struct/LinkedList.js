// 单链表

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    if (!value) throw new Error('Invalid value');
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // 删除最后一个元素
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  // 头部添加元素
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // 删除头部元素
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }
  // 获取指定位置的元素
   get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
   }
   // 修改指定位置的元素
   set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
   }
   // 在指定位置插入元素
   insert(index, value) {
     if (index === 0) return this.unshift(value);
     if (index === this.length) return this.push(value);
     if (index < 0 || index > this.length) return false;
     const newNode = new Node(value);
     const temp = this.get(index - 1);
     newNode.next = temp.next;
     temp.next = newNode;
     this.length++;
     return true;
   }

   // 删除指定位置的元素
   remove(index) {
     if (index === 0) return this.shift();
     if (index === this.length - 1) return this.pop();
     if (index < 0 || index >= this.length) return undefined;
     const temp = this.get(index - 1);
     const removed = temp.next;
     temp.next = temp.next.next;
     this.length--;
     return removed;
   }

   // 翻转链表
   reverse() {
    // 1. 首尾交换
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    // 2. 中间元素翻转
    let next = temp.next;
    let prev = null; // 设置一个变量，用来存储上一个元素
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
   }
}

