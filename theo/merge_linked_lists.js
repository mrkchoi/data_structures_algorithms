
var mergeTwoLists = function(l1, l2) {
    if (!l1) {return l2};
    if (!l2) {return l1};
    let headVal = Math.min(l1.val, l2.val);
    let head;
    if (l1.val === headVal) {
        head = l1;
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head = l2;
        head.next = mergeTwoLists(l1, l2.next);
    }
    return head;
};
