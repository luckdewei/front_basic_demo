// 19 删除链表的倒数第 N 个结点
var removeNthFromEnd = function (head, n) {
  const prehead = new ListNode(-1);
  prehead.next = head;
  let slow = prehead;
  let fast = prehead;
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return prehead.next;
};


// 26 删除有序数组中的重复项

var removeDuplicates = function(nums) {
  const len = nums.length
  let j = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] !==nums[j]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j+1
};


// 27 移除元素

var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let l = i + 1;
      while (l<nums.length) {
        if (nums[l] == nums[i]) {
          l++;
        } else {
          let temp;
          temp = nums[i];
          nums[i] = nums[l];
          nums[l] = temp;
          break
        }
      }
    }
  }
  for (let i = 0;i < nums.length; i++ ) {
    if (nums[i]!== val) {
      count++
    }
  }
  return count
};

// 28 找出字符串中第一个匹配项的下标

var strStr = function (haystack, needle) {
  const hLen = haystack.length;
  const nLen = needle.length;
  for (let i = 0; i < hLen; i++) {
    if (nLen > hLen) return -1
    if (nLen < 2) {
      if (haystack[i] !== needle[0]) continue;
      else {
        return i
      }
    } else {
      if (hLen - i < nLen - 1 && haystack[i] !== needle[0]) return -1;
      if (haystack[i] !== needle[0]) continue;
      let l = i + 1;
      let r = 1;
      while (l - i < nLen) {
        if (haystack[l] === needle[r]) {
          if(r === nLen -1) return i
          l++;
          r++;
        } else {
          break
        }
      }
    }
  }
  return -1;
};