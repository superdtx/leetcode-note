/**
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
Hint:
Try to utilize the property of a BST.
What if you could modify the BST node's structure?
The optimal runtime complexity is O(height of BST).
*/

//Iteration DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var node = root,
        stack = [],
        count = 0,
        right;
    
    while(node){
        stack.push(node);
        node = node.left;
    }
    
    while(stack.length > 0){
        node = stack.pop();
        count++;
        
        if(k === count) {
            return node.val;
        }
        
        right = node.right;
        
        while(right){
            stack.push(right);
            right = right.left;
        }
    }
    
    return null;
};

//Recursive DFS
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    if(root === null){
        return;
    }
    
    var count = [k];
    var res = [];
    
    helper(root, count, res);
    return res[0];
};

function helper(node, count, res){
    
    node.left && helper(node.left, count, res);
    count[0]--;
    if(count[0] === 0){
        res[0] = node.val;
        return;
    }
    node.right && helper(node.right, count, res);
}
