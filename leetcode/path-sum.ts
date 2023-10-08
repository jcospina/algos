import { TreeNode } from '../types/types';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right && root.val === targetSum) {
        return true;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

const one = new TreeNode(5);
const two = new TreeNode(4);
const three = new TreeNode(11);
const four = new TreeNode(7);
const five = new TreeNode(2);
const six = new TreeNode(8);
const seven = new TreeNode(13);
const eight = new TreeNode(4);
const nine = new TreeNode(1);

one.left = two;
one.right = six;
two.left = three;
three.left = four;
three.right = five;
six.left = seven;
six.right = eight;
eight.right = nine;

console.log(hasPathSum(one, 5));
