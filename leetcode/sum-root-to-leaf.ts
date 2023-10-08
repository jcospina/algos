import { TreeNode } from '../types/types';

function sumNumbers(root: TreeNode | null): number {    
    if (!root) {
        return 0;
    }
    const count = (node: TreeNode | null, val: number): number => {
        if (!node) {
            return 0;
        }
        val = val*10 + node.val;
        if (!node.left && !node.right) {
            return val;
        }
        return count(node.left, val) + count(node.right, val)
    }
    return count(root, 0)
};


const one = new TreeNode(4);
const two = new TreeNode(9);
const three = new TreeNode(5);
const four = new TreeNode(1);
const five = new TreeNode(0);

one.left = two;
one.right = five;
two.left = three;
two.right = four;

console.log(sumNumbers(one)); // 1026