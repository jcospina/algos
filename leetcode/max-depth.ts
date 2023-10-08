/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let depth = 0;
    const q = [root];
    while (q.length) {
        const levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            const dq = q.shift()!;        
            if (dq.left) {
                q.push(dq.left)
            }
            if (dq.right) {
                q.push(dq.right)
            }   
        }             
        depth++;
    }
    return depth;
};

// const root = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// root.left = two;
// root.right = three;
// two.left = four;
// three.right = five;
// console.log(maxDepth(root));

const root = new TreeNode(3);
const two = new TreeNode(9);
const three = new TreeNode(20);
const four = new TreeNode(15);
const five = new TreeNode(7);
root.left = two;
root.right = three;
three.left = four;
three.right = five;
console.log(maxDepth(root));