/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = []
    if (root) q.push(root)
    let ans = []
    while(q.length) {
        let len = q.length
        let nodes = []
        for(let i=0;i<len;i++) {
            let node = q.shift()
            nodes.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        ans.push(nodes)
    }
    return ans
};