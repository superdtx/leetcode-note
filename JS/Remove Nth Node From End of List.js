/** 175ms
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = dummy;
    var count = 0;
    while(cur && cur.next){
        count++;
        cur = cur.next;
    }
    
    cur = dummy;
    for(var i = 0; i < count-n; i++){
        cur = cur.next;
    }
    
    cur.next = cur.next.next;

    return dummy.next;
};

/*两个Pointer 145ms*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur1 = dummy;
    var cur2 = dummy;
    
    for(var i = 0; i < n; i++){
        cur2 = cur2.next;
    }
    
    while(cur2.next){
        cur2 = cur2.next;
        cur1 = cur1.next;
    }
    
    cur1.next = cur1.next.next;

    return dummy.next;
};

/** 一个loop
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur1 = dummy;
    var cur2 = dummy;
    
    while(cur2.next){
        cur2 = cur2.next;
        n--;
        (n < 0) && (cur1 = cur1.next);
    }
    
    cur1.next = cur1.next.next;
    
    return dummy.next;
};
