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

import { TreeNode } from '../types/types';

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null,): void {
    if (!root) {
        return;
    }
    const traverse = (node: TreeNode | null): TreeNode | null => {        
        if (!node) {
            return null;
        }     
        const leftTail = traverse(node.left);
        const rightTail = traverse(node.right);
        
        if (leftTail) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }
        if (rightTail) return rightTail;
        if (leftTail) return leftTail;
        return node;        
    }
    traverse(root);    
};

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);
const eight = new TreeNode(8);
// const six = new TreeNode(6);

// one.left = two;
// one.right = five;
// two.left = three;
// two.right = four;
// five.right = six;

one.left = two;
one.right = six;
two.left = three;
three.left = five;
two.right = five;
three.left = four;
six.left = seven;
six.right = eight;

flatten(one)
console.log(one)