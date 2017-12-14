/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

var k1 = new ListNode(2);
k1.next = new ListNode(4);
var k2 = new ListNode(5);
k2.next = new ListNode(6);
k2.next.next = new ListNode(4);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	var x = l1, y = l2, c = 0, d = new ListNode(0);
	var s = d;
	while (x != null || y != null) {
		var a = x == null ? 0 : x.val;
		var b = y == null ? 0 : y.val;
		s.next = new ListNode((a + b + c) % 10);
		c = parseInt((a + b + c) / 10);

		s = s.next;
		if (x != null) x = x.next;
		if (y != null) y = y.next;
	}
	if (c > 0) {
		s.next = new ListNode(c);
	}
	return d.next;
};
var addTwoNumbers2 = function (l1, l2) {
	var x = l1, y = l2, d = new ListNode(0);
	var s = d;
	while (x != null || y != null) {
		var a = x == null ? 0 : x.val;
		var b = y == null ? 0 : y.val;
		var c = parseInt((a + b + s.val) / 10);

		s.val = (a + b + s.val) % 10;

		if (x != null) x = x.next;
		if (y != null) y = y.next;
		if(x != null || y != null || c > 0){
			s.next = new ListNode(c);
			s = s.next;
		}
	}
	return d;
};
// console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers2(k1, k2));