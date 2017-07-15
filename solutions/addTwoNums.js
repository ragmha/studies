/**
 * 2. Add Two Numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/** Solution 1 [Medium]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNums = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let curr = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;

    let sum = carry + x + y;
    carry = sum / 10;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};

/** Solution 2 [Medium]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNums = (l1, l2) => {
  let list = new ListNode(0);
  let result = list;
  let curr;

  while (l1 !== null || l2 !== null) {
    curr = result.next || list;
    result.next = curr;
    curr.val += (l1 && l1.val) || 0;
    curr.val += (l2 && l2.val) || 0;

    if (curr.val > 9) {
      curr.val -= 10;
      curr.next = new ListNode(1);
    }
    result = curr;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  result = list.next;
  return result;
};

/** Solution 3 [Medium]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNums = (l1, l2) => {
  let currentAddVal = l1.val + l2.val;
  let res = new ListNode(currentAddVal % 10);
  let increment = currentAddVal > 9 ? 1 : 0;

  if (l1.next !== null && l2.next !== null) {
    let nextl1 = ListNode(l1.next.val + increment);
    nextl1.next = l1.next.next;
    res.next = new ListNode(nextl1, l2.next);
  } else if (l1.next === null) {
    let nextl1 = new ListNode(increment);
    res.next = increment + addTwoNums(nextl1, l2.next);
    return res;
  } else if (l2.next === null) {
    let nextl2 = new ListNode(increment);
    res.next = addTwoNums(nextl2, l1.next);
  } else if (increment) {
    res.next = new ListNode(increment);
  }
  return convertToArray(res);
};

/**
 * @param {ListNode} lN
 */
const convertToArray = lN => {
  let res = [];
  for (;;) {
    if (lN.next == null) {
      return res;
    } else {
      res.push(lN.val);
      lN = lN.next;
    }
  }
};

/** Solution 4 [Medium + Long]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNums = (l1, l2) => {
  let add = 0;
  let ans;
  let head;

  while (l1 || l2) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;

    let sum = a + b + add;
    add = ~~(sum / 10); // => This is a double NOT bitwise operator (used as a substitue for Math.floor())

    let node = new ListNode(sum % 10);

    if (!ans) {
      ans = head = node;
    } else {
      head.next = node;
      head = node;
    }

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (add) {
    let node = new ListNode(add);
    head.next = node;
    head = node;
  }
  return ans;
};
