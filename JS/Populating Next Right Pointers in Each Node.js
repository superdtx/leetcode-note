/**
Given a binary tree
    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.
Note:
You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example,
Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
 
 /**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

//dfs
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root){
        return;
    }
    
    if(root.left){
        root.left.next = root.right;
        
        if(root.next){
            root.right.next = root.next.left;
        }
    }
    
    connect(root.left);
    connect(root.right);
};

//bfs level-order traversal
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    
    if(!root){
        return;
    }
    
    var queue = [{node: root, step: 0}];
    
    while(queue.length){
        var item = queue.shift();
        var node = item.node;
        var step = item.step;
        
        node.left && queue.push({node: node.left, step: step+1});
        node.right && queue.push({node: node.right, step: step+1});
        
        queue.length && (step === queue[0].step) && (node.next = queue[0].node);
    }
};
